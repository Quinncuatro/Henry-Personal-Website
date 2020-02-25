---
title: Day 2 - What's the plan?
category: "DevOps"
date: "2019-07-02"
type: "blog"
desc: "My outline for what I would like to learn about DevOps this month."
---

In the spirit of learning in public, I wanted to share why I picked Kubernetes as the topic of my deep dive, what my defined goals are for the end of the month, and what my learning plan looks like in order to get me over the finish line.

As short as a month can feel, this is a marathon; not a sprint. Let's take these in order:

1. Why did I pick K8s?

I have a bit of a weird background: computer nerd in a high school with no computer courses -> Champlain College CNIS student -> DBA at the US Courts -> web developer at the US Courts -> web and infrastructure developer for the AO of the US Courts -> DevOps Engineer at Clarity Software Solutions.

All of that is to say I have a bit of a background in every bit of technology involved with creating, deploying, and scaling web applications.

Jack of all trades, master of none.

I was initially hired at the courts to help with a major platform upgrade that, like government work does, got sidelined for two years. I ended up spending that time teaching myself to code. While building some small LAMP apps to help automate tasks for the HR department, I found myself rebuilding servers to manage PHP version conflicts.

At a certain point, I realized there had to be a better way than doing that work manually. It was at this point that I got a side job teaching at a local developer bootcamp. As I was getting paid to learn new skills that I could pass down to my students, I stumbled onto Docker.

It blew my mind that I could cram so many different containers into so small a space and not have to worry about dependency conflicts anymore. This was the end of my constantly rebuilding servers! I dug into Docker hard and even ran a workshop on its use at GDG Dev Fest New Haven 2017. The Comp Sci Department Chairperson of SCSU actually took what she learned in that workshop and started containerizing up her lab environments for her students. Yet another example of how teaching is one of the best ways to learn.

After myself and other developers in the US Courts made enough noise about containers being the future, we finally got the folks in D.C. to build us a national OpenShift environment. Game on. This opened the doors to our small applications built in our own districts to go national. I was being carted around to conferences around the country (Minneapolis, Phoenix, and Washington D.C.) to talk about my projects and teach other judiciary developers the promise of implementing container technologies into their workflows. Using OpenShift made it so that we didn't have to worry about uptime, or scaling, or persistent storage. Everything just worked. It was lightning in a bottle.

My four years with the judiciary culminated in a morning view dashboard we built for our judges. We were able to save every one of our judges about an hour's worth of time every morning. When you look at their salaries and how many judges we have in the country, this tool serves to save the judiciary tens of millions of dollars worth of downtime every year. And it wouldn't have been possible without containers and orchestration platforms like OpenShift.

After working with OpenShift for a year, and getting the dashboard to a point where other developers can continue to roll it out, I had to leave that job. I actually got hired where I am now due to all of the experience I gained at the courts with shoving legacy technology into containers and scaling them out. (I'll have a fun post later this month about getting Vue, ColdFusion, MySQL, and Node all working together in containers).

My new company is just starting their journey of adopting DevOps principles across the organization. We're in a good spot to start putting some of our internal tools and processes into containers to run automatically in order to take some load off of our developers and release engineers.

The more we can automate, the more our developers can innovate, and the faster we can grow.

In that vein, I want to learn as much as I can about how the underpinnings of how container orchestration systems work. Tools like Kubernetes are going to be key to the success of my organization and I want to be able to roll my sleeves up and help with the nitty gritty as I go about my DevOps evangelizing over the coming years.

2. What do I actually hope to accomplish this month?

I have some containerized tools that I've already built in my time here at Clarity that are already saving my team a lot of time every day. Which is great, because we're still swamped even after getting that time back.

However those are still tools we have to manually spin up, manually kick off, and manually spin down.

By the end of July I want to have a built out Kubernetes cluster (even if it's local on my MBP) that can handle running my various tool containers.

I want to understand how to stand the cluster up, how to manage it, and how to debug it when things go wrong. Kubernetes is going to be a key technology in pushing my organization towards automation enlightenment and I want to have an intimate understanding of my tools.

Anything else I learn about process automation, Bash, and Go along the way will purely be gravy.

3. What is my learning plan?

I initially wanted to work through the book [Classic Shell Scripting](http://shop.oreilly.com/product/9780596005955.do) this month, but priorities change.

It was only yesterday that I decided I'm doing Kubernetes instead so I've had to retool a bit.

After gathering input from folks on Twitter, /r/DevOps, and my various Slack groups I landed on [The Kubernetes Book](https://leanpub.com/thekubernetesbook) by [Nigel Poulton](https://twitter.com/nigelpoulton). Seems like it's a great way to learn things from the ground up. I also found this great free eBook from O'Reilly/NGinx called [Cloud Native DevOps With Kubernetes](https://www.nginx.com/resources/library/cloud-native-devops-with-kubernetes/).

Those, paired with [Kelsey Hightower's](https://github.com/kelseyhightower) tutorial [Kubernetes-The-Hard-Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) should give me a REALLY good foundation for understanding the ins and outs of managing my own Kubernetes cluster.

I'd like to read both of those books, work through that tutorial, and have my own cluster set up and captured in code by the end of July. The idea is to still share what I learn every day with all of you, in order to pass that knowledge down to those who come after me. Maybe this will turn into a good resource on setting up your first cluster.

Who knows how many cups of coffee this will all take. So far, we're up to five in the first two days.

---

I'll be back tomorrow with something actually technical. Until then, stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://henryneeds.coffee/blog)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
