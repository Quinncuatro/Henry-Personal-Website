# Signal Boost Instructions

---

Hey there! If you're looking for a new gig I'd love to help out by putting some information about you on my signal boosts page.

Just clone this repository, add your information to [this page](https://github.com/Quinncuatro/Henry-Personal-Website/blob/master/src/signalboost/signalboost.yaml), and put in a pull request.

```markdown
people:
  - name: "John Doe"
    tech: "bash docker devops gatsby javascript kubernetes linux sql web"
    blog: "https://johnswebsite.com/blog"
    devto: "https://dev.to/johndoe"
    dribbble: "https://dribbble.com/johndoe"
    github: "https://github.com/johndoe"
    gitlab: "https://gitlab.com/johndoe"
    linkedin: "https://linkedin.com/in/johndoe"
    twitter: "https://twitter.com/johndoe"
    website: "https://johnswebsite.com/"
```

Add your info as a new object under `people`. Here's an example:

```markdown
people:
  - name: "John Doe"
    tech: "bash docker devops gatsby javascript kubernetes linux sql web"
    blog: "https://johnswebsite.com/blog"
    devto: "https://dev.to/johndoe"
    dribbble: "https://dribbble.com/johndoe"
    github: "https://github.com/johndoe"
    gitlab: "https://gitlab.com/johndoe"
    linkedin: "https://linkedin.com/in/johndoe"
    twitter: "https://twitter.com/johndoe"
    website: "https://johnswebsite.com/"
  - name: "Jane Doe"
    tech: "angular javascript openshift python golang pandas postgresql"
    blog: "https://janeswebsite.com/blog"
    devto: "https://dev.to/janedoe"
    dribbble: "https://dribbble.com/janedoe"
    github: "https://github.com/janedoe"
    gitlab: "https://gitlab.com/janedoe"
    linkedin: "https://linkedin.com/in/janedoe"
    twitter: "https://twitter.com/janedoe"
    website: "https://janeswebsite.com"
```

It's worth noting that no employer should expect you to have all these different accounts set up. Just add in the ones that you want to have shown (out of the eight listed that are currently supported) and the others won't show up when your information renders.

You might see a `hidden: "true"` attribute for John Doe in the `signalboost.yaml` file. That's just to exclude the example from the final rendered Signal Boost page, and you can leave that out of your YAML block.

Once I get the notification of your PR, check your formatting, and roll your change into my main branch a Netlify build should kick off and deploy the updated version.

Please feel free to [hit me up](https://henryneeds.coffee/contact) if there's anything else I might be able to do to help you land a new job!

And please remember to take yourself off this page when you find the next thing. I look forward to reviewing a celebratory PR with you!
