# Next.js Course by Codevolution

<<<<<<< HEAD
![Component Hierarchy](Component Hierarchy.png)
=======
[Component Hierarchy.png
](https://github.com/artursuvor/next.js-learning/blob/main/Component%20Hierarchy.png)
>>>>>>> origin/main

## Day 1

### 1. How to Make Pages
- Introduction to creating pages in Next.js.
- Examples of creating simple pages.

### 2. About Routing (Nested, Dynamic, etc.)
- Overview of routing in Next.js.
- Nested routes.
- Dynamic routes, e.g., `[productsId]`.

### 3. Custom 404 Page
- Creating a 404 error page.
- Using the `not-found.tsx` file.

### 4. Catch-All Segments
- Working with catch-all segments, e.g., `[...slug]`.
- Examples using `src/app/docs`.
- Additional examples using `src/app/profile`.

## Day 2

### 1. How to Hide Routes
- Hiding routes in Next.js. `(auth)`
- Practical examples and tips.

### 2. How to Use Layouts in Next.js
- Using layout components to create web pages.
- Examples of creating shared layouts.

### 3. Hidden Files (e.g., `_lib`)
- Organizing private folders and files.
- Examples of using folders starting with an underscore.

### 4. Metadata
- Exporting metadata using `export const metadata`.
- Examples from `src/app/layout.tsx` and `src/app/about/page.tsx`.
- Additional examples with dynamic routes, e.g., `src/app/profile/[profileId]`.

### 5. Link / Navigation in Application
- Using the `Link` component for navigation.
- Examples of adding navigation to the application.
- Performance of the `Link` component.

### 6. "use client";

## Day 3

### 1. Navigating Programmatically
- Using hooks like `useRouter` for programmatic navigation.
- Examples:
  - `router.replace("/")`: Replaces the current route with a new one.
  - `router.push("/")`: Pushes a new route onto the history stack.
  - `router.forward()`: Navigates forward in the history stack.
  - `router.back()`: Navigates backward in the history stack.
- Example: `src/app/order-product`.

### 2. Templates
- When a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.
- A template can be defined in `template.tsx`.
- Templates should accept a `children` prop.
- Unlike `layout.tsx`, which doesn't change when refreshed, `template.tsx` changes when refreshed.
- Example: `src/app/(auth)/(with-auth-layout)/layout.tsx` can be renamed to `template.tsx`.

### 3. Loading.tsx
- This file allows us to create loading states that are displayed to users while a specific route segment's content is loading.

### 4. Error.tsx
- In Next.js, error boundaries are used to catch and handle errors in a React component tree. They allow you to render a fallback UI when an error occurs, instead of letting the error crash the entire application.

### 5. Parallel Routes
- Improved Page Load Performance.
- Enhanced User Experience.
- Modular Development
- Error Isolation
- Example: `src/app/complex-dashboard`.

### 6. Unmatched Routes Default.tsx
- In Next.js, you can handle unmatched routes by using a `default.tsx` file in the appropriate parallel route folder. This acts as a fallback component for any route that doesn't match a specific route in the same segment.

Day 4-5

1. Intercepting Routes
- (.) (..) (..)(..) (...)
- exp. `src/app/photo-feed`

2. Route Handlers
- GET
- POST 
- route.ts

3. Thunder Client

### Useful Links:
- [Course Videos on YouTube](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&ab_channel=Codevolution)

---
