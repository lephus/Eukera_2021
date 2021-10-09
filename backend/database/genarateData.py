from pymongo import MongoClient
import requests
from random import randint
from bs4 import BeautifulSoup
import asyncio
# from transformers import pipeline
# from gensim.summarization import keywords
# summarizer = pipeline("summarization")

#Step 1: Connect to MongoDB

client = MongoClient(port=27017)
db=client.blocandcoure

db.posts.delete_many({})

response = requests.get("https://techcrunch.com/")
soup = BeautifulSoup(response.content, "html.parser")
titles = soup.findAll('a', class_='post-block__title__link')

# async def summarizerContent(s):
#     tmp = await summarizer(s, max_length=200, min_length=30, do_sample=False)
#     return tmp

# async def extractKeyContent(s):
#     tmp = await keywords(s, words=10)
#     return tmp

myList = []
async def ok():
    c = 0
    for x in titles:
        response = requests.get(x.attrs["href"])
        soup1 = BeautifulSoup(response.content, "html.parser")
        content1 = soup1.find(class_="content")
        data = {
                "idPost": randint(1000000, 9999999),
                "title": str(x.text).strip(),
                "viewer":  randint(100, 99999),
                "idCategory": randint(1, 5),
                "keyword": "extractKeyContent content ",
                "tag": "(để nhóm các bài viết cùng chủ đề lại với nhau)",
                "description": str(soup1.find(class_="article-content").text).strip(),
                "content": str(content1).strip().replace('"', "'"),
                "summary": "summarizerContent(content))",
                "createAt": "2021/10/9 12:24:34",
                "updateAt": "2021/10/9 12:24:34",
                "idUser":  randint(1, 5)
            }
        myList.append(data)
        c = c + 1
        # print('Created {0} of 500 as {1}'.format(x,result.inserted_id))


loop = asyncio.get_event_loop()
loop.run_until_complete(ok())

x = db.posts.insert_many(myList)
print(x.inserted_ids)
#print list of the _id values of the inserted documents: