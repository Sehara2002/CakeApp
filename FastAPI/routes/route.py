from fastapi import APIRouter
from Models.model import User
from DB.database import collection
from Schemas.schema import list_serial
from bson import ObjectId
from Schemas.schema import login_user
router = APIRouter()

@router.post("/signup")
async def add_user(user:User):
    collection.insert_one(dict(user))
    
@router.get("/")
async def getUsers():
    users = list_serial(collection.find())
    return users

@router.get("/login/")
async def loginUser():
    user = login_user(collection.find_one({"_id":ObjectId('6635037033d7961bfdab57ba')}))
    return{
        "username":user["username"],
        "password":user["password"]
    }


