from fastapi import FastAPI
from Routes.routes import router

app = FastAPI()
app.include_router(router)