from pydantic import BaseModel


class User(BaseModel):
    name: str
    age: int
    gender: str
    address: str
    contact: str
    email: str
    username: str
    password: str


class Message(BaseModel):
    fullname: str
    email: str
    message: str


class Cake(BaseModel):
    cakeName: str
    cakeType: str
    cakeWeight: float
    cakePrice: float


class Order(BaseModel):
    OrderedDate:str
    OrderedTime:str
    customerAddress:str
    customerContact:str
    customerEmail:str
    customerName:str
    flavour:str
    level:str
    shape:str
    size:str
    
    