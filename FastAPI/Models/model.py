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


class Message(BaseModel):
    fullname:str
    email:str
    message:str

class Cake(BaseModel):
    cakeName:str
    cakeType:str
    cakeWeight:float
    cakePrice:float