---
title: 'The persuit of perfection'
description: When to stop optimising your code
image: '../public/blogs/emile-perron-xrVDYZRGdw4-unsplash.jpg'
publishedAt: '2024-29-03'
updatedAt: '2024-29-03'
isPublished: false
tags:
  - productivity
  - tech
  - career
---

Last week during code reviews I found an interesting trait among the developers
who recently joined my team as a result of internal reshuffling after the review
period, they were all following similar coding styles as they were told in the
previous team:

> Export every React component with memo() and import them with lazy() Don't
> hardcode any value (magic numbers!) while writing CSS Store all the page text
> content as an object and refer it in your React component

The point of this article is not to discuss on these (absurd!) guidelines, but
to understand whether we shall have any guidelines on coding style or the call
it _"best practices"_ at all. First, I tried to understand if they know what
they are doing, or just doing them because they are told so. And (not!)
surprisingly, they had loose understanding of why they were doing, especially
the _memo_ one! But it is a common myth across many React devs, that
transforming every component into `PureComponents` or using `memo` somehow
improves the performance of our React app by reducing unwanted re-renders.

[Kent C Dodds](https://x.com/kent-link-add-here) has a great
[article](insert-the-article-link) on why (and how) we should prioritise fixing
slow renders than rerenders, please read that first and comeback if you feel
disconnected with what I am about to say now.

Right, performance optimisation futile unless your app shows symptoms of lack of
the same. Just like you don't visit a doctor until you get symptoms of illness,
prematurely optimising for performance when you are creating a component is
absolutely unnecessary in every case. More importantly, any absolute takes that
you should _always_ write your code a certain way is always a bad idea, after
your lint rules generalise the same. However, you should regualrly monitor for
performance hiccups just like you need your annual full health checkups.

That being said, there is no perfect code! If you see your code after a few
months and don't proclaim how bad it is, you're in a bubble. Especially when
you're working on a tech stack that is constantly evovling, you should keep
learning to find better ways, and tools to do things the right way. But, does
that mean we should constaly rewrite our app to make it _perfect_, in all
honesty if your job (and life!) allows you to do so, I am very jealous of you.
The sweet spot is always a balance your ego boost and you end-user delight. The
end-user in this case is not only teh consumer of your app, but your teammates
who are co-authoring the app with you, you must take care of their development
experience while making a decession to shape your component the way you want.

To summerize,

1. If you wish to enforce a guideline, better setup your linters to take care of
   it. Beyond that it's mostly futile, trust your fellow developers to code
   their way.

2. You can never attain perfection, tech debts always gets accumulated (often
   deprioritised over features) as your learn and grow but identify the
   bottlenecks and improve it.

3. Never permaturely optimise for performance! Measure, identify, and act.
