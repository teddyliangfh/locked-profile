# Locked Profile Challenge

[![Vercel](https://vercel.com/button)](https://locked-profile.vercel.app/)

**Live Demo:** [https://locked-profile.vercel.app/](https://locked-profile.vercel.app/)

## Project Overview

This project is a submission for the Leonardo.Ai frontend interview challenge (Stage 2). It is built with Next.js App Router, TypeScript, Chakra UI, and Apollo Client. The app features a blocking user info modal, paginated GraphQL data display, detail modals, a hidden easter egg, and full responsive design, meeting all challenge requirements.

## Tech Stack

- **Next.js (App Router, TypeScript)**: Modern React framework with SSR/SSG, file-based routing, and type safety.
- **Chakra UI**: Component library for rapid, accessible, and responsive UI development.
- **Apollo Client**: GraphQL client, used here to connect to the Rick and Morty public API.
- **Framer Motion**: Animation library, used for the easter egg banner and other UI effects.
- **Vercel**: Recommended deployment platform.
- **Git**: Version control.
- **pnpm**: Recommended package manager for this project.

## Features

- Blocking modal on first visit requiring username and job title, with persistent storage.
- User info is always visible and can be updated at any time.
- Apollo Client fetches paginated character data (with images) from the Rick and Morty GraphQL API.
- Direct URL access to any page of the paginated data.
- Clicking a character opens a modal with detailed info and image.
- **Theme customization:** Full support for both dark and light modes, with a toggle to switch between them. UI displays perfectly in both modes.
- **Highly responsive:** The layout adapts seamlessly from large desktop screens to mobile devices.
- **Accessibility friendly:** The app is accessible and scores 91 on Lighthouse Accessibility audits.
- Footer displays the challenge version.
- Hidden easter egg: entering "Rick Sanchez" as username triggers an animated banner.

## Page Structure

- `/` (Home): Shows user info and update option.
- `/ProfileList`: Paginated character list with modal details.
- See `src/app/` and `src/components/` for more.

## Implementation Notes

- **Blocking Modal**: `BlockingDialog` component blocks access until user info is entered, using localStorage and React context for persistence.
- **Apollo Client**: Configured in `src/graphql/apolloClient.ts`, with `useCharacters` hook for paginated queries.
- **Pagination & Deep Linking**: `useUrlQueryState` hook manages URL query params for direct page access.
- **Detail Modal**: `ProfileCardModal` displays character details.
- **Theme Customization**: The app supports both dark and light modes, with a toggle for switching. The UI is carefully designed to display perfectly in both modes.
- **Responsiveness**: The layout is highly responsive, adapting seamlessly from large desktop screens to mobile devices.
- **Accessibility**: The app is accessibility-friendly and achieves a Lighthouse Accessibility score over 90.
- **Footer**: Version info rendered in `layout.tsx`.
- **Easter Egg**: Animated banner appears if username is "Rick Sanchez".

## Requirements Checklist

| Requirement                                                    | Status   |
|---------------------------------------------------------------|----------|
| Next.js + App Router + TypeScript                             | ✅        |
| Git version control                                           | ✅        |
| Chakra UI component library                                   | ✅        |
| Responsive design                                             | ✅        |
| Footer with challenge version                                 | ✅        |
| Blocking modal for username/job title, persistent storage     | ✅        |
| User info view and update                                     | ✅        |
| Apollo Client GraphQL (with images)                           | ✅        |
| Paginated info page, URL deep linking                         | ✅        |
| Modal with item details                                       | ✅        |
| No data fetch before user info entered                        | ✅        |
| Minimal dependencies                                          | ✅        |
| Vercel deployment (recommended)                               | ✅        |
| Code comments & documentation                                 | ✅        |

## Getting Started

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd locked-profile
   ```
2. **Install dependencies (using pnpm)**
   ```bash
   pnpm install
   ```
3. **Run locally**
   ```bash
   pnpm dev
   ```
   Visit http://localhost:3000

4. **Build and start for production**
   ```bash
   pnpm build
   pnpm start
   ```

5. **Deploy to Vercel**
   - Recommended: use Vercel for one-click deployment.

## Project Structure

- `src/app/`: Pages and layout (App Router)
- `src/components/`: Reusable UI components
- `src/graphql/`: Apollo Client config and GraphQL queries
- `src/hooks/`: Custom React hooks
- `src/providers/`: Global context providers
- `src/types/`: TypeScript type definitions
- `public/`: Static assets

## Future Improvements

1. **AuthGuard Implementation**: The current `AuthGuard` is a purely client-side solution. A more robust approach would be to use Next.js Middleware to handle route protection and user gating at the edge or server level.
2. **Persistence with localStorage**: localStorage is used for simplicity in this frontend-only implementation. In a real-world scenario with a backend, user info should be securely managed and updated via server APIs, using secure cookies or session tokens for persistence and authentication.
3. **GraphQL Code Generation**: Tools like GraphQL Code Generator (codegen) and other GraphQL utilities could be used to automatically generate TypeScript types and React hooks from the GraphQL schema and queries, improving type safety and developer experience.
4. **Testing**: Due to the challenge's explicit instruction to minimize dependencies and the lack of a testing requirement, tests were not included. In a production scenario, unit and integration tests would be added.

## Acknowledgements

- [Chakra UI](https://chakra-ui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql)
- [Next.js](https://nextjs.org/)
- The color scheme of this project was inspired by [Leonardo.Ai](https://leonardo.ai/).

---

For any questions, feel free to reach out. Good luck reviewing!
