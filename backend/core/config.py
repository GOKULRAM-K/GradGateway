from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Campus Hiring System"
    DATABASE_URL: str = "sqlite:///./campus_hiring.db"
    SECRET_KEY: str = "CHANGE_THIS_LATER"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

settings = Settings()
