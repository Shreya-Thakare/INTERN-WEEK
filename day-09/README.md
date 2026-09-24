# Day 09 — Angular + TypeScript + API Integration

## Deliverables
```text
day-09/
├── angular-app/
├── api-integration/
└── README.md
```

The Angular Facility Inspection Dashboard displays dashboard metrics, facility list/search/filter/sort/details, an inspection form, and inspection history. It uses typed API models, services, dependency injection, reactive forms, HTTP client, Observables, and error handling.

## Run
```bash
cd angular-app
npm install
npm start
```
Open `http://localhost:4200`.

Set the real API base URL in `src/app/services/facility.service.ts`. When no API is available, the service supplies a safe local fallback for demonstration.

## API expectation
- `GET /facilities`
- `GET /facilities/:id`
- `GET /facilities/:id/inspections`
- `POST /inspections`
