from pymongo import MongoClient
#Step 1: Connect to MongoDB

client = MongoClient(port=27017)
db = client.blog_and_courses
class connect:
    def __init__(self) -> None:
        pass