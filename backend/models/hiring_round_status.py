from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class HiringRoundStatus(Base):
    __tablename__ = "hiring_round_status"

    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidate_profiles.id"))
    job_role_id = Column(Integer, ForeignKey("job_roles.id"))
    round1_status = Column(String, default="PENDING")
    round2_status = Column(String, default="PENDING")
    round3_status = Column(String, default="PENDING")
