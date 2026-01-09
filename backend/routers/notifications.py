from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.notification import Notification
from schemas.notification import NotificationOut
from utils.deps import get_current_user

router = APIRouter(prefix="/notifications", tags=["Notifications"])

@router.get("/", response_model=list[NotificationOut])
def get_notifications(db: Session = Depends(get_db),
                       user = Depends(get_current_user)):

    return db.query(Notification).filter(Notification.user_id == user.id).all()
