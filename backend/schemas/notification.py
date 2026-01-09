from pydantic import BaseModel
from datetime import datetime

class NotificationOut(BaseModel):
    id: int
    title: str
    message: str
    is_read: bool
    timestamp: datetime

    class Config:
        from_attributes = True
