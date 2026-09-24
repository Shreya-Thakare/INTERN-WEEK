# API Integration

## Facility list
`GET /api/facilities`

```json
[{"id":1,"name":"Central Washroom","location":"Nagpur Central","cleanliness_score":5.5,"water_availability":true}]
```

## Inspection history
`GET /api/facilities/1/inspections`

## Create inspection
`POST /api/inspections`

```json
{"facility_id":1,"inspection_date":"2026-09-24","cleanliness_score":5,"odor_score":7,"waste_level":6,"status":"Needs Attention","remarks":"Cleaning required"}
```

The Angular service uses `HttpClient`, returns `Observable<T>`, handles request failure with `catchError`, and displays error feedback in the component.
