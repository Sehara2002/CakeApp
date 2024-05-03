from fastapi import APIRouter
from Models.model import User
from DB.database import collection
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter()

@router.post("/signup")
async def add_user(user:User):
    collection.insert_one(dict(user))