# Day 08 — Database + Laravel

## Deliverables
```text
day-08/
├── sql/
├── database/
├── laravel-api/
└── README.md
```

This submission designs a relational employee/facility database and provides Laravel API files for Facilities, Inspections, and Complaints.

## Database relationships
- A department has many employees.
- A facility has many inspections and complaints.
- An inspection/complaint belongs to one facility.

## Run SQL
Create a MySQL database named `facility_management`, then execute `sql/schema.sql`, `sql/seed.sql`, and `sql/queries.sql`.

## Laravel setup
```bash
composer create-project laravel/laravel laravel-api
# Copy the included laravel-api files into the generated Laravel application.
cp .env.example .env
php artisan key:generate
# Configure DB_* variables in .env
php artisan migrate --seed
php artisan serve
```

## API routes
`GET, POST, PUT, DELETE /api/facilities`  
`GET, POST, PUT, DELETE /api/inspections`  
`GET, POST, PUT, DELETE /api/complaints`

Request flow: **Request → Route → Controller → Model → Database → JSON Response**.
