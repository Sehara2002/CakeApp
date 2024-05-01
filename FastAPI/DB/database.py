from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://fernandomsa22:Shehara2002@cluster0.683r8uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    
    db = client.cake_Odyssey
    collection = db["Cakes"]
    
    if(db):
        print("Database Created")
    else:
        print("Database cannot create")
        
except Exception as e:
    print(e)