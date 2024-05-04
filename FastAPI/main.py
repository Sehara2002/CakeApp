from fastapi import FastAPI
from bson import ObjectId
from DB.database import collection
from Models.model import User
from fastapi.middleware.cors import CORSMiddleware
from routes.route import router


app = FastAPI()

origins = [
    'http://localhost:5173',
    'https://rainbow-halva-98f0e6.netlify.app'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = False,
    allow_methods = ["*"],
    allow_headers=["*"]
)

app.include_router(router)
