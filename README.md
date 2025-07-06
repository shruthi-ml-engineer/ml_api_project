# ML API Demo Project

**Goal:** Serve a simple ML model using FastAPI.  
**Runs on:** Replit, local Python, or Docker.

## Steps

1. Run `train_model.py` (already done, you have `model.pkl`)
2. Install: `pip install -r requirements.txt`
3. Start: `uvicorn main:app --reload`
4. Open: `http://127.0.0.1:8000/`  
5. Test: POST `/predict` with JSON:
```json
{
  "feature1": 5.1,
  "feature2": 3.5,
  "feature3": 1.4,
  "feature4": 0.2
}
```
