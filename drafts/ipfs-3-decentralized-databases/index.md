---
title: IPFS - Decentralized Databases
category: "Decentralized Web"
date: "2021-02-04"
type: "blog"
desc: "Tech I wished for as a kid is finally here and the ramifications are huge."
---

## It's the spring of 2011. I've already been accepted to college. Senioritis is setting in and 3OH!3 is blaring on my headphones as I sit at my desk at 2 AM on a school night...

Homework long since done, I'm staring at the screen of the heavily used 17" Gateway laptop I managed to get off my boss at The Computer Shack in place of actual payment.

I'm trying to test a tool on a Windows XP partition so that I could confidently install it on my high school's network.

I had already hidden a handful of games on a shared drive meant for our teachers' math and science tools.

My friends and I had plenty there to keep us occupied at the end of long lab periods, but we wanted to be able to chat with each other while we fragged each other in Blood Gulch.

And of course, phones weren't allowed.

This tool would let us piggyback on (the since sunsetted) `net send` command to effectively let us private message each other over the local network.

Being the "nerd" of the group, it was my responsibility to get this set up. The IT guys may not have loved what I was getting up to, but we had an _understanding_. I could bend the rules a bit as long as I let them know what parts of their security they needed to shore up.

**But this tool, though**.

Someone wrote an entire chat application written on top of a network command, put it online **for free**, and I had the ability (and unintended privileges) to do something rad with it and make the tail end of high school more exciting.

---

I remember explicitly taking a moment to sit back to think about how god damned cool that was.

---

Now, about 10 years later, I'm living that moment all over again.

Work was done at 5:00 today. My girlfriend, tired from nursing school, is in bed. Dishes are... well, sitting in the sink dirty.

I'm sitting at my computer: late at night, working on a project, and thinking about how lucky I am to be alive and a few years into my development career _right now_.

Last week, I stumbled onto a [Verge article](https://www.theverge.com/2021/1/19/22238334/brave-browser-ipfs-peer-to-peer-decentralized-transfer-protocol-http-nodes) about a new (well, 5 years old) technology that's just starting to pick up steam, called [InterPlanetary File System](https://ipfs.io/) (IPFS).

Folks who came to this post from a Tweet or something probably know what I'm talking about. But for those who don't:

Wikipedia defines IPFS as

> ...a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.
>
> IPFS allows users to not only receive but host content, in a similar manner to BitTorrent. As opposed to a centrally located server, IPFS is built around a decentralized system of user-operators who hold a portion of the overall data, creating a resilient system of file storage and sharing. Any user in the network can serve a file by its content address, and other peers in the network can find and request that content from any node who has it using a distributed hash table (DHT).

**Long story short, the future of the internet is here.**

A group of people worked for years to actually make the decentralized internet that Pied Piper was trying to make on the later seasons of [Silicon Valley](https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)).

They built an entirely new protocol for accessing the web. It's meant to work alongside (not replace) HTTPS and operates similarly to BitTorrent in that data (for websites, videos, games, apps, anything) is shared amongst peers and not fetched from central servers owned by Amazon or some other Evil Corp&trade;.

The ramifications here are HUGE.

---

### 1. Have you ever had a resource on the web disappear on you?

That's a dumb question because so have I.

There's this mashup called "Ketchup V1" from an artist named The Deaf DJ that I'd love to be able to find again.

I'm sure you all have your own white whales.

