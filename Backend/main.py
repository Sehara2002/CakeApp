from fastapi import FastAPI,HTTPException,status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import client


app = FastAPI()


database = client["CakeApp"]

class Customer_data(BaseModel):
    name:str
    age:int
    gender:bool
    address:str
    contact_num:str
    email:str
    username:str
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


    


