def individual_serial(user) -> dict:
    return{
        "id":str(user["_id"]),
        "name":user["name"],
        "age":user["age"],
        "gender":user["gender"],
        "address":user["address"],
        "contact":user["contact"],
        "email":user["email"],
        "username":user["username"],
        "password":user["password"]
    }

def list_serial(users) -> list:
    return[individual_serial(user) for user in users]

def login_user(user)->dict:
    return {
        "id":str(user["_id"]),
        "username":user["username"],
        "password":user["password"],
        "name":user["name"]
    }
    
def getIndividualCake(cake)->dict:
    return{
        "id":str(cake["_id"]),
        "cakeName":cake["cakeName"],
        "cakeType":cake["cakeType"],
        "cakeWeight":float(cake["cakeWeight"]),
        "cakePrice":float(cake["cakePrice"])
    }

def getCakes(cakes)->list:
    return[getIndividualCake(cake) for cake in cakes]