Content that we care about on Web 2.0 (the HTTPS based one we're on now) only sticks around if the people creating and hosting that content want to keep it available.

If some publisher or individual decides they want to take a site down or stop paying for a monthly web server bill, then whatever information they were hosting effectively disappears.

The internet is supposed to be the culmination of all human knowledge, but small and easy to host files (like sheet music or a set of woodworking instructions) could disappear because someone needs to reign in their budget.

IPFS allows anyone to go "Hey, that blog post on how to code this feature was really helpful to me, I'd like to re-host it so that other people will always be able to find it later."

The Brave browser, mentioned in that Verge article, implemented IPFS features that let me do that with two mouse clicks.

That's a beautiful thing.

### 2. Speaking of resources disappearing, did you know that for a few years Turkey blocked their citizens from accessing Wikipedia?

Again, the culmination of all human knowledge, but sequestered from citizens.

Kind of fucked up, right? Especially when you know the importance of tools like social media sites during times like the Arab Spring. Being able to block entire portions of the web, like China's Great Firewall, is a dangerous precedent.

Turkey was able to block Wikipedia because web addresses are currently based on file locations.

You tell your browser to go all the way to the group of servers that the Wikimedia Foundation set up to host Wikipedia and then, once there, pull up the page on water filtration.

Since Turkey could see where those web requests were pointing (the addresses assigned to Wikipedia servers), they were able to stop them from completing.

Since everything on IPFS is content-addressed (via a hash), whenever you request a page, your browser pulls it from whoever happens to be closest to you and is also hosting that file.

With this new model of web browsing, we're not dependent on corporations renting servers from even bigger corporations to keep the information we care about, and they currently control, on the internet.

Instead of relying on publishers like the New York Times keeping articles hosted on their servers, or platforms like Stack Exchange seeing the value in keeping answers to years old questions online, we can just click a button to rehost web content so that it's always accessible on a massive P2P network.

No more going all the way to specific servers that governments, ISPs, or rogue actors may be able to cut off access to in the future.

This gives the people the ability to decide what's worth keeping around in perpetuity. Theoretically, the good stuff will be pinned by enough users that it'll be around forever, while the bad stuff will fall to the wayside.

### 3. It harkens back to the markedly non-corporate early internet so many of us fell in love with.

I, for one, am tired of [the internet being mostly a collection of the same seven sites over and over again](https://www.reddit.com/r/NoStupidQuestions/comments/l2r5da/does_anybody_else_hate_how_the_internet_now_feels/).

So many of our favorite old websites and interesting things we bookmarked just don't exist anymore.

All of that effort and content and knowledge is just lost forever, only to be replaced by "community of communities" sites like Facebook and Reddit.

I miss the days where we'd go to AddictingGames to play some games, check out some tech news on whichever blog we liked, get involved in separate niche community forums, and generally exist without having to move all our data through massive corporations.

This move to a decentralized web has been encouraging early builders to make fun little web pages, more niche community apps, and just experimenting with the new format.

It's like the wild west on the web again, and while a lot of the tooling and architecture still needs to be figured out, the possibilities are endless.

The new web is weird and that's a good thing.

---

That brings me back to my earlier point:

> I'm sitting at my computer: late at night, working on a project, and thinking about how lucky I am to be alive and a few years into my development career _right now_.

This kind of decentralized web that lives on all of our devices and frees us from our dependencies on corporations is something me and my computer lab buddies have wanted to exist for a long time.

Over the years since college, I've headed up tech communities, led nationwide teams of developers, and traveled around the country giving and listening to talks.

All that and I've honestly never been more excited about a new `$web_thing` crossing my desk.

IPFS is the real deal. From nerd dreams of old to HBO jokes to your ears (well, eyes).

It's finally here, it's being given away **for free**, and I understand enough modern web development to help build it.

That's something 18-year-old me would be absolutely hype about. I just hope I can make him proud.

---

talking about orbitdb

I'm working on a project built on IPFS with a buddy of mine from GitLab.

Without giving too much away: it's built with [GatsbyJS](https://www.gatsbyjs.com/), hosted on IPFS with [Fleek](https://fleek.co/), and should help folks adapt to the early days of this new web protocol.

I should another blog post with some more information to share soon.

Stay frosty.

- [https://henryneeds.coffee](https://henryneeds.coffee) ([IPFS Version](ipfs://bafybeid36rtd2rpjzhz7ll4foruef3vj3n3pbrev53wcwj6pj6q3u4ie7q/))
- [Blog](https://henryneeds.coffee/blog) ([IPFS Version](https://ipfs.fleek.co/ipfs/bafybeid36rtd2rpjzhz7ll4foruef3vj3n3pbrev53wcwj6pj6q3u4ie7q/blog))
- [LinkedIn](https://linkedin.com/in/henryquinniv)
- [Twitter](https://twitter.com/quinncuatro)
