from fastapi import FastAPI
from database import engine, Base
import models

from routers.auth import router as auth_router
from routers.core import router as core_router

app = FastAPI(title="Campus Hiring System")

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(core_router)

@app.get("/")
def root():
    return {"status": "system alive"}
