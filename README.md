# Portfolio

A retro-styled arcade portfolio website built with React and TypeScript, featuring a Commodore 64/arcade aesthetic with modern web technologies.

## Overview

This portfolio showcases a unique design inspired by classic arcade machines and retro computing, combining nostalgic visual elements with contemporary web development practices. The site features interactive sections, custom animations, and a terminal-like interface that creates an immersive retro gaming experience.

## Technologies Used

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Node.js** - Runtime environment

### Features
- **Responsive Design** - Mobile and desktop optimized
- **Custom Animations** - CSS transitions and keyframe animations
- **Intersection Observer** - Scroll-based section visibility
- **Component Architecture** - Modular and reusable UI components
- **Custom Scrollbar** - Pixelated arcade-style scrolling
- **Modal System** - Contact and skill detail modals

## Project Structure

```
src/
├── components/          # Main page components
│   ├── AboutSection.tsx
│   ├── ContactModal.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillModal.tsx
│   └── SkillsSection.tsx
├── ui/                  # Reusable UI components
│   ├── ActionButton.tsx
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── SectionTitle.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── pages/               # Main page container
├── types/               # TypeScript type definitions
└── utils/               # Helper functions and constants
```

## Installation

```bash
# Clone the repository
git clone https://github.com/iv4n89/90_arcade_porfolio.git

# Navigate to project directory
cd 90_arcade_porfolio

# Install dependencies
yarn install

# Start development server
yarn dev
```

## Build

```bash
# Create production build
yarn build

# Preview production build
yarn preview
```

## Development

The project uses modern development practices including:

- TypeScript for type safety
- Component-based architecture
- Responsive design patterns
- Custom CSS animations
- Optimized build process with Vite

## Browser Support

- Modern browsers supporting ES2020
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)



