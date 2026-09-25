# Day 7 — Next.js + Node.js

## Project Overview
Full-stack employee management using **Next.js App Router** on the frontend and a layered **Node.js/Express REST API** on the backend.

## Problem Statement
Convert the employee dashboard into a multi-page Next.js application backed by a proper Express API with routes, controllers, services, models, middleware, validation, auth basics, and error handling.

## Features
- Next.js pages: `/`, `/employees`, `/employees/[id]`, `/employees/[id]/edit`, `/employees/create`
- Full UI CRUD: list, view, create, **edit**, **delete**
- REST API: GET / POST / PUT / DELETE `/api/employees`
- Layered backend: routes → controllers → services → models
- Validation middleware, auth basics middleware, centralized error handler
- Loading UI, error boundary, not-found page
- Shared `lib/api.js` helpers + backend `utils/`
- Dark professional UI
- CORS + environment variables

## Technology Stack
- Next.js 14 (App Router)
- React 18
- Node.js + Express
- JavaScript

## Architecture
```
day-07/
├── nextjs-app/
│   ├── app/
│   │   ├── layout.js, page.js, loading.js, error.js, not-found.js
│   │   ├── globals.css
│   │   └── employees/
│   │       ├── page.js              # list
│   │       ├── DeleteButton.js
│   │       ├── create/page.js
│   │       └── [id]/
│   │           ├── page.js          # details
│   │           └── edit/page.js     # update
│   ├── lib/api.js
│   ├── .env.local.example
│   └── package.json
└── node-api/
    └── src/
        ├── server.js
        ├── routes/
        ├── controllers/
        ├── services/
        ├── models/
        ├── middleware/   # validate, auth, errorHandler
        └── utils/        # asyncHandler, response helpers
```

**Request flow:** Request → Route → Auth → Validate (writes) → Controller → Service → Model → Response

## API Documentation

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /api/employees | List employees |
| GET | /api/employees/:id | Get one |
| POST | /api/employees | Create |
| PUT | /api/employees/:id | Update |
| DELETE | /api/employees/:id | Delete |

### Example create body
```json
{
  "name": "Asha Patil",
  "email": "asha@example.com",
  "department": "Engineering",
  "position": "Developer",
  "salary": 65000
}
```

### Auth basics (optional)
By default auth is off. To enable:
```bash
AUTH_REQUIRED=true API_TOKEN=day7-secret npm start
```
Then send header: `Authorization: Bearer day7-secret`

## Installation
```bash
cd node-api && npm install
cd ../nextjs-app && npm install
```

## Environment Variables
```bash
# nextjs-app/.env.local
NEXT_PUBLIC_API_URL=http://localhost:4000/api

# node-api (optional)
PORT=4000
AUTH_REQUIRED=false
API_TOKEN=day7-secret
```

## How to Run
```bash
# Terminal 1 — API
cd node-api
npm start

# Terminal 2 — Frontend
cd nextjs-app
npm run dev
```
Open **http://localhost:3000**

## Challenges Faced
- Keeping controllers thin while centralizing business rules in services
- Handling validation errors vs 404s consistently on both API and UI
- Wiring edit/delete through client components while keeping list as a server component

## Solutions
- `asyncHandler` + error middleware for thrown service errors
- Shared `lib/api.js` for all client/server fetch calls
- `DeleteButton` client component embedded in server-rendered tables

## Future Improvements
- Persist employees to a real database (Day 8)
- JWT authentication instead of static Bearer token
- Shared TypeScript types between frontend and backend
