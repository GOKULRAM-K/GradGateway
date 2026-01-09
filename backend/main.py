from fastapi import FastAPI
from database import engine, Base
import models
from routers.jobs import router as jobs_router
from routers.notifications import router as notifications_router

from routers.auth import router as auth_router
from routers.core import router as core_router

app = FastAPI(title="Campus Hiring System")

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(core_router)
app.include_router(jobs_router)
app.include_router(notifications_router)

@app.get("/")
def root():
    return {"status": "system alive"}
