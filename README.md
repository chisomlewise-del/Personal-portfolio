# Chisom Lewise — Portfolio

A fast static website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), based on the Figma homepage design.

## Preview it on your computer

You need **Node.js** installed (you already have it). Open a terminal in this folder and run:

```bash
npm install
```

(Only needed the first time, or after someone adds a new package.)

```bash
npm run dev
```

Then open **http://localhost:4321** in your browser. Leave the terminal running: every time you save a file, the page updates by itself. Press `Ctrl + C` in the terminal to stop it.

### See the final, optimised version

```bash
npm run build
```

```bash
npm run preview
```

`build` creates the finished website in the `dist/` folder (images get compressed here). `preview` serves that folder at http://localhost:4321 so you can check it before publishing.

## Where things live

| What you want to change | File |
| --- | --- |
| Colours and fonts (design tokens) | `src/styles/global.css` |
| Top bar / menu links | `src/components/Nav.astro` |
| "Hi, I'm Chisom" intro | `src/components/Hero.astro` |
| Project cards (titles, text, links, images) | `src/components/Work.astro` (the `projects` list at the top) |
| Creative tools row | `src/components/Tools.astro` |
| How I work steps + FAQ | `src/components/HowIWork.astro` |
| Footer + social links | `src/components/Footer.astro` |
| Photos and project images | `src/assets/` (auto-compressed) |
| Icons (SVG) | `public/images/` |

Search the project for `TODO` to find the placeholder links and text you still need to fill in.

## Publishing

The `dist/` folder is a plain static site. You can drag it onto [Netlify Drop](https://app.netlify.com/drop), or connect this project to Netlify, Vercel or Cloudflare Pages (build command `npm run build`, output folder `dist`).
