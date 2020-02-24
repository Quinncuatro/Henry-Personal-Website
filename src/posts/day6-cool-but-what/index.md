---
title: Day 6 - Cool, but what can you ACTUALLY use containers for?
category: "DevOps"
date: "2019-07-28"
type: "blog"
desc: "An explanation on real life situations where one might want to use containers."
---

We're going to take a bit of a sidestep this week.

I was planning on converting a Docker-Compose project into a Kubernetes one, but I had a small project pop up this week. That project involved me setting up a container to mimic a production environment so I could test my script without disrupting any of our clients.

Figured a practical example of how a container saved the day would be a better topic than me learning something just to learn something.

---

Every once in awhile I'm given a task that, once explained to me, seems like it's going to take a lot of time. Like hours of my attention every time this bit of work comes up.

I'll usually ask how often this task comes up in a given quarter. If the combined time for a quarter is more than a day or two, I usually throw the [XKCD comic on automation](https://xkcd.com/1319/) out the window just go for it.

It's more worth my time to write and maintain an automation script than it is to have me out of "the fight" for a few hours to deal with something mundane while the rest of my team is tackling a production issue.

This week I was given a task that requires me to hop on a server and programmatically clean out some files. Sometimes it's just looping over a list and using some simple `*` matching to nuke some stuff. Sometimes it needs some sed magic to make things work.

Once I decided that it was worth it to automate this task, I copied the Confluence outlining steps into a new document in VS Code. I chunked up the tasks based on similar work that needed to be done, played around with some Bash scripting, cried a bit, and eventually came up with a more sophisticated version of the following GitHub repo:

> PROJECT CODE: [Release The Hounds](https://github.com/Quinncuatro/ReleaseTheHounds) <-- GitHub Link 

Now let's dive into what exactly is going on in there. The README is mostly just telling you how to start the container and run the scripts in the `./code/` directory:

```bash
$ docker pull centos:5.11 

$ docker run -v `pwd`/code/:/var/theHounds/ --name DogHouse -it centos:5.11 /bin/bash 

$ cd /var/theHounds/ 

$ ./SetUpEnv.sh 

$ ./ReleaseTheHounds.sh
```

> "But Henry, why are you using a container for this?" 

Great questions! Presently I have three answers for you: 

1. We, like a lot of companies, run Red Hat Enterprise Linux in production. Spinning up a CentOS (downstream project from RHEL) server allows me to closely approximate the environment I want my script to run in. This gives me a more similar testing environment than say, Windows. 

2. Containers are meant to be ethereal. One of the scripts in `./code/`, `SetUpEnv.sh` creates dirs and files for me to test against. If I need to test again, I can restart the container, and my setup script will create the same env every time. 

3. Containers don't have access to any local storage that you don't explicitly give them access to. That way, if I mess up my script, I won't accidentally delete a local directory I want to keep. 

```bash 
#!/bin/bash

# EXCERPT FROM SETUPENV.SH:  

mkdir -p /opt/hoodlums 

touch /opt/hoodlums/2019-03-07_Thief.zip 

touch /opt/hoodlums/2019-06-12_Ruffian.zip 

touch /opt/hoodlums/2019-07-25_Vandal.zip
``` 

So, once I start up my container and run this script, I'll always have the same environment to test my script against. And that's where `./code/ReleaseTheHounds.sh` comes into play. 

This script exists solely to help me get rid of some files. Sometimes that can be as easy as looping over a variable and shredding any files that kind of match. 

```bash
#!/bin/bash

# Set up vars
HOODLUMTYPES="Thief Ruffian Hooligan Delinquent Vandal"
...

# A HOODLUMS
cd /opt/hoodlums/

for i in $HOODLUMTYPES; do shred -n 7 -u -v *$i.zip; done;
...

echo "------------------------------";
echo "LEFTOVER FILES IN /opt/Hoodlums/";

ls /opt/hoodlums/;
```

I can run this script inside of my Docker container to make sure that it's catching any edge cases I set up in `SetUpEnv.sh` without worrying about accidentally touching my local `/opt/` dir on my MacBook Pro. Which is good, because I don't want to accidentally nuke Gradle or Vagrant! Sometimes I need to run my data through a sanitizer before I can use it to find files. For example, one of our inputs is `163Killer` and a file we're testing against is `0277_Killer.yaml`. We need to extract `Killer` to match that yaml file. That's easy enough with an extra loop and some sed magic: 

```bash
#!/bin/bash

WHALETYPES="123Fin 456_Gray 495Beluga 385_Livyatan 012_Blue 978Bowhead 149_Humpback 163Killer"
SANITIZEDWHALES=""

function whaleSanitizer {
  input=$1
  input=`echo $input | sed 's/^[0-9]*//'`
  input=`echo $input | sed 's/^_*//'`
  echo $input
}

# B WHALES
for i in $WHALETYPES; do
  SANITIZEDWHALES="$SANITIZEDWHALES $(whaleSanitizer $i)"
done;

echo "------------------------------";
echo "LEFTOVER FILES IN /var/lib/docker/";

ls /var/lib/docker/;
```

Without turning this into a Bash post, we're running the `WHALETYPES` var through the `whaleSanitizer` function and into the fresh `SANITIZEDWHALES` var. We're then using that new var to find files we need to shred. Then, at the end of the script, I `ls` all of the dirs I touched to make sure the files I wanted to get rid of are no longer there. After I simplified this a bit in order to share it, it ended up being a pretty simple example. I'm spinning up a container, creating a temporary test environment, then running my cleanup script against that test environment. If it doesn't work right, I can make some changes, set my environment back up quickly, and try again. An added benefit is that this is easily repeatable. The `README.md` file with the instructions on setting up and running the test environment is only 176 bytes. That's right. Bytes. When I inevitably need to update this script, pulling down the GitHub repo will take a few seconds. I can make my changes, and have a container stood up and ready to test against in a matter of minutes. Shorter, if I already have the `centos:5.11` image pulled locally. 

---

Hopefully, this makes the benefits of containers seem a little more real. If any of you read this far and have had to spin up containers for a similar kind of project (work or personal) drop it in the comments. Let's get some discussions going and help the newer folks learn when to reach for containers! 

Also, as I work on my Compose -> Kubernetes project/article, I'm also waiting on some fun toys to come in from Amazon. This will for sure be its own article, but I'm hopping on the Raspberry Pi Kubernetes cluster bandwagon.

![](https://thepracticaldev.s3.amazonaws.com/i/cl0eiam0zxfho5c6pa9d.jpg)
> Photo Credit: https://www.c4labs.com/product/8-slot-stackable-cluster-case-raspberry-pi-3b-and-other-single-board-computers-color-options/

Until then, stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://blog.henryneeds.coffee)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
