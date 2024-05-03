from fastapi import APIRouter
from Models.model import User
from DB.database import collection
from fastapi.middleware.cors import CORSMiddleware
from Schemas.schema import list_serial

router = APIRouter()

@router.post("/signup")
async def add_user(user:User):
    collection.insert_one(dict(user))
    
@router.get("/")
async def getUsers():
    users = list_serial(collection.find())
    return users