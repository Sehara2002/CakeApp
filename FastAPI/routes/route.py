from fastapi import APIRouter,Depends, HTTPException
from Models.model import User
from DB.database import collection
from Schemas.schema import list_serial
from bson import ObjectId
from Schemas.schema import login_user
import jwt
from jwt import encode as jwt_encode
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
router = APIRouter()

# Secret key for signing the token
SECRET_KEY = "your-secret-key-goes-here"
security = HTTPBearer()

@router.post("/signup")
async def add_user(user:User):
    result = collection.insert_one(dict(user))
    if(result):
        return{
            "message":"User Added",
            "status":200
        }
    else:
        return{
            "message":"Cannot Add",
            "status":422
        }
    
@router.get("/")
async def getUsers():
    users = list_serial(collection.find())
    return users

@router.get("/login/{username}")
async def loginUser(username:str)->dict:
    user = login_user(collection.find_one({"username":username}))
    return{
        "username":user["username"],
        "password":user["password"]
    }


