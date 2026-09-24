# Day 07 — Next.js + Node.js

## Deliverables
```text
day-07/
├── nextjs-app/
├── node-api/
└── README.md
```

A full-stack Employee Dashboard. The Next.js App Router frontend provides `/employees`, `/employees/create`, and `/employees/[id]`. The Express API uses routes, controllers, services, models, middleware, and utilities.

## Run API
```bash
cd node-api
npm install
npm start
```
API: `http://localhost:4000`

## Run frontend
```bash
cd nextjs-app
npm install
npm run dev
```
Frontend: `http://localhost:3000/employees`

## API
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/employees` | List employees |
| GET | `/api/employees/:id` | Employee details |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

Use the `NEXT_PUBLIC_API_URL` environment variable to change the API URL. Default: `http://localhost:4000/api`.
