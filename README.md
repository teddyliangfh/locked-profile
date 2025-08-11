# Locked Profile - Practical Project

[![Vercel](https://vercel.com/button)](https://locked-profile.vercel.app/)

**Live Demo:** [https://locked-profile.vercel.app/](https://locked-profile.vercel.app/)

## Project Overview

This is a practical project based on the [next-vibe-boilerplate](https://github.com/teddyliangfh/next-vibe-boilerplate) template, demonstrating how to build a fully functional user profile management system using modern Next.js technology stack. The project implements user authentication, data display, paginated browsing, and other core features.

## Tech Stack

### Core Framework
- **Next.js 15.4.1** - Using App Router and latest React 19 features
- **React 19.1.0** - Latest React version with concurrent features
- **TypeScript 5** - Complete type-safe development experience

### UI Component Library
- **Chakra UI 3.22.0** - Modern React component library
- **Framer Motion 12.23.6** - Smooth animation effects
- **React Icons 5.5.0** - Rich icon library

### Data Management
- **Apollo Client 3.13.8** - GraphQL client
- **GraphQL 16.11.0** - Modern data query language

### Development Tools
- **pnpm** - Fast package manager
- **ESLint 9** - Code quality checking
- **Turbopack** - Fast development server

### Deployment
- **Vercel** - One-click deployment and CDN acceleration

## Core Features

### 1. User Authentication System
- **Blocking Modal**: Forces users to enter username and job title on first visit
- **Persistent Storage**: Uses localStorage to save user information, supports page refresh
- **Real-time Updates**: Users can update personal information at any time

### 2. Data Display and Pagination
- **GraphQL Integration**: Fetches character data from Rick and Morty API
- **Smart Pagination**: Supports URL deep linking, direct access to any page
- **Responsive Grid**: Adaptive layout supporting various screen sizes from mobile to desktop

### 3. Interactive Interface
- **Detail Modal**: Click on character cards to view detailed information
- **Theme Switching**: Supports light and dark themes, perfectly adapted for both modes
- **Animation Effects**: Uses Framer Motion for smooth interaction animations

### 4. User Experience Optimization
- **Responsive Design**: Fully responsive layout supporting touch and mouse operations
- **Accessibility**: Complies with WCAG standards, Lighthouse accessibility score 90+
- **Performance Optimization**: Uses Next.js image optimization and code splitting

### 5. Hidden Easter Egg
- **Rick Sanchez Easter Egg**: Special animation effect triggered when username is "Rick Sanchez"

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── ProfileList/       # Character list page
├── components/             # Reusable UI components
│   ├── AuthGuard.tsx      # Authentication guard component
│   ├── BlockingDialog.tsx # Blocking dialog
│   ├── Header.tsx         # Page header
│   ├── Footer.tsx         # Page footer
│   └── profile/           # Character-related components
├── graphql/               # GraphQL configuration
│   ├── apolloClient.ts    # Apollo client configuration
│   └── queries.ts         # GraphQL query definitions
├── hooks/                 # Custom React Hooks
│   ├── useCharacters.ts   # Character data Hook
│   ├── useUrlQueryState.ts # URL state management Hook
│   └── useUserInfo.ts     # User information Hook
├── providers/             # React Context providers
│   ├── UIProvider.tsx     # UI theme provider
│   └── UserInfoProvider.tsx # User information provider
├── theme/                 # Theme configuration
│   └── cyberpunk.ts       # Cyberpunk theme
└── types/                 # TypeScript type definitions
    └── character.ts       # Character type definitions
```

## Implementation Highlights

### 1. Modern Architecture
- Uses Next.js 15 App Router, supporting React 19's latest features
- Complete TypeScript type system providing type safety during development
- Modular component design for easy maintenance and extension

### 2. Performance Optimization
- Uses Turbopack for fast development builds
- Image lazy loading and optimization
- Code splitting and dynamic imports

### 3. User Experience
- Smooth animation transitions
- Responsive design supporting various devices
- Accessibility support

### 4. Developer Experience
- Hot reload development server
- ESLint code quality checking
- Complete TypeScript support

## Quick Start

### 1. Clone the project
```bash
git clone <your-repo-url>
cd locked-profile
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Start development server
```bash
pnpm dev
```
Visit http://localhost:3000

### 4. Build for production
```bash
pnpm build
pnpm start
```

### 5. Deploy to Vercel
- Recommended to use Vercel for one-click deployment
- Supports automatic CI/CD and preview deployments

## Development Guide

### Adding New Features
1. Create new components in `src/components/`
2. Define related types in `src/types/`
3. Create custom Hooks in `src/hooks/`
4. Integrate new features in relevant pages

### Theme Customization
- Modify `src/theme/cyberpunk.ts` to customize themes
- Use Chakra UI's theme system for style management

### Data Fetching
- Add new GraphQL queries in `src/graphql/queries.ts`
- Create corresponding custom Hooks to manage data state

## Deployment Guide

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Configure environment variables (if needed)
3. Automatic deployment and preview

### Environment Variables
Project uses default configuration. For customization, you can add the following environment variables:
- `NEXT_PUBLIC_API_URL`: GraphQL API address
- `NEXT_PUBLIC_APP_NAME`: Application name

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React full-stack framework
- [Chakra UI](https://chakra-ui.com/) - Modern React component library
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client
- [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql) - Test data API
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

For any questions, feel free to submit an Issue or contact the maintainer.
