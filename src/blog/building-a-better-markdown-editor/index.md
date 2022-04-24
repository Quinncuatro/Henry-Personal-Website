---
title: Building a Better Markdown Editor
category: "Electron"
date: "2020-09-27"
type: "blog"
desc: "For Hacktoberfest 2020, I want to take on a larger challenge - building a better markdown editor."
---

What's up, y'all? Long time, no... blog?

[Hacktoberbest](https://hacktoberfest.digitalocean.com/) is almost upon us and this year I want to take things a little farther than just submitting a few pull requests. The event is meant to help people get more into open source development, and in that vein I wnat to treat October the same way authors treat National Novel Writing Month (NaNoWriMo).

I want to start and finish a useful project within those 31 days.

---

I owe a lot of my career to folks putting their open source projects, packages, and products on the internet for everyone to use and I want to pay part of that back to the community I've gained so much from.

In the past, I had a lot of success on DEV.to when writing my series on [Learning DevOps In Public](https://dev.to/quinncuatro/learning-devops-in-public-c26) (which itself was inspired by [Shawn Wang's post](https://www.swyx.io/writing/learn-in-public/)). Making sure I was able to write clearly about what I was learning and applying turned out to be an incrdible way to learn, and it turns out that people vibe with that content! That series had a cumulative 13,500 views!

After having a good cadence in getting posts up for a while, I got caught up in the busy season at work and then the world kind of... blew up. Kind of fell off the grid for a long time and missed out on a lot of moments of good community building and interaction.

Honestly, for a while I was doing my best just to keep my head above water. There were projects I wanted to hack on but between work, cooking, and trying to find new ways to spend time with my friends... I didn't have the energy. I've been wanting to get back into tech writing and project work but needed the right idea to come along and the right motivation to get back to it. 

Finally found the next thing I'll learn in public, and just in time for Hacktoberfest: 

> Building a better markdown editor.

I know I'm one of thousands (likely more) developers to take a whack at making the "perfect markdown editor", but hear me out.

My buddy, [Alex Trost](atrost.com) (curator of the [Frontend Horse](https://www.swyx.io/writing/learn-in-public/) newsletter - which you should all check out), and I have been trying out different markdown editors over the last year or so and while the 85% of their features have a solid overlap, it's often the other 15% that we love about each individual editor.

- [Bear](https://bear.app/) (what I currently use on my work MBP) has a fantastic layout and organizational system, but doesn't support anything other than macOS and iOS.
- [Typora](https://typora.io/) (what this post was written with) has solid cross platform support, but doesn't have any native cloud syncing functionality.
- Other editors have WYSIWYG bars (not really markdown), some are web based (not ideal for me), and still others cost money when they feel feature incomplete or have stale codebases.

After doing a survey of a ton of different options, I landed on my dream editor having three main features:

1. Being cross platform (Linux/Mac/Windows and eventually Android/iOS)
2. Ability to cloud sync data between those platforms
3. Having one editor pane where markdown syntax is rendered on the spot (like Bear and Typora)

It seems odd to me that I didn't come across a mainstream markdown editor that covers all three of those points. Maybe I'm getting in over my head with this project, but I feel like this is a solvable proble, you know?

I've been wanting to dig into Electron for years now, and I'm sure plenty of other web application developers feel a similar trepidation of making the move over to desktop applications (even if it is the same technology in the background). There are a number of tools I've built with JavaScript for my job, and being able to wrap a GUI around them quickly would make it easier for me to share them with folks who feel less at home on a command line.

After running through a couple of Electron tutorials (which I'll write about early on in October), I found that it's a pretty simple technology to use if you already have some familiarity with Node projects. I hope that by writing about my development process I'll be able to help some of y'all make the jump from web to the desktop.

A good markdown editor obviously means more than those previous three bullet points to help boost productivity, though. I whittled my wishlist down to a "top 20" list of other features (in order of importance to me):

1. Local storage in something like SQLite
2. Left side bar for list of notes (title, first couple lines preview)
3. Auto save
4. Add todo's/task list with Bear's `-`  syntax
5. Code blocks (MarkText uses GFM code fence, syntax highlighting - PrismJS?, line numbers)
6. Syntax support for popular programming languages
7. Word count (word/characters/paragraph/read time)
8. In-line styles (like strong, strikethrough, underline, comment, etc)
9. Table of contents generated by headers
10. Show creation/edit date and last editing device
11. Full in-line image support
12. Table blocks (MarkText uses GFM table block)
13. Shortcut keys for styles
14. Focus mode - new note in Bear
15. Light/dark modes
16. Project bundle support similar to FastAuthor (https://github.com/ExamProCo/fast-author#The-Anatomy-of-a-Project)
17. Export as different file types (HTML/PDF/MD)
18. Organize notes with hashtags?
19. Ability to cross-link and reference other notes
20. Encrypt individual notes and lock the app

It's an aggressive project to tackle in just a month, but I don't see myself getting too deep into my backlog of wishlist items. Figured that having a bigger project to tackle during the month of October would help keep me motivated and make it feel like I actually earn my t-shirt and sticker pack this year - and leave me plenty to do while I try to flesh this app out through the end of the year.

Plus, there's the added benefit of me being able to use a tool I've been wanting for a while and getting full creative control over it!

I plan on working throughout the month to get at least an MVP put together and want to get a post up every few days on what I've been doing. I learned in the last round of learning in public that posting daily was too lofty a goal. But I'm hoping to use this opportunity to really dig into using Electron to build desktop apps, get back into writing, and hopefully become a better developer while taking y'all on this journey with me!

Here's to tackling something big in 2020, and I'll see y'all on October 1st!

Until then, stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee)
- [Blog](https://henryneeds.coffee/blog)
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)