---
title: Day 5 - The One Where It Turns Out I Misunderstood Kubernetes
category: "DevOps"
date: "2019-07-19"
type: "blog"
desc: "Turns out Kubernetes is at least a LITTLE bit tricky - and mostly functions on labels."
---

I just finished [Nigel Poulton's](https://twitter.com/nigelpoulton) [The Kubernetes Book](https://leanpub.com/thekubernetesbook). I highly recommend it, even though it pointed out some pretty big misconceptions I had about how some important K8s components work.

It's a great surface level intro to the world of Kubernetes and how it can help build projects that can scale and self heal. Excellent for beginners and intermediate users alike.

I also took some time off from posting. Turns out that DevOps stuff takes a little longer to learn and internalize than I thought. Going to try and scale down to weekly posts and keep this going longer than a month.

Burnout is a really real thing.

---

I've touched on this in some previous posts, but my time with the U.S. Courts was a lot of trial under fire "learn as you go." In most work environments that wouldn't be a problem, but there isn't much in the way of traditional Sr./Jr. developer relationships within the judiciary.

What that means, in a practical sense, was that I was responsible for teaching myself any technologies that I didn't start the job already knowing.

At a certain point, I was handed a ColdFusion/Informix/MariaDB application and was tasked with getting the application into a certain amount of other districts within a certain amount of time.

> For a good laugh before your weekend starts, take a look through this [job posting for my old position](https://henryneeds.coffee/files/MyOldCourtProgrammerJob.pdf) that just went up. I'll be very surprised if they find a developer they're happy with for those job requirements and salary range.

I think it's telling about the career path I would eventually take that my first thought wasn't about ColdFusion being a garbage language, but rather about how I would both deploy and maintain this application in multiple courts.

Enter: containers.

I had to teach myself Docker, and eventually OpenShift, from scratch. There were a couple of folks working for the Administrative Office in D.C. moonlighting as developer advocates who helped me along the way. I owe the current state of my career to Jonathan, Carl, and Tom; but for the most part, I was learning these complicated technologies in a silo.

I'm unsure if it was real or false competence that made me think I had a handle on everything as we were rushing towards our initial rollout, but I thought knew everything. Typical 20-something bravado.

That is, at least until I read [The Kubernetes Book](https://leanpub.com/thekubernetesbook). I learned that even though I had monkey wrenched our application into a deployable state, I had three big misconceptions about how Kubernetes works under the hood.

### 1.) How services and deployments differ:

When I was getting our JDash product ready for our initial deployment I was mostly just taking known good .yaml files and modifying them to fit my own needs - basic round peg -> round hole stuff.

It was enough to get the job done, but I wasn't understanding what I was doing.

I had a basic understanding that pods were wrapped in containers that can optionally be wrapped in deployments, but didn't have a firm understanding of what these first-class Kubernetes objects provided.

Turns out that there's a base paradigm of separation of concerns that stated that pods should typically (with a few exceptions) only contain one type of container.

Then, those pods can be wrapped in deployments. Those deployments can be configured to keep a certain amount of pods available at all times (including rolling updates) so that your applications gain the ability to scale and self heal.

Thus, the power of containers (mostly easy scaling) in K8s lies in deployments managing pods, rather than the containers themselves.

Understanding that clicked some things into place for me.

### 2.) How PVs and PVCs work:

I had a loose understanding that PVCs (persistent volume claims) were related to PVs (persistent volumes) in that they both facilitated some kind of persistent data storage to power our ethereal containers.

However, I thought that a PVC was always what provisioned the space a PV took up.

Turns out, I was half right.

Typically, in K8s, you would create a PV that utilized some sort of storage from a storage provider that would then be "claimed" by the PVC. The PVC acts as a ticket that allows a pod to access the storage provisioned in the PV.

Additionally, though, there are K8s resources called `storage classes`. These set up a connection to a storage provisioner that allow for dynamic storage allocations. That way, you can point a pod's PVC to a storage class and have your PV automatically created and connected to your pod. This behavior works across local solutions (NFS, SMB, etc) and cloud services (AWS, Azure, GCE, etc).

Not having to manually create persistent storage for applications at scale is a HUGE benefit of K8s that I had no solid understanding of.

### 3.) What exactly labels do:

I had played with labels before, but mainly as adding my name as an author to Dockerfiles.

```yaml
FROM lucee/lucee5:5.0.1.85

LABEL author="Henry Quinn <henryquinniv@gmail.com>"

# TOMCAT CONFIGS --> OPTIONAL to implement if you need custom Tomcat config.

COPY config/lucee/setenv.sh /usr/local/tomcat/bin/
...
```

That said, I had no idea what kind of insane power they provide you with an orchestrator like Kubernetes.

Turns out labels are what connect everything. Let's take `services` for example.

Services are what enable easy networking within a cluster. Short story is that services provide a stable IP address, DNS name, and port. They handle all of the complicated networking bits of forwarding traffic on to ever-changing amounts of pods, containers, and other resources.

That way `https://domain.tld` always points to your application, regardless of how many pods have been created to accommodate traffic.

But, as your service is handling load balancing for you, it needs to know which node(s) it can throw requests to. You may have a six node cluster with a particular app only running pods on three of those nodes. If a user tries to visit your application, that service is going to be using `labels` to figure out how to handle it.

That service will be configured to have certain label selectors that will match certain labels you provide to your pods in your yaml. 

In short, those labels appear to be what provide most of the magic in Kubernetes. They're what help your cluster master node draw the complicated map across your entire cluster so that it knows how to navigate any kind of request that comes in.

Understanding that is really what made everything click for me.

---

All in all, I think I was able to get 80% of my way to a solid understanding of Kubernetes on my own.

And I'm damn proud of that.

However, reading this short (160 page) book made the last 20% click into place. And that understanding is going to power a big new project I'm picking up at work.

But more on that later. ;)

---

Now that I have a better understanding of K8s, I'm going to `$ kubectl apply myWeekend.yaml`. See y'all next week. Until then, stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://blog.henryneeds.coffee)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
