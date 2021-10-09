from transformers import pipeline
from database import connect

summarizer = pipeline("summarization")

dataPost = list(connect.db.posts.find({}))
for x in dataPost:
    if(x['summary'] == ""):
        print("Summary Text Record ID: "+str(x['idPost']))
        value = (summarizer(x['description'], max_length=200, min_length=50, do_sample=False))
        tmp  = {
            "idPost"        : x['idPost'],
            "idUser"        : x['title'],
            "title"         : x['title'],
            "viewer"        : x['viewer'],
            "idCategory"    : x['idCategory'],
            "keyword"       : x['keyword'],
            "tag"           : x['tag'],
            "description"   : x['description'],
            "content"       : x['content'],
            "summary"       : str(value[0]['summary_text']),
            "createAt"      : x['createAt'],
            "updateAt"      : x['updateAt']
        }
        connect.db.posts.update_one(x,{ "$set": tmp })