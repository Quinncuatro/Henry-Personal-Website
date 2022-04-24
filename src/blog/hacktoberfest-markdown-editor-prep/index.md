---
title: Hacktoberfest Markdown Editor Challenge, Day -2 (Prep Work)
category: "Electron"
date: "2020-09-29"
type: "blog"
desc: "The prep work I did to get ready for building a better markdown editor for Hacktoberfest 2020."
---

Real quick, as an aside:

---

As an aside - in the spirit of Hacktoberfest, y'all should all check out [All Things Open](https://2020.allthingsopen.org/) - A polyglot technology conference focusing on the tools, processes, and people making open source possible.

It's a free virtual conference taking place on October 19th and 20th, with tracks covering topics like DevOps, community leadership, inclusion and diversity, and various workshops.

It's going to be a great time full of great talks. I'll be giving a full-length talk on tech debt and an ignite on digital transformations in government myself, but I'm very excited to hear from folks like [Liz Fong-Jones](https://2020.allthingsopen.org/speakers/liz-fong-jones/), [John Papa](https://2020.allthingsopen.org/speakers/john-papa/), and [Remy DeCausemaker](https://2020.allthingsopen.org/speakers/remy-decausemaker/).

Sign up and come hang out for a couple of days to get the open source juices flowing! Now back to the blog!

---

If you're reading this, I'm assuming you saw my last post on how I want to bump up the Hacktoberfest challenge a bit above just making four pull requests.

I want to build my own open source cross-platform cloud-synced desktop markdown editor in just 31 days.

> Henry, why do you keep doing these things to yourself?

Great question. I'm unsure of the answer, though. I find that when I get stuck on a problem like this for so long (at this point a couple of years of trying to find a markdown editor that fits all my needs) that I just need to buckle down and solve it. It's mostly just a fun bonus that it gives me some material to blog about on DEV and to stream on my [Twitch channel](https://twitch.com/henryneedscoffee) (Tuesday nights at 6!).

Much in the same way that novelists prepare a bit for National Novel Writing Month (NaNoWriMo) by figuring out their characters, sketching out the plot beats of their story, and spending some time thinking about the hell they're going to put themselves through in November... I feel that it's appropriate to prep for this markdown editor a bit.

You wouldn't jump into a half marathon without doing a few half marathons first, right? Well, I might have in 2018, but that's a story for a different time.

---

Let's get right into it: this is a BIG project to take on in just a month. For a refresher, here are the big bullet points I want to hit by the end of Halloween:

1. Being cross-platform (Linux/Mac/Windows and eventually Android/iOS)
2. Ability to cloud sync data between those platforms
3. Having one editor pane where markdown syntax is rendered on the spot (like Bear and Typora)

> You idiot, you didn't even put "build a markdown editor" on your list.

Hey, thanks! That's the first thing I wanted to talk about.

Much like writing a book, or running a marathon, building this app is going to be a slog - even if I'm just aiming for an MVP that I can keep iterating on. I'll be proud as hell if I can get through those main three items without getting too far into the other 20+ feature ideas I want to bake into this thing.

But the truth is that the actual markdown editor part of it is pretty easy. Part of my prep work for this was Googling around for some "electron markdown editor tutorial" tutorials. I wanted to get my feet wet both with how Electron apps are put together and with what a markdown editor might look like in JavaScript.

After trying a few, I found that one written by Tzahi Vidas was the simplest that both showed me how to build a simple Electron app and how to parse markdown with JavaScript. I highly recommend y'all give it a shot if you're at all interested in what I'm working on. It's a solid primer.

* [Tzahi Vidas - Here's how I created a markdown app with Electron and React](https://www.freecodecamp.org/news/heres-how-i-created-a-markdown-app-with-electron-and-react-1e902f8601ca/)

I did, however, find that I had to use a different command to run Electron apps on my MacBook Pro than the one provided in the above tutorial, though. In package.json, I had to change the run script from something like `electron .` to `electron-builder build --mac -c.extraMetadata.main=build/main.js --publish never` to get the app to actually launch. Odd, and took me a bit to figure out ([source on the fix](https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649) - thanks John Dyer!), but it was a solvable problem.

In a bit of backward thinking, I then went on to checking out the Electron docs to see if they had any getting started docs. Turns out they have all kinds of cool nuggets in there, but some of them are a bit buried in an interesting hierarchy of links and pages. Within there, I found two really helpful things:

1. The Electron "Simple Samples" GitHub repo has a few sample projects already built out that interact with your computer's resource monitor, your app tray, and some other bits of their API. You can just run `npm install` and `npm start` to pull one of the projects up on your local machine and dig around in the code to see how it all fits together. They even give you a set of challenges per sample project to try and add functionality.

    a. [Electron Simple Samples Repo](https://github.com/electron/simple-samples)

2. The second helpful thing I found probably would have been better off if it were the first, even before Tzahi's tutorial - the "Electron API Demos" repo. When you `npm install && npm start` this bad boy will pull up a window telling you all about the different parts of the Electron API you can use to interact with a user's desktop, has buttons to show on your desktop what each one does, and has code snippets to show you how to use them.

    a. [Electron API Demos Repo](https://github.com/electron/electron-api-demos)

Between those, and digging through the Electron docs a little more, I got most of what I needed to get ready for this challenge. I have a cursory understanding of how Electron apps work, how to parse markdown with JavaScript, and feel mostly ready for October. At least as prepared for it as writers are for NaNoWriMo or runners are for a marathon. I know the basics of what I'm taking on, but the event itself is going to bring plenty of its own challenges.

There are still a handful of things to figure out as I get started in October.

Like, am I going to use an existing markdown library, or am I going to make my own parser with slightly altered markdown syntax rules?

How do I handle the cloud syncing: through something like PouchDB or by treating the whole thing as a progressive web app and use service workers to keep local offline changes synced with a SQL database somewhere?

On that last point, a buddy gave me some words of wisdom today:

> "I would start with the simplest possible solution, probably some form of long-polling, evaluate the UX once the app was a further bit along, and reassess then." - Ben J, a SWE and former tech co-founder

And I mean, smart. Knowing myself, it would be all too easy for me to forget that I'm just aiming for an MVP within like three days. I'll always have time to add features later.

Past that, there are all kinds of things I'll have to figure out as problems pop up all through November, but I'm glad I did the prep work I did to get myself ready to tackle this whole thing with a little prior knowledge.

Tomorrow is day -1. My last "day off" before the development work starts. And I also have a new conference talk (titled The Tech Debt of Monopoly House Rules - it's gonna be a fun time) due in a few weeks for [All Things Open](https://2020.allthingsopen.org/). It's going to be a busy month for sure, but I'm excited to get some work done. I'm going to cook something fun tomorrow, relax a bit, and get back to y'all with an update on October 1st.

Until then, stay frosty.

[https://henryneeds.coffee](https://henryneeds.coffee)
[Blog](https://henryneeds.coffee/blog)
[LinkedIn](https://linkedin.com/in/henryquinniv)
[Twitter](https://twitter.com/quinncuatro)
