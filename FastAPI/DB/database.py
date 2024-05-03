
from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://shehara1010:Shehara2002@aiportfolio.5yejaie.mongodb.net/?retryWrites=true&w=majority&appName=AIPortfolio"

client = MongoClient(uri)

db = client.Cake_Odyssey
collection = db["cake_users"]


