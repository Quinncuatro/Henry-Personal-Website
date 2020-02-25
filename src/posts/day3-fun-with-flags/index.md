---
title: Day 3 - Fun With Flags
category: "DevOps"
date: "2019-07-04"
type: "blog"
desc: "An explanation as to how I use flags in Bash scripts to make multi functional CLI programs."
---

First off, some housekeeping. I can already tell that coming up with a daily post is going to be harder than my buddy Alex had with his SVG work. He had one animation to complete every day. I'm spending all month working towards one larger goal.

However, I'll do my best to share something I learn every day, even if it's small.

---

## Background

I bought [Nigel Poulton's book bundle from LeanPub](https://leanpub.com/b/masteringcontainers) and am starting to dig into those, but learned something neat recently that I thought I would share.

When I was still at the courts, I was teaching myself how to use containers as quickly as I was implementing them in projects. While learning how to manage multiple sets of containers, I spoke with my college friends who were in DevOps-y roles about the tools they used. It shocked me to hear everyone say the same thing:

> You usually start with `docker run` CLI commands and graduate to tools with more layers of abstraction as you need them. `Docker-compose` comes next, followed by automating several commands with Bash scripts, which is eventually followed by Kubernetes.

When I was shoving legacy applications into containers, I had to restart my containers a lot. That led to me learning how to utilize Bash scripts to automate a lot of that pain out of my life. I taught myself by piecing together different snippets I found on StackOverflow. That's all well and good, but I never read a book or anything to really get the basics down.

At my new job, I'm using Bash to automate some processes and I'm learning a LOT from actually being around other developers. [Side note: being a one-man government dev shop gets REALLY lonely.]

## Task

I recently tasked myself with building a tool that automated a process that takes our team of three engineers approximately 0.5 - 1.5 man hours each day. It involves a lot of Git operations as we prepare for production deployments. It needs to have a pair of eyes on it pretty much every step of the way. It's tedious.

Luckily I was able to take a script a coworker had been working on, toss it into a Docker container, and used that as a base. This version still required one of us to run it over and over again until our list of tasks was complete. That wasn't going to fly - this needed to be automated all the way through and it needed actual error handling to let us know when something broke.

After building it out, I had a nice little CLI tool that had a handful of different flags that would change the way the script ran depending on the task at hand. I had built small things like this for the court and never really ran into any problems as I was just building tools for my own use.

My coworker took one look at it and asked **"why do these flags need to be in a specific order?"**

Frankly, I had never even considered that. There were six flags and not all of them were used every time. If they weren't added in the correct order, the script would break, and the Git branch commit tree might be compromised.

No bueno.

## Solution

I very quickly got acquainted with Bash switches and all of the fun that comes with them. I've been writing code professionally for a few years now, so I knew enough to set up a quick switch after a Google search, but I didn't know the correct way to handle errors.

```bash
#!/bin/bash

# Basic switch to handle a couple of flags

case "$1" in
a )
  printf "Option A \n"
  exit 1
  ;;
b )
  printf "Option B \n"
  exit 1
  ;;
esac
```

And there are all kinds of errors with switches to handle flags in a CLI tool:

- The user may just not know the correct way to call your tool.
- A user could enter a flag you didn't intend for them to use.
- A flag may need an extra argument that a user didn't provide.

Well, the first fix is easy. We just add another flag to print out help text:

```bash
#!/bin/bash

# Basic switch to handle a couple of flags, with added help flag

case "$1" in
h | help )
  printf "HELP MESSAGE \n"
  exit 1
;;
a )
  printf "Option A \n"
  exit 1
  ;;
b )
  printf "Option B \n"
  exit 1
  ;;
esac
```

Let's make sure this works:

```shell
hquinn$ ./example.sh -a

Option A

hquinn$ ./example.sh -b

Option B
```

The next two fixes are actually where my new tidbit comes into play. We need to let our users enter flags in any order they want. We also need for them to be able to enter in arguments with their flags.

Think about the command `yum install git`.

`Yum` is your tool, `install` is your "flag", and `git` is the argument you're passing with your flag to your tool.

I learned that after wrapping your case in a while loop you can use the built-in Bash function `getopts` to limit the types of flags that can even make it into your switch:

```bash
#!/bin/bash

# Switch to let users place flags in any order they want

while getopts ":hab" opt; do
  case ${opt} in
  h )
    printf "HELP MESSAGE \n"
    exit 1
    ;;
  a )
    printf "Option A \n"
    ;;
  b )
    printf "Option B \n"
    ;;
  esac
done

shift $((OPTIND -1))
```

What happens when we run that?

```shell
hquinn$ ./example.sh -h

HELP MESSAGE
```

Alright, cool. Now we can use the `${opt}` variable in our switch to drop us into different cases. The `":hab` bit in the while loop instantiator is what allows us to limit what flags are even allowed to make it into the switch. If the flag isn't in that list, our switch doesn't kick off, and code doesn't get run. Easy peasy.

After any of those letters in that flag limiting list, we can place another `:` to denote that a particular flag requires an added argument:

```bash
#!/bin/bash

# Switch to let users place flags in any order they want

while getopts ":hab:" opt; do
  case ${opt} in
  h )
    printf "HELP MESSAGE \n"
    exit 1
    ;;
  a )
    printf "Option A \n"
    ;;
  b )
    printf "Option B \n"
    newVar=$OPTARG
    printf "Argument is $newVar \n"
    ;;
  : )
    printf "Invalid option: -$OPTARG requires an argument \n" 1&gt;&amp;2
    exit 1
    ;;
  esac
done

shift $((OPTIND -1))
```

Let's check that out.

```shell
hquinn$ ./example.sh -b whatever

Option B

Argument is whatever

hquinn$ ./example -b

Invalid option: -b requires an argument
```

You may have caught the extra case in the last example. When we set up a flag to need an added argument, Bash provides us with a way to catch errors. The `:` case only gets run when a flag that needs an added argument (in this case, `-b`) isn't actually provided that extra argument.

Lastly, we need to be able to print out a helpful error if a user inputs a flag that's not in our list of allowed flags.

> "Henry, does Bash give us a tool for that, too?"

You bet it does.

If an invalid option is provided in calling this CLI tool, the opt variable will be assigned the value ?. Let's add a case to handle that:

```bash
#!/bin/bash

# Switch to let users place flags in any order they want

while getopts ":hab:" opt; do
  case ${opt} in
  h )
    printf "HELP MESSAGE \n"
    exit 1
    ;;
  a )
    printf "Option A \n"
    ;;
  b )
    printf "Option B \n"
    newVar=$OPTARG
    printf "Argument is $newVar \n"
    ;;
  \? )
    echo "Invalid option: $OPTARG" 1&gt;&amp;2
    exit 1
    ;;
  : )
    printf "Invalid option: -$OPTARG requires an argument \n" 1&gt;&amp;2
    exit 1
    ;;
  esac
done

shift $((OPTIND -1))
```

Now, if a user were to pass in a flag we don't want them to, they'll get an error message alerting them to that fact.

```shell
hquinn$ ./example.sh -c

Invalid option: c
```

Turns out that there is a LOT that you can do with flags in bash. If you have a script that runs even a little differently each time you run it, consider adding some flag logic into it. It takes a few minutes, and more than a couple tries, to set up correctly. However, the time it saves you later on with helpful console messages is invaluable

---

I'm Henry Quinn and this has been Fun With Flags. Stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://henryneeds.coffee/blog)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
