# Angular API Module

Use the Day 9 Angular app with this prediction API:
```ts
this.http.post<{hygiene_risk:string; high_risk_probability:number}>('http://localhost:8000/predict', formValue)
```

Add an Angular reactive form with the six ML input fields and display the returned risk and probability.
