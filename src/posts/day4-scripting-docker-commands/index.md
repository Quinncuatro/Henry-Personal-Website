---
title: Day 4 - Scripting Docker Commands With Spinup.sh
category: "DevOps"
date: "2019-07-05"
type: "blog"
desc: "An explanation of a design pattern I use - using a 'spinup.sh' file to help me manage different Docker-Compose builds."
---

In Day 3, I included a blurb from my DevOps-y friends about the natural progression of abstractions on top of containers:

> You usually start with docker run CLI commands and graduate to tools with more layers of abstraction as you need them. Docker-compose comes next, followed by automating several commands with Bash scripts, which is eventually followed by Kubernetes.

I also shared with you a better way to handle switches in Bash scripts. Today I'll show you how I moved from running my own Docker commands to running off of one shell script with a handful of flags.

---

For the first few months of learning how to use Docker, and then how to utilize it in projects, I was running A LOT of individual Docker CLI commands every day. I then moved on to having Docker Compose manage things for me. However, even that started to be a burden for some edge cases I was dealing with.

After thinking back on my conversations with other friends in the DevOps field, I remembered they all told me that you'll hit a certain point of wanting to automate your workflows... so I started diving into Bash scripts.

I knew I would want my script to do a few different things:

- Spin up all of my container infrastructure
  - One version with explicit commands for each piece of infrastructure (dev)
  - One version running off docker-compose (prod)
- Tear down all of my container infrastructure (teardown)

First thing I did was to make sure my `docker-compose.yaml` file was built out. That would be my source of truth - if running `docker-compose up -d` made everything work correctly, then the rest of this script would be based on what was written in that file.

```yaml
version: "3.7"
services:
  app:
    container_name: hquinn-app
    image: "hquinn_app:latest"
    networks:
      - hquinn-net
    ports:
      - "8080:8080"
    restart: always
    volumes:
      - type: volume
        source: hquinn_app_home
        target: /var/www/html

networks:
  hquinn-net:

volumes:
  hquinn_app_home:
```

> I felt that I should point out that this is just an example project. `hquinn-app` isn't a real image, container, or project. Use this as a template to plug in your own information. It's a good training exercise!

Running `docker-compose up -d` seems to work with this yaml configuration. Good! Now we can move on to creating our Bash script. We're going to call this `spinup.sh`.

Let's start by setting the improved switch statement that we learned about yesterday. We'll include four flags (help, dev, prod, teardown) as well as a catchall for errors.

```bash
#!/bin/bash

while getopts ":hdpt" opt; do
  case ${opt} in
    h )
      printf "USAGE: ./spinup.sh [OPTION]... \n\n" 
      printf "-h for HELP, -d for DEV, -p for PROD, or -t for TEARDOWN \n\n"  
      exit 1
      ;;
    d )
      exit 1
      ;;
    p )
      exit 1
      ;;
    t )
      exit 1
      ;;
    \? )
      echo "Invalid option: %s" "$OPTARG" 1>&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))

printf "USAGE: ./spinup.sh [OPTION]... \n\n" 
printf "-h for HELP, -d for DEV, -p for PROD, or -t for TEARDOWN \n\n" 
exit 1
;;
```

Solid. This switch is going to make it really easy to just plug in commands we want to run for each flag.

Production will probably be the easiest since we'll be leaning on the `docker-compose.yaml` files we already built out. Let's fill those commands into the `p )` case:

```bash
p )
  # Rebuild image
  docker-compose build

  # Spin up container
  docker-compose up -d

  exit 1
  ;;
```

As you can see, we're really just having this bash script run the same commands we would run ourselves to start up our containers, volumes, and networks. We're just splitting up the different jobs into different flags so we can utilize the same script to accomplish a number of different tasks.

Our dev case [`d )`]isn't going to be much different. We're just manually creating a network and running one long `docker run` command to start up our container:

```bash
d )
  # Rebuild image hquinn_app
  docker-compose build --no-cache

  # Create hquinn-net bridge network for container(s) to communicate
  docker network create --driver bridge hquinn-net

  # Spin up hquinn-app container
  docker run -d --name hquinn-app --restart always -p 8080:80 -v hquinn_app_home:/var/www/html --network hquinn-net hquinn_app:latest

  exit 1
  ;;
```

> Henry, what's the actual difference between your dev and prod builds here?

Great question, reader! This is part of the fun (pain?) of initially learning about containers. There are a lot of different ways of dealing with the same tasks and you learn best practices as you go.

When I initially wrote this script, I was working on that ColdFusion, Informix, and MySQL project. Due to the way it was initially built before it was handed to me, we needed to run different sets of commands to spin it up depending on if we were running it locally for development or if we were running it in production for actual use by judges.

As I dug deeper into Docker, I had all kinds of sources telling me what should have been obvious:

> One of the main tenets of containers is that your code should run the same everywhere. It's the same containers, just running on different engines.

