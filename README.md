# Waslni: Logistik- und Bestellverwaltung Dashboard

Ein Admin-Dashboard für Logistik und Bestellverwaltung, entwickelt mit React und TypeScript. Es dient zur Verwaltung von Kunden, Produktbestellungen und Lieferungen. Ziel des Projekts war es, eine praxisnahe Benutzeroberfläche mit wiederverwendbaren, typisierten Komponenten umzusetzen. Es ist in Zusammenarbeit mit einem erfahrenen Senior-Entwickler entstanden. Der enge Austausch und die Code-Reviews haben mir geholfen, Struktur, Codequalität und saubere Komponenten besser zu verstehen. Das ursprüngliche Design stammt aus einer arabischen (RTL) Figma-Datei. Die Screenshots unten sind eine englische Nachbildung davon

*Live-Demo:* https://my-app-sable-kappa-33.vercel.app/

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

## Funktionen

- Dashboard mit zentralen Kennzahlen und Diagrammen
- Kundenliste mit Suche, Status und Profilansicht
- Datentabellen mit verzögerter Suche (Debouncing) und Paginierung
- Formulare und Authentifizierung
- Wiederverwendbare UI-Komponenten (Button, Input, Field) mit typisierten Props

## Tech-Stack

React, TypeScript, Tailwind CSS, shadcn/ui, Vite, TanStack Table, React Query

## Wichtige Entscheidungen

- Wiederverwendbare, typisierte Komponenten für eine konsistente Oberfläche
- Debounced Search, um unnötige API-Aufrufe zu vermeiden
- Ein gemeinsamer Fetch-Helper für alle API-Anfragen

## Lokal starten

bash
npm install
npm run dev
