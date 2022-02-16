# Zhehai's HTN Frontend 2022 Challenge

# Writeup
1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?
2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?
3. Any other thoughts you have (not limited to the previous questions).

## Stack and Technologies Used

I decided to use Next.js because it provides the most versatility. I am 
able to set up my frontend as a progressive web app and easily set up TypeScript support without having to waste time. There is also a ton of internal optimizations such as Image optimization, the option to use SSR, and support for developers such as fast refresh, and analytics.

Of course, someone can always implement lazy loading (as I did in one of my projects), 
but it's never necessary to always reinvent the wheel if there is an easier or supported solution already.

I decided against using a UI library because UI libraries are slightly challenging when you want to modify them to your liking if the organization design is different. Although it could've been done, instead, I'm using Tailwind CSS, which is a utility CSS framework. Moreover, since Tailwind is much more low level compared to UI libraries, it allows for a wider compatibility when it comes to browsers, and more customization on my part. 

Eslint is used for good coding style, and Apollo is used for GraphQL queries.

## CI/CD

A very basic Github Actions script is set up to auto deploy whenever there is a commit.
This is also dockerized.

## PWA and Meta, and Mobile Friendly

I was able to make the application into a progressive web app, and also add in the meta for the PWA, such as description, Twitter images (the huge ones that appear when you paste the link into discord). Since it's a progressive web app, I obviously
need to make sure that it looks great on mobile, in which I used CSS breakpoints to do so.

## Font choice

I felt that it was necessary to include this header because this relates to the issue involving compatibility. Some fonts are not supported on different OS'es, and the same goes for browsers.
Hence, if the default HTN font I'm using fails, I can fallback on the fonts that Windows (Segoe UI), Mac (apple-system), and Linux (Roboto) can support so it doesn't go to the default Times New Roman.

- Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?
- Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more events or event types, would it be possible to do so easily?
- Are you following best practices to make sure the project is maintainable if development were to continue on it?
- Is your application accessible and responsive (usable on multiple device types and/or for individuals with impairments)?
- Is the styling and appearance of your application consistent and appealing?