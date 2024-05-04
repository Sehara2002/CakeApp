
from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://cakeodyssey:100Sure@cakeapp.baywg0b.mongodb.net/?retryWrites=true&w=majority&appName=cakeApp"

client = MongoClient(uri)

db = client.Cake_Odyssey
collection = db["cake_users"]
cake_collection = db["cakes"]
collection_messages = db["user_messages"]