That's to say that I should be running the same commands to run the same containers everywhere. Since I wasn't, I was still falling prey to the whole `but, it worked on MY machine` gotcha.

Since then I've trimmed this script down a bit. I still like having the longer commands in my `d )` case, though. It allows me to test some things quickly in the way that I stand up my infrastructure that I can then solidify in my `docker-compose.yaml` files that I can then run in production environments. This is another tenant of containers, we can treat our infrastructure as code. Once our `docker-compose.yaml` is fine-tuned to our liking, we can check it into version control and know that it's safe for all time.

Now the `t )` case is meant to tear down all of our infrastructure. Kill containers, and remove containers,  images, volumes, and networks. That way we can get a clean slate to spin up and test out new changes we made to our infrastructure.

We're going to accomplish this with a number of `if/then` blocks:

```bash
# If hquinn-app container is running, turn it off.

running_app_container=`docker ps | grep hquinn-app | wc -l`

if [ $running_app_container -gt "0" ]
then
  docker kill hquinn-app
fi
```

For this particular block, we're setting a variable named `running_app_container` to the output of `docker ps | grep hquinn-app | wc -l`. Which means if the container `hquinn-app` is up and running, `running_app_container` is set to the number of lines returned by that command.

The `if/then` block then checks to make sure the controlling variable is greater than 0. If true, it runs the command `docker kill hquinn-app` to kill the container.

We'll use a series of these blocks to manage our containers, images, volumes, and networks.

Let's see the entire `spinup.sh` script, with all of the parts plugged in:

```bash
#!/bin/bash

while getopts ":hdpt" opt; do
  case ${opt} in
    h )
      printf "USAGE: ./spinup.sh [OPTION]... \n\n" 
      printf "-h for HELP, -d for DEV, -p for PROD, or -t for TEARDOWN \n\n"  
      exit 1
      ;;
    d )
      # Rebuild image hquinn_app
      docker-compose build --no-cache

      # Create hquinn-net bridge network for container(s) to communicate
      docker network create --driver bridge hquinn-net

      # Spin up hquinn-app container
      docker run -d --name hquinn-app --restart always -p 8080:80 -v hquinn_app_home:/var/www/html --network hquinn-net hquinn_app:latest

      exit 1
      ;;
    p )
      # Rebuild image
      docker-compose build

      # Spin up container
      docker-compose up -d

      exit 1
      ;;
    t )
      # If hquinn-app container is running, turn it off.
      running_app_container=`docker ps | grep hquinn-app | wc -l`
      if [ $running_app_container -gt "0" ]
      then
        docker kill hquinn-app
      fi

      # If turned off hquinn-app container exists, remove it.
      existing_app_container=`docker ps -a | grep hquinn-app | grep Exit | wc -l`
      if [ $existing_app_container -gt "0" ]
      then
        docker rm hquinn-app
      fi

      # If image for hquinn_app exists, remove it.
      existing_app_image=`docker images | grep hquinn_app | wc -l`
      if [ $existing_app_image -gt "0" ]
      then
        docker rmi hquinn_app
      fi

      # If hquinn_app_home volume exists, remove it.
      existing_app_volume=`docker volume ls | grep hquinn_app_home | wc -l`
      if [ $existing_app_volume -gt "0" ]
      then
        docker volume rm hquinn_app_home
      fi

      # If hquinn-net network exists, remove it.
      existing_hquinnnet_network=`docker network ls | grep hquinn-net | wc -l`
      if [ $existing_hquinnnet_network -gt "0" ]
      then
        docker network rm hquinn-net
      fi

      exit 1
      ;;
    \? )
      printf "Invalid option: %s" "$OPTARG" 1>&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))

printf "USAGE: ./spinup.sh [OPTION]... \n\n" 
printf "-h for HELP, -d for DEV, -p for PROD, or -t for TEARDOWN \n\n" 
exit 1
;;
```

All in all, this is looking pretty tight. You can add more commands in if you need anything more complicated. You can add more flags to handle more edge cases, too.

This script (and a handful of others like it) really helped me through the last six months of my job with the courts. However, with the projects I'm working on now, the amount of these scripts I would need to remain productive is going to be a burden to maintain. We need more power and more control over what we're doing.

Hence, my deep dive into Kubernetes.

I haven't forgotten about it. I'm starting to dig into the books that I bought. As far as Kubernetes THe Hard Way goes, [Christian Corbin](https://dev.to/christiancorbin) pointed out that the tutorial might be out of date. To that end, I think I'm going to drop K8s The Hard Way and just focus on the books that I bought and the [Kubernetes.io](https://kubernetes.io/docs/tutorials/) when I need some hands-on practice.

DevOps is all about iterating on and improving processes. Happy to change things here as better opportunities come up!

---

It's a holiday weekend and I'm headed to Maine. Time to `spinDOWN.sh`. 

/rimshot

I'll try to write some more while I'm on vacation, though you might not hear from me until next week. 

Stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://blog.henryneeds.coffee)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
