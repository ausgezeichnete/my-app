# Waslni: Admin Management System

A React + TypeScript admin dashboard for managing clients, product orders and shipments. the project was built to practice building a real-world UI with reusable, typed components. The original design is from Figma file in Arabic (RTL)

*Live demo:* https://my-app-sable-kappa-33.vercel.app/

## Screenshots
<p align="center">
  <img width="420"  alt="Dashboard" src="https://github.com/user-attachments/assets/995d7519-7ce4-4142-9e7d-06c740af8e41" />
</p>
<p align="center">
  <img width="420" alt="Waslni screenshot 2" src="https://github.com/user-attachments/assets/da95aab5-5a0c-47e1-951d-50d290dc894a" />
    <img width="420" alt="Waslni screenshot 3" src="https://github.com/user-attachments/assets/a09dca1c-0695-486d-98c8-def6d0016162" />
</p>

<p align="center">
    <img width="420" alt="Waslni screenshot 4" src="https://github.com/user-attachments/assets/6f78354f-33f8-44f6-a27d-7f1db413e382" />

  <img width="420" alt="Waslni screenshot 5" src="https://github.com/user-attachments/assets/0771faf0-b8d8-459e-b787-09e4412e1912" />
</p>



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
