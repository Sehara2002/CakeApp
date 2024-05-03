from fastapi import FastAPI,HTTPException,status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import client
from bson import ObjectId

app = FastAPI()

app.add_middleware(
 CORSMiddleware,
 allow_origins=["http://localhost:5173"], 
 allow_credentials=True,
 allow_methods=["*"],
 allow_headers=["*"],
 )



database = client["CakeApp"]

class Customer_data(BaseModel):
    name:str
    age:int
    gender:bool
    address:str
    contact_num:str
    email:str
    username:str = None
    password:str



@app.post("/signup")
def customer(user:Customer_data):
    collection = database["Customer"]
    user_data = {
        "name":user.name,
        "age":user.age,
        "gender":user.gender,
        "address":user.address,
        "contact_num":user.contact_num,
        "email":user.email,
        "username":user.username,
        "password":user.password
    }
    inserted_id = collection.insert_one(user_data).inserted_id
    return {"success":f"{inserted_id}"}

@app.post("/login")
async def login(user: Customer_data):
    collection = database["Customer"]
    login_data = {
        "username":user.username,
        "password":user.password
    }
    
    user_login_data = collection.find_one(login_data)
    if user_login_data:
        user_login_data["_id"] = str(user_login_data["_id"])
        return user_login_data
    return {"Message":"Cannot Find the User"} 

if __name__ == "__main__":
 import uvicorn
 uvicorn.run(app, host="0.0.0.0", port=8000)
    
    
    


