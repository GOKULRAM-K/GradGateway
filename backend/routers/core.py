from fastapi import APIRouter, Depends
from utils.deps import get_current_user, require_role

router = APIRouter(tags=["Core"])

@router.get("/me")
def get_me(user=Depends(get_current_user)):
    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "role": user.role
    }

@router.get("/admin-only")
def admin_test(user=Depends(require_role("ADMIN"))):
    return {"message": "Welcome admin"}
