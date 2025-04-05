from fastapi import FastAPI
from routes.api_emotions import router as emotion_api

app = FastAPI()

@app.get('/')
async def root():
    return {"message": "Hello, API Server of Crispyguys"}

app.include_router(emotion_api)