# Portfolio Website

A modern, full-featured portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcase your projects, blog posts, and professional experience with a clean, responsive design.

## Features

- **Blog System**: Write and publish markdown-based blog posts with dynamic routing
- **Product Showcase**: Display your projects or products with dedicated pages
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Type-Safe**: Built with TypeScript for robust code
- **Fast Performance**: Optimized with Next.js for production-ready performance
- **Dynamic Routes**: Automatic page generation from markdown content

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Content**: Markdown-based blog posts and products

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   │   ├── [id]/       # Individual blog post
│   │   └── [slug]/     # Blog slugs
│   ├── contact/        # Contact page
│   └── products/       # Products pages
│       └── [id]/       # Individual product page
├── components/         # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
└── lib/                # Utility functions
    ├── posts.ts       # Blog post utilities
    └── products.ts    # Product utilities
posts/                  # Markdown blog content
products/              # Markdown product content
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd drifta01.github.io
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build

Build for production:

```bash
pnpm run build
```

Start the production server:

```bash
pnpm run start
```

### Linting

Run ESLint:

```bash
pnpm run lint
```

## Creating Content

### Blog Posts

1. Create a markdown file in the `posts/` directory (e.g., `posts/my-post.md`)
2. Add front matter with metadata:

```markdown
---
title: "Post Title"
date: "2024-01-15"
---

Your content here...
```

### Products

1. Create a markdown file in the `products/` directory
2. Follow the same format as blog posts with relevant metadata

## Configuration

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## Deployment

This site is ready to deploy to:

- **Vercel** (recommended for Next.js)
- **GitHub Pages** (with build configuration)
- **Netlify**
- Any Node.js hosting provider

## License

This project is open source and available under the [MIT License](LICENSE).
