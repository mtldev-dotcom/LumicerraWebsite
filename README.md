# Lumicerra Website (Next.js)

This is the official website for Lumicerra LED Lighting Systems, built with Next.js.

## Migration from React to Next.js

This project was originally built with React and Vite, and has been migrated to Next.js for better SEO, server-side rendering, and a more robust development experience. The migration involved:

1. Converting the file structure to follow Next.js App Router pattern
2. Updating import paths and component dependencies
3. Setting up proper i18n configuration for internationalization
4. Ensuring UI components are properly client-side hydrated

## Project Structure

```
app/                     # Next.js App Router directory
  /components/           # Reusable UI components
    /layouts/            # Layout components like Header and Footer
    /ui/                 # UI components (shadcn/ui)
  /hooks/                # Custom React hooks
  /lib/                  # Utility functions and data
  /locales/              # Internationalization files
  /[routes]/             # App routes (page.tsx files)
public/                  # Static assets
```

## Main Technologies

- **Next.js**: React framework for server-side rendering
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **i18next**: Internationalization
- **shadcn/ui**: UI component collection

## Development Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server

## Cleanup

A cleanup script (`cleanup.ps1`) has been provided to remove the old React/Vite files that are no longer needed. To run it:

```
powershell -ExecutionPolicy Bypass -File .\cleanup.ps1
```

## Internationalization

The website supports both English and French languages. The translation files are located in:

- `/app/locales/en/translation.json`
- `/app/locales/fr/translation.json`

To add or modify translations, edit these files and the changes will be automatically reflected in the UI.

## Adding New Pages

To add new pages to the website, create a new directory in the `app` folder with a `page.tsx` file. The URL will match the directory structure.

Example:
```
app/about/page.tsx => /about
app/products/led-panels/page.tsx => /products/led-panels
