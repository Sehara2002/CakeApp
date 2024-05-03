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