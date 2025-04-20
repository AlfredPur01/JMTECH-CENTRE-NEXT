# JM Tech Centre Website Conversion

This repository contains the conversion of JM Tech Centre website from a traditional HTML/CSS/Bootstrap/JavaScript stack to a modern Next.js project with TypeScript and Tailwind CSS.

## Overview

The conversion maintains all the original design elements, animations, and functionality while providing the benefits of a modern tech stack. This project serves as a complete replacement for the original website with improved developer experience and performance.

## Key Features

- **Next.js App Router Structure**: Organized with the latest Next.js App Router architecture for optimal performance and SEO.
- **TypeScript Integration**: Added type safety throughout the codebase to prevent runtime errors and improve developer experience.
- **Tailwind CSS Styling**: Converted all Bootstrap and custom CSS to Tailwind, maintaining the exact same visual appearance.
- **Responsive Design**: Preserved the mobile-first approach with responsive layouts for all screen sizes.
- **Component-Based Architecture**: Split the monolithic HTML into reusable React components for better maintainability.
- **Interactive Elements**: Preserved all interactive elements:
  - Flip cards in the Services section
  - Testimonial carousel with modal view
  - Gallery with animations
  - Partner logo carousel
  - Form validations
- **Custom Animations**: Maintained all custom animations using Tailwind's animation utilities and custom CSS.
- **Font Integration**: Integrated the Khula font family for consistent typography.

## Project Structure

- **Pages**: Home, International Exams, and Onboarding pages
- **Components**: Modular components for each section of the website
- **Styling**: Tailwind CSS with custom configurations
- **Assets**: All images and fonts properly organized

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jmtech-centre.git
cd jmtech-centre
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The project is set up for easy deployment on Vercel or any other Next.js-compatible hosting service.

```bash
pnpm build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Original JM Tech Centre website design and content
- The Next.js, TypeScript, and Tailwind CSS communities for their excellent documentation and support