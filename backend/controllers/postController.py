from database import connect
class PostController:
    def __init__(self) -> None:
        pass

    def getAllPosts():
        dataPost = list(connect.db.tb_posts.find({}))
        myList = []
        for x in dataPost:
            evaluates01  = connect.db.tb_evaluates.count({"idPost":x['idPost'],"numberStar":"1"})
            evaluates02  = connect.db.tb_evaluates.count({"idPost":x['idPost'],"numberStar":"2"})
            evaluates03  = connect.db.tb_evaluates.count({"idPost":x['idPost'],"numberStar":"3"})
            evaluates04  = connect.db.tb_evaluates.count({"idPost":x['idPost'],"numberStar":"4"})
            evaluates05  = connect.db.tb_evaluates.count({"idPost":x['idPost'],"numberStar":"5"})
            numberStar   = 0
            if evaluates01+evaluates02+evaluates03+evaluates04+evaluates05 != 0:
                numberStar   = (evaluates01 * 1 + evaluates02 * 2 + evaluates03 * 3 + evaluates04 * 4 + evaluates05 * 5) / (evaluates01+evaluates02+evaluates03+evaluates04+evaluates05)
            author = connect.db.tb_authors.find_one({"idAuthor": x['idAuthor']})
            print(author)
            nameAuthor = author['fullName']
            tmp  = {
                    "idPost"        : x['idPost'],
                    "idAuthor"      : x['idAuthor'],
                    "nameAuthor"    : nameAuthor,
                    "title"         : x['title'],
                    "viewer"        : x['viewer'],
                    "idCategory"    : x['idCategory'],
                    "keyword"       : x['keyword'],
                    "tag"           : x['tag'],
                    "thumbmail"     : x['thumbnail'],
                    "numberStar"    : numberStar,
                    "description"   : x['description'],
                    "summary"       : x['summary'],
                    "createAt"      : x['createAt'],
                    "updateAt"      : x['updateAt']
                    }
            myList.append(tmp)
        return myList
    def getDetailPost(idPost):
        dataPost = connect.db.tb_posts.find_one({"idPost": idPost})
        evaluates01  = connect.db.tb_evaluates.count({"idPost":idPost,"numberStar":"1"})
        evaluates02  = connect.db.tb_evaluates.count({"idPost":idPost,"numberStar":"2"})
        evaluates03  = connect.db.tb_evaluates.count({"idPost":idPost,"numberStar":"3"})
        evaluates04  = connect.db.tb_evaluates.count({"idPost":idPost,"numberStar":"4"})
        evaluates05  = connect.db.tb_evaluates.count({"idPost":idPost,"numberStar":"5"})
        numberStar   = 0
        if evaluates01+evaluates02+evaluates03+evaluates04+evaluates05 != 0:
            numberStar   = (evaluates01 * 1 + evaluates02 * 2 + evaluates03 * 3 + evaluates04 * 4 + evaluates05 * 5) / (evaluates01+evaluates02+evaluates03+evaluates04+evaluates05)
            numberStar   = numberStar
        author = connect.db.tb_authors.find_one({"idAuthor": dataPost['idAuthor']})
        nameAuthor = author['fullName']
        tmp  = {
            "idPost"        : dataPost['idPost'],
            "idAuthor"      : dataPost['idAuthor'],
            "nameAuthor"    : nameAuthor,
            "title"         : dataPost['title'],
            "viewer"        : dataPost['viewer'],
            "idCategory"    : dataPost['idCategory'],
            "thumbmail"     : dataPost['thumbnail'],
            "keyword"       : dataPost['keyword'],
            "tag"           : dataPost['tag'],
            "numberStar"    : numberStar,
            "description"   : dataPost['description'],
            "content"       : dataPost['content'],
            "summary"       : dataPost['summary'],
            "createAt"      : dataPost['createAt'],
            "updateAt"      : dataPost['updateAt']
        }
        return tmp