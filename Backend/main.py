from dotenv import load_dotenv, find_dotenv
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
load_dotenv(find_dotenv())

password = os.environ.get("MONGODB_PWD")

uri = f"mongodb+srv://cakeodyssey:{password}@cakeapp.jqdxbzo.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)