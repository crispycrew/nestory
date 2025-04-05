from fastapi import APIRouter
from pydantic import BaseModel
from utils.model_emotion import predict_emotion

router = APIRouter()

class InputText(BaseModel):
    text: str


@router.post("/predict")
def predict(request: InputText):
    response = predict_emotion(request.text)
    return response