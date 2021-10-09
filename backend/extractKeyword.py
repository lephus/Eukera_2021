from gensim.summarization import keywords
from database import connect
from apscheduler.schedulers.background import BackgroundScheduler

class Extractkeyword:
    def __init__(self) -> None:
        pass
    def Extract():
        dataPost = list(connect.db.posts.find({}))
        for x in dataPost:
            if(x['keyword'] == ""):
                print("Extract Keyword Text Record ID: "+str(x['idPost']))
                value = (keywords(x['description'], words=10))
                tmp  = {
                    "idPost"        : x['idPost'],
                    "idUser"        : x['title'],
                    "title"         : x['title'],
                    "viewer"        : x['viewer'],
                    "idCategory"    : x['idCategory'],
                    "keyword"       : str(value),
                    "tag"           : x['tag'],
                    "description"   : x['description'],
                    "content"       : x['content'],
                    "summary"       : x['summary'],
                    "createAt"      : x['createAt'],
                    "updateAt"      : x['updateAt']
                }
                connect.db.posts.update_one(x,{ "$set": tmp })

scheduler = BackgroundScheduler()
scheduler.add_job(func=Extractkeyword().Extract, trigger='interval', minutes=15)
scheduler.start()