from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class CandidateProfile(Base):
    __tablename__ = "candidate_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    department = Column(String)
    year = Column(String)
    phone = Column(String)
