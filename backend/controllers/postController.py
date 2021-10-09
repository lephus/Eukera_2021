from database import connect
class PostController:
    def __init__(self) -> None:
        pass

    def getAllPosts():
        dataPost = list(connect.db.posts.find({}))
        myList = []
        for x in dataPost:
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
                    "summary"       : x['summary'],
                    "createAt"      : x['createAt'],
                    "updateAt"      : x['updateAt']
                    }
            myList.append(tmp)
        return myList
    def getDetailPost(idPost):
        dataPost = connect.db.posts.find_one({"idPost": idPost})
        tmp  = {
            "idPost"        : dataPost['idPost'],
            "idUser"        : dataPost['title'],
            "title"         : dataPost['title'],
            "viewer"        : dataPost['viewer'],
            "idCategory"    : dataPost['idCategory'],
            "keyword"       : dataPost['keyword'],
            "tag"           : dataPost['tag'],
            "description"   : dataPost['description'],
            "content"       : dataPost['content'],
            "summary"       : dataPost['summary'],
            "createAt"      : dataPost['createAt'],
            "updateAt"      : dataPost['updateAt']
        }
        return tmp