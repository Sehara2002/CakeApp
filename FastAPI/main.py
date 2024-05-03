from fastapi import FastAPI
from bson import ObjectId
from DB.database import collection
from Models.model import User 


app = FastAPI()

data =  {"name":"Shehara","age":23,"email":"Shehara1010@gmail.com"}
@app.get("/adduser")
async def addUser():
    result = collection.insert_once(data)
    return {"Insert Id":result.insert_id}

@app.get("/")
async def getUser():
    return {"Message":"Hello Everyone"}