from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.job_role import JobRole
from schemas.job import JobCreate, JobOut
from utils.deps import require_role, get_current_user

router = APIRouter(prefix="/jobs", tags=["Jobs"])

@router.post("/create", response_model=JobOut)
def create_job(job: JobCreate,
               db: Session = Depends(get_db),
               user = Depends(require_role("ADMIN"))):

    new_job = JobRole(
        title=job.title,
        description=job.description,
        requirements=job.requirements,
        cutoff_count=job.cutoff_count,
        created_by=user.id
    )
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return new_job


@router.get("/list", response_model=list[JobOut])
def list_jobs(db: Session = Depends(get_db),
              user = Depends(get_current_user)):

    return db.query(JobRole).all()
