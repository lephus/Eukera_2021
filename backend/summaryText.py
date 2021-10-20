from transformers import pipeline
from database import connect

summarizer = pipeline("summarization")

dataPost = list(connect.db.tb_posts.find({}))
for x in dataPost:
    if(x['summary'] == ""):
        print("Summary Text Record ID: "+str(x['idPost']))
        value = ""
        print(len(x['description']))
        if( len(x['description']) <= 1000):
            res         = (summarizer(x['description'], max_length=200, min_length=50, do_sample=False))
            value       += res[0]['summary_text']
        else: 
            dataInput   = x['description']
            res         = (summarizer(dataInput[0:1000], max_length=200, min_length=50, do_sample=False))
            value       += res[0]['summary_text']
            c           = 1000 - len(dataInput)
            res         = (summarizer(dataInput[c], max_length=200, min_length=50, do_sample=False))
            value       += res[0]['summary_text']
        tmp  = {
            "idPost"        : x['idPost'],
            "idAuthor"      : x['idAuthor'],
            "title"         : x['title'],
            "viewer"        : x['viewer'],
            "idCategory"    : x['idCategory'],
            "keyword"       : x['keyword'],
            "tag"           : x['tag'],
            "description"   : x['description'],
            "content"       : x['content'],
            "summary"       : str(value),
            "createAt"      : x['createAt'],
            "updateAt"      : x['updateAt'],
            "thumbnail"     : x['thumbnail'],
        }
        connect.db.tb_posts.update_one(x,{ "$set": tmp })
