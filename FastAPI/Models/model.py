from pydantic import BaseModel

class User(BaseModel):
    name:str
    age:int
    gender:str
    address:str
    contact:str
    email:str
    username:str
    password:str

