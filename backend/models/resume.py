from sqlalchemy import Column, Integer, String, Text, ForeignKey
from database import Base

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidate_profiles.id"))
    job_role_id = Column(Integer, ForeignKey("job_roles.id"))
    file_path = Column(String)
    extracted_text = Column(Text)
    resume_score = Column(Integer, nullable=True)
    status = Column(String, default="UPLOADED")
