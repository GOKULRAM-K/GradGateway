from pydantic import BaseModel
from typing import Optional

class JobCreate(BaseModel):
    title: str
    description: Optional[str] = None
    requirements: Optional[str] = None
    cutoff_count: Optional[int] = None

class JobOut(BaseModel):
    id: int
    title: str
    description: Optional[str]
    requirements: Optional[str]
    status: str

    class Config:
        from_attributes = True
