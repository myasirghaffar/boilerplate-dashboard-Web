# UI Implementation Guide (Raw Code -> React + Tailwind)

This project already has a React + Vite + Tailwind boilerplate.  
Use this guide to convert any provided raw UI code (HTML/CSS/SVG/image references) into the project structure.

## 1) Folder Rules (Mandatory)

- Put all raster images in `src/assets/images/`
- Export those images from `src/assets/images/index.js`
- Put all SVG icon components in `src/assets/icons/icons.jsx`
- Re-export icons from `src/assets/icons/index.js`
- Build reusable UI blocks inside relevant folders under `src/components/`
  - Example: auth UI -> `src/components/auth/`
  - Example: dashboard cards -> `src/components/dashboard/`
- Keep route-level composition in `src/pages/`

## 2) Raw HTML/CSS Conversion Rules

- Convert `class` to `className`
- Convert inline style strings to React style objects only when needed
- Prefer Tailwind utility classes over custom CSS
- Use semantic HTML (`section`, `header`, `main`, `form`, `button`, etc.)
- Split large raw sections into reusable components when repeated
- Keep business logic in pages/containers and keep UI components presentational

## 3) SVG Handling Rule

When raw code provides SVG blocks:

1. Move each SVG into `src/assets/icons/icons.jsx` as a named React component
2. Use camelCase SVG attributes in JSX (`strokeWidth`, `clipPath`, `fillRule`, etc.)
3. Support styling via `className` and `currentColor` where possible
4. Import icons from `src/assets/icons` in components/pages

Example:

```jsx
import { UserFormIcon } from "../assets/icons";
```

## 4) Image Handling Rule

When raw code includes image files:

1. Save files in `src/assets/images/`
2. Add named exports in `src/assets/images/index.js`
3. Import by named export in UI files

Example:

```jsx
import { loginForm } from "../assets/images";
```

## 5) Componentization Checklist

Before finalizing a UI implementation, verify:

- Repeated layout sections are extracted into `src/components/...`
- Repeated form controls are reusable
- Asset imports are centralized through `src/assets/.../index.js`
- No hardcoded absolute URLs for local assets
- Responsive behavior is handled with Tailwind breakpoints

## 6) Suggested Workflow for New Raw UI

1. Read raw code and list required sections, icons, and images
2. Save images to `src/assets/images/` and export from index
3. Move all inline SVGs to `src/assets/icons/icons.jsx`
4. Create reusable components in `src/components/<feature>/`
5. Compose page in `src/pages/...`
6. Run lint checks and fix introduced issues

## 7) Output Quality Standard

- UI matches raw design structure
- Uses project theme/tokens (Tailwind classes already configured)
- Keeps code readable, reusable, and boilerplate-aligned
- No duplicate inline SVG blocks in page files
