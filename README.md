# Zhehai's HTN Frontend 2022 Challenge

## Stack and Technologies Used

I decided to use Next.js because it provides the most versatility. I am 
able to set up my frontend as a progressive web app and easily set up TypeScript support without having to waste time. There is also a ton of internal optimizations such as Image optimization, the option to use SSR, and support for developers such as fast refresh, and analytics.

Of course, someone can always implement lazy loading (as I did in one of my projects), 
but it's never necessary to always reinvent the wheel if there is an easier or supported solution already.

I decided against using a UI library because UI libraries are very difficult to modify to your liking if the organization design is different. Instead, I'm using Tailwind CSS, which is a utility CSS framework. Moreover, since Tailwind is much more low level compared to UI libraries, it allows for a wider compatibility when it comes to browsers.

Eslint is used for good coding style, Apollo is used for GraphQL queries, and PWA is also set up.

## CI/CD

A very basic Github Actions script is set up to auto deploy whenever there is a commit.

## Font choice

I felt that it was necessary to include this header because this relates to the issue involving compatibility. Some fonts are not supported on different OS'es, and the same goes for browsers.
Hence, if the default HTN font I'm using fails, I can fallback on the fonts that Windows (Segoe UI), Mac (apple-system), and Linux (Roboto) can support so it doesn't go to the default Times New Roman.

