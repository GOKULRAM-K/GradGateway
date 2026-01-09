from fastapi import FastAPI
from database import engine, Base
import models

app = FastAPI(title="Campus Hiring System")

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"status": "system alive"}
