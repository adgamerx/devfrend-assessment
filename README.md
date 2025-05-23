# Fama Barber Shop & Beauty Salon Website

A modern, responsive website for Fama Barber Shop and Beauty Salon built with React, TypeScript, Vite, and Shadcn UI components.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Table of Contents

- [Fama Barber Shop \& Beauty Salon Website](#fama-barber-shop--beauty-salon-website)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
    - [Building for Production](#building-for-production)
  - [📁 Project Structure](#-project-structure)
  - [🧩 UI Components](#-ui-components)
  - [🎨 Customization](#-customization)
    - [Theme](#theme)
    - [Content](#content)
  - [📦 Deployment](#-deployment)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

## 🔍 Overview

This project is a modern, responsive website for Fama Barber Shop and Beauty Salon. It showcases the salon's services, team, gallery, testimonials, and contact information. The website is built with a focus on performance, accessibility, and user experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Modern UI**: Clean and professional interface with beautiful typography
- **Interactive Components**: Smooth transitions and animations
- **Performance Optimized**: Fast loading and rendering
- **SEO Friendly**: Proper semantic HTML structure
- **Accessibility**: WCAG compliant components from Shadcn UI
- **Sections Include**:
  - Header with navigation
  - Hero section with call-to-action
  - Services showcase
  - About the salon
  - Photo gallery
  - Customer testimonials
  - Contact information and form
  - Footer with business information

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) for validation
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adgamerx/devfrend-assessment.git
   cd devfrend-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The development server runs at [http://localhost:8080](http://localhost:8080) by default.

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/           # UI Components
│   ├── ui/               # Shadcn UI Components
│   ├── Header.tsx        # Site header and navigation
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── About.tsx         # About section
│   ├── Gallery.tsx       # Gallery section
│   ├── Testimonials.tsx  # Testimonials section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Site footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/                # Page components
│   ├── Index.tsx         # Homepage
│   └── NotFound.tsx      # 404 page
├── App.tsx               # Main App component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🧩 UI Components

This project uses [Shadcn UI](https://ui.shadcn.com/) components, which are built on top of [Radix UI](https://www.radix-ui.com/). These components are accessible, customizable, and follow best practices for web development.

## 🎨 Customization

### Theme

The theme colors and styles can be customized in the following files:

- `tailwind.config.ts`: Tailwind CSS configuration
- `src/index.css`: Global CSS variables and styles

### Content

To update the website content, modify the respective component files in the `src/components` directory.

## 📦 Deployment

This project can be deployed to any static hosting service, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.