from fastapi import APIRouter,Depends, HTTPException
from Models.model import User,Cake,Message,Order
from DB.database import collection,cake_collection,collection_messages,order_collection
from Schemas.schema import list_serial,login_user,getCakes,getOrders,individual_serial,getOrder
from bson import ObjectId
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
    
@router.post("/contacts")
async def contacts(message:Message):
    message_pack = dict(message)
    result = collection_messages.insert_one(message_pack)
    token = generate_token(message.email)
    message_pack["_id"] = str(message_pack["_id"])
    message_pack["token"] = token
    return message_pack

@router.get("/users")
async def getUsers():
    users = list_serial(collection.find())
    return users

@router.get("/users/{username}")
async def getUsers(username:str)->dict:
    users = login_user(collection.find_one({"username":username}))
    return {
        "username":users["username"],
        "name":users["name"]
    }


@router.get("/login/{username}")
async def loginUser(username:str)->dict:
    user = login_user(collection.find_one({"username":username}))
    return{
        "username":user["username"],
        "password":user["password"]
    }

@router.delete("/users/{id}")
async def deleteUser(id:str):
    result = collection.delete_one({"_id":ObjectId(id)})
    if result:
        return{"message":"Deleted","status":200}
    else:
        return{"message":"Cannot Delete","status":400}


@router.post("/cakes")
async def addCake(cake:Cake):
    response = cake_collection.insert_one(dict(cake))
    if response:
        return{
            "message":"Success",
            "status":200
        }
    else:
        return{
            "message":"Cannot Insert",
            "status":400
        }

@router.get("/cakes")
async def get_Cakes():
    result = getCakes(cake_collection.find())
    return result

@router.delete("/cakes/{id}")
async def deleteOrder(id:str):
    result = cake_collection.delete_one({"_id":ObjectId(id)})
    if result:
        return{"message":"Deleted","status":200}
    else:
        return{"message":"Cannot Delete","status":400}

@router.post("/orders")
async def placeOrder(order:Order):
    response = order_collection.insert_one(dict(order))
    if response:
        return{
            "message":"Success",
            "status":200
        }
    else:
        return{
            "message":"Cannot Insert",
            "status":400
        }

@router.get("/orders")
async def get_orders():
    result = getOrders(order_collection.find())
    return result

@router.delete("/orders/{id}")
async def deleteOrder(id:str):
    result = order_collection.delete_one({"_id":ObjectId(id)})
    if result:
        return{"message":"Deleted","status":200}
    else:
        return{"message":"Cannot Delete","status":400}