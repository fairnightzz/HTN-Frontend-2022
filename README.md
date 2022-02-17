# Zhehai's HTN Frontend 2022 Challenge

Project is up at https://htn.zhehaizhang.com

# Writeup
1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?



## Stack/Technologies, and Structure

I decided to use `Next.js` because it provides the most versatility. I am 
able to set up my frontend as a progressive web app and easily set up `TypeScript` support without having to waste time. There is also a ton of internal optimizations such as Image optimization, the option to use SSR, and support for developers such as fast refresh, and analytics.

Of course, someone can always implement lazy loading (as I did in one of my projects), 
but it's never necessary to always reinvent the wheel if there is an easier or supported solution already.

I decided against using a UI library because UI libraries are slightly challenging when you want to modify them to your liking if the organization design is different. Although it could've been done, instead, I'm using `Tailwind CSS`, which is a utility CSS framework. Moreover, since Tailwind is much more low level compared to UI libraries, it allows for a wider compatibility when it comes to browsers, and more customization on my part. 

`Eslint with airbnb` is used for good coding style, and `Apollo`is used for GraphQL queries.

I'm using `SweetAlert2` for brief good looking dialog boxes for the login.

I'm using the `classNames` package so that classes are easily concatenated together. This allowed me to make Icons
and customize them to my liking (e.g resize, change stroke colour)

### CI/CD

A very basic `Github Actions script` is set up to auto deploy whenever there is a commit. I could've set it up on Vercel or Heroku, but for more fine tuned control, I set it up with `PM2` and proxied it over through `Nginx` and `Cloudflare` on my VPS.

### PWA and Meta, and Mobile Friendly

I was able to make the application into a progressive web app, and also add in the meta for the PWA, such as description, Twitter images (the huge ones that appear when you paste the link into discord). Since it's a progressive web app, I obviously
need to make sure that it looks great on mobile, in which I used CSS breakpoints to do so.

### Font choice

I felt that it was necessary to include this header because this relates to the issue involving compatibility. Some fonts are not supported on different OS'es, and the same goes for browsers.
Hence, if the default HTN font I'm using fails, I can fallback on the fonts that Windows (Segoe UI), Mac (apple-system), and Linux (Roboto) can support so it doesn't go to the default Times New Roman.

## Challenging/Annoying Aspects

Given that Next.js is SSR, you cannot directly access local storage or modify the body (for toggling light/dark mode). To fix this, I check to make sure the dom is loaded in (client side) in `useEffect` so that I can access `localStorage` to store my persistence and other settings. Unfortunately I was strapped for time, I would've implemented persistence in a much better fashion either using `cookie` storage or using Redux with data persistence so that the app is more scalable.

I ran into some problems setting up PWA because `manfiest.json` and the meta tags in `_app.tsx` are very demanding. However, I was able to easily fix the problem by making all the necessary icons on a PWA icon generator.

## Proud Parts of Code

1. Filters, sort, and search are all usable together

You can toggle many things and the results are returned perfectly. It was interesting to code out too because I had to work my way through `filter` and `sort` functions (definitely going to use `Lodash` next time!)

2. Filters, sort and dark mode are persistent

You can refresh the page, leave and come back, and everything will be back as to how it was before. I implemented it all very efficiently so that storing the filters and sort were partial types.

3. Mobile friendly

Scaling down the web app to mobile still provides a good viewing experience. I was able to use TailwindCSS breakpoints to modify the layout of the event cards, for example removing certain elements of a card if the screen is too small, or making the elements appear in a flex column versus a row in a wider screen size.

4. Visually appealing (hopefully)

Dark mode looks nice :). The design is consistent as well. In addition, I made the event card shadows pop out if you hover on them, and the same goes for the HTN icon on the top. It wasn't 
too hard to implement at all, but it definitely made the web app feel more responsive to the user.

## Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

I would most certainly abstract the sorting code to it's own file in `utils` and use Lodash instead of implementing sorts on a list of objects myself. As mentioned before, I would also use a more powerful state management system like Redux and use it for persistence instead of localStorage. I would also add an analytics package to track performance metrics, and given Next.js, it's very easy to do so. I would also plan to abstract a majority of the inline CSS I added to certain divs, since I am using a lot of repetitive `flex-col` or `flex-row` in certain cases.
Lastly, I would probably display the related events in a better manner since you can't tell from much what the numbers are.

## Thoughts to point out
All the features requested in the Notion were implemented, such as displaying events, sorting events (3 different sorts), restricting events by authentication, linking and viewing related events, search, filter, persistence, and PWA.

# Considerations
1. Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?

Yes, I organized a lot of the modular code into their respective folders. For example, repetitive components obviously belong in the components folder and page components being in the pages folder. If a developer wanted to look at the typography I'm using, I have them all in the `styles.globals.css` folder, to prevent disjointed design. My `lib` folder contains the GraphQL queries and all the logic is in there, while `hooks` is for the dark mode, `assets` for the font files I'm using, and `types` for TypeScript type definitions. Lastly, `utils` is meant to be for miscellaneous functions such as date parsing or sorting (didn't have enough time to abstract this portion).


2. Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more events or event types, would it be possible to do so easily?

Of course, since I'm looping through all the events I get in `staticProps`, it wouldn't be a concern if new events were added. The same would apply for event types, since all that's needed is for the type definition to change, and modify the array containing the display value for that event type.

3. Are you following best practices to make sure the project is maintainable if development were to continue on it?

Yes, I'm using Eslint, and I'm not dumping all of my code in `index.tsx`, they are abstracted out, so that if we were to add new pages, those functions can still be used.

4. Is your application accessible and responsive (usable on multiple device types and/or for individuals with impairments)?

Yes, it's mobile friendly, and scales well on a majority of devices.

5. Is the styling and appearance of your application consistent and appealing?

I tried my best to go with a clean UI design, and defined all of my font types and classes before I started going in, so all of the design is consistent.

## Final Words

Thank you once again for the challenge! I had an enjoyable time coding out this Frontend Challenge, and I learnt a lot of things!