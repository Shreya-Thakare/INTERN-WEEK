# Smart Hygiene Risk Prediction System

## Problem
Facilities with delayed cleaning, high odor/waste scores, high footfall, and repeated complaints may need inspection priority. This project produces a risk prediction to support—not replace—human inspection.

## Architecture
```text
Frontend / Angular module → FastAPI REST API → saved ML pipeline
                                  ↓
                         SQL database schema
```

## Features
- Facility hygiene-risk prediction
- Validated REST endpoint
- Training, evaluation, model selection, and saved pipeline
- Facility, inspection, and complaint database schema
- Responsive dashboard prototype

## Main API
`POST /predict`
```json
{"cleanliness_score":5,"odor_score":7,"waste_level":6,"complaints":4,"footfall":350,"hours_since_cleaning":24}
```

## Future work
Real inspection data, authentication, database persistence, monitoring, cross-validation, feature drift checks, fairness evaluation, and human review workflow.


## Credit to Shreya-Thakare 