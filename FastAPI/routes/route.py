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

def generate_token(email: str) -> str:
 payload = {"email": email}
 token = jwt_encode(payload, SECRET_KEY, algorithm="HS256")
 return token

@router.post("/signup")
async def add_user(user:User):
    existing_user = collection.find_one({"email": user.email})
    if existing_user:
        return {"message": "User already exists"}
    dict_user = dict(user)
    result = collection.insert_one(dict_user)
    token = generate_token(user.email)
    dict_user["_id"] = str(dict_user["_id"])
    dict_user["token"] = token
        
    return dict_user
    
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


