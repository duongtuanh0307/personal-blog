---
title: "Some thought during this website building process"
subtitle: "The first post of this website will be about itself."
date: "2023-06-03"
id: 1
---

I have just quit my job after 4 years of employment.

My plan is taking several weeks off before starting a new job, which means I have a lot of spare time. So, I decided to spent this long vacation completing my TODO list and one of these tasks is building my own personal website.

### 1. Tech Stack choosing

Actualy, I used to build personal websites with NextJs 10 and Svelte for practicing new libraries and frameworks but I have never published them.

Because my purpose this time is simply creating a place for sharing my thought and the coding, sewing pieces that I made, I chose familiar stack that I tried before:

- [NextJS](https://nextjs.org/docs/getting-started/installation)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Framer motion](https://www.framer.com/motion/component/)

This website will be a no-backend app, all posts will be managing directly in the `src/data` folder.

### 2. Some thought during building process

#### Next 13

The site is building with NextJs version 13.4.2. This is not the first time I worked with NextJs. However, in comparision with the version that I tried (9 and 10); it's seem that there are some break changes. One of those are the change of project structure. This time, I applied the Next 13 new feature [App Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration) instead of Page Router in previous versions.

Next 13 provided buid-in SEO support which made it easier dealing with dynamic title without adding packages.

It's also great that Next 13 provides hybrid rendering method, we now can choose using Client Components for needed parts of page and Server Components for the rest when working with App Router.

One more awesome change that was made in Next 13 is that, `<Link>` component now no longer required manually adding <a> tag as child. The specs `<a> has to be nested inside Link component to make it work` used to made me so confused when started working with Next. :rofl:

In my personal opinion, break changes in version 13 make it's more convenient for developer to building their app using Next.

#### Tailwindcss

As a lazy person, previously, I prefer CSS-in-JS libraries. They provided me more flexibility and the only thing I have to learnt is CSS syntax. The library itself does not take lot learning cost.

When using Tailwind, I have to search in docs for knowing what is proper classes to be added. The other cons of Tailwind is that, everytime I need to customize styles, I have to go to `tailwind.config.js` and add new rules before go back to components and apply new added style.

However, as CSS-in-JS libraries are not supported in Server Components, TailwindCSS seems to be one of the best choices for styling Next apps.

This one-more-try for TailwindCSS change my thought about the framework. TailwindCSS actually help me save a lot of time after getting familiar with the class system and customizing syntax. Tailwin also gives developers the ability of freedomly added their own style rules.

The only point that I do not very happy now is the long class string. It's difficult to read and make it hard debugging.

#### Framer motion

Although Tailwind supports animation, I decided use Framer motion for archiving better animation effects with lower effort.

Easy to use but still powerful, Framer Motion is React animation library that I love the most up to now.

### 3. Closing

I have deployed and published the website but there are still several improments could be added:

- Add Responsive for Tablet and Smart Phone
- Add animation for route transition
- Multiple languages (Add Vietnamese and Japanese)
