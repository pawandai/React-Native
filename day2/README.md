# React Native: Day 2

## 1. Setting Up the codebase
```css
src/ ------------------------------------ Main application
├── app/ -------------------------------- Folder based routing
│   └── (route-group)/
|       └── route
|           └── index.tsx
│   ├── _layout.tsx
│   └── +not-found.tsx
├── assets/ ----------------------------- For static files
│   │── fonts/
|   │   ├── font.ttf
|   │   └── ***
│   ├── images/
|   │   ├── icons/
|   │   └── ***
├── components/ ------------------------- Global components
│   ├── Button/
|   |   ├── index.tsx
|   |   ├── SubComponent.tsx
│   └── ***
├── constants/ -------------------------- Constants used in the app
│   ├── colors.ts
│   └── ***
├── features/ --------------------------- Application Features
│   ├── Authentication/
│   │   ├── components/
│   │   │   └── SignupForm.tsx
│   │   ├── services/
│   │   │   └── authService.tsx
│   │   ├── screens/
│   │   │   └── SignupScreen.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   └── index.ts
│   ├── Dashboard/
│   │   ├── components/
│   │   │   ├── DashboardHeader.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── services/
│   │   │   └── dashboardService.tsx
│   │   ├── screens/
│   │   │   └── DashboardScreen.tsx
│   │   ├── hooks/
│   │   │   └── useDashboardData.ts
│   │   └── index.ts
│   └── ***
├── hooks/ ----------------------- Global Hooks
│   ├── useFetch.ts
│   └── index.ts
├── navigation/ ------------------ React Native Navigators
│   ├── AppNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── index.ts
├── services/ -------------------- Includes API related functions
│   ├── api.service.ts
│   └── index.ts
├── store/ ----------------------- State Management
│   ├── actions/
│   ├── reducers/
│   ├── selectors/
│   ├── context/
│   └── index.ts
├── types/ ----------------------- Type Definition
│   ├── auth.types.ts
│   └── index.ts
└── utils/ ----------------------- Utility Functions
    ├── validation.ts
    ├── formatDate.ts
    └── index.ts

```

## 2. Tech Stack used

- **React Native (Expo + TS)**
- **NativeWind**
- **Redux**
- **Axios**