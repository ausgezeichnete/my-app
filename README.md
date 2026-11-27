# Waslni: Admin Management System

A React + TypeScript admin dashboard for managing clients, product orders and shipments. the project was built to practice building a real-world UI with reusable, typed components. The original design is from Figma file in Arabic (RTL)

*Live demo:* https://my-app-sable-kappa-33.vercel.app/

## Screenshots

docs/

## Features
- Dashboard with key stats and charts
- Client list with search, status and profile view
- Data tables with debounced search and pagination
- Forms and authentication
- Reusable UI components (Button, Input, Field) with typed props

## Tech stack
React, TypeScript, Tailwind, Shadcn, Vite, TanStack Table, React Query

## Key decisions
- Reusable, typed components to keep the UI consistent
- Debounced search to avoid unnecessary API calls
- A shared fetch helper for all API requests

## Run locally
bash
npm install
npm run dev
