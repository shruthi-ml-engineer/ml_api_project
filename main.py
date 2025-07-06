import os
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import uvicorn

# Load model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

app = FastAPI()

class InputData(BaseModel):
    feature1: float
    feature2: float
    feature3: float
    feature4: float

@app.get("/")
def home():
    return {"message": "ML API is running!"}

@app.post("/predict")
def predict(data: InputData):
    X = [[
        data.feature1,
        data.feature2,
        data.feature3,
        data.feature4
    ]]
    y_pred = model.predict(X)
    return {"prediction": int(y_pred[0])}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)