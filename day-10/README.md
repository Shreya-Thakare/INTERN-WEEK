# Day 10 — Smart Hygiene Risk Prediction System

## Deliverables
```text
day-10/
└── final-project/
    ├── frontend/
    ├── backend/
    ├── database/
    ├── ml/
    └── README.md
```

Primary implementation: **AI/ML**. This final project predicts facility hygiene risk from inspection features, stores facilities/inspections/complaints in a relational database design, exposes predictions through a FastAPI backend, provides a small responsive frontend, and includes an Angular API-integration module.

## Run ML API
```bash
cd final-project/ml
pip install -r requirements.txt
python train.py
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Run frontend
Open `final-project/frontend/index.html` with Live Server. API URL: `http://localhost:8000`.

## Presentation
Use `final-project/presentation-outline.md` for the required 10–15 minute presentation.
