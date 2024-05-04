from fastapi import FastAPI
from bson import ObjectId
from DB.database import collection
from Models.model import User
from fastapi.middleware.cors import CORSMiddleware
from routes.route import router


app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

app.include_router(router)
