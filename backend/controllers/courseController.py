from database import connect
myList = []
class CourseController:
    def __init__(self) -> None:
        pass

    def getAllCourse():
        dataCourse = list(connect.db.tb_courses.find())
        myList.clear()
        for x in dataCourse:
            author = connect.db.tb_authors.find_one({"idAuthor": x['idAuthor']})
            nameAuthor = author['fullName']
            dataCourseVideo = connect.db.tb_videos.count({"idCourse" : x['idCourse']})
            dataChapter = connect.db.tb_chapters.count({"idCourse" : x['idCourse']})
            evaluates01  = connect.db.tb_evaluates.count({"idCourse":x['idCourse'],"numberStar":"1"})
            evaluates02  = connect.db.tb_evaluates.count({"idCourse":x['idCourse'],"numberStar":"2"})
            evaluates03  = connect.db.tb_evaluates.count({"idCourse":x['idCourse'],"numberStar":"3"})
            evaluates04  = connect.db.tb_evaluates.count({"idCourse":x['idCourse'],"numberStar":"4"})
            evaluates05  = connect.db.tb_evaluates.count({"idCourse":x['idCourse'],"numberStar":"5"})
            numberStar  = 0
            if evaluates01+evaluates02+evaluates03+evaluates04+evaluates05 != 0:
                numberStar   = (evaluates01 * 1 + evaluates02 * 2 + evaluates03 * 3 + evaluates04 * 4 + evaluates05 * 5) / (evaluates01+evaluates02+evaluates03+evaluates04+evaluates05)
            
            tmp  = {
                    "idCourse"      : x['idCourse'],
                    "idAuthor"      : x['idAuthor'],
                    "nameAuthor"    : nameAuthor,
                    "title"         : x['title'],
                    "viewer"        : x['viewer'],
                    "keyword"       : x['keyword'],
                    "tag"           : x['tag'],
                    "thumbnail"     : x['thumbnail'],
                    "numberChapter" : dataChapter,
                    "numberVideo"   : dataCourseVideo,
                    "numberStar"    : numberStar,
                    "description"   : x['description'],
                    "createAt"      : x['createAt'],
                    "updateAt"      : x['updateAt']
                    }
            myList.append(tmp)
        return myList

    def getDetailCourse(idCourse):
        dataCourse = connect.db.tb_courses.find_one({"idCourse": idCourse})
        evaluates01  = connect.db.tb_evaluates.count({"idCourse":idCourse,"numberStar":"1"})
        evaluates02  = connect.db.tb_evaluates.count({"idCourse":idCourse,"numberStar":"2"})
        evaluates03  = connect.db.tb_evaluates.count({"idCourse":idCourse,"numberStar":"3"})
        evaluates04  = connect.db.tb_evaluates.count({"idCourse":idCourse,"numberStar":"4"})
        evaluates05  = connect.db.tb_evaluates.count({"idCourse":idCourse,"numberStar":"5"})
        author = connect.db.tb_authors.find_one({"idAuthor": dataCourse['idAuthor']})
        nameAuthor = author['fullName']
        numberStar = 0
        if evaluates01+evaluates02+evaluates03+evaluates04+evaluates05 != 0:
            numberStar   = (evaluates01 * 1 + evaluates02 * 2 + evaluates03 * 3 + evaluates04 * 4 + evaluates05 * 5) / (evaluates01+evaluates02+evaluates03+evaluates04+evaluates05)
         
        dataCourseVideo = list(connect.db.tb_videos.find({"idCourse" : str(idCourse)}))
        dataChapter = list(connect.db.tb_chapters.find({"idCourse" : str(idCourse)}))
        lstChapter = []
        for y in dataChapter:
            lst = []
            for x in dataCourseVideo:
                if str(x['idChapter']) == str(y['idChapter']):
                    video  = {
                        "idVideo": x['idVideo'],
                        "idChapter": x['idChapter'],
                        "idCourse": x['idCourse'],
                        "title": x['title'],
                        "url": x['url'],
                        "description":x['description'],
                        "createAt": x['createAt'],
                        "updateAt": x['updateAt']
                        }
                    lst.append(video)
            chapter = {
                "idChapter": y['idChapter'],
                "idCourse": y['idCourse'],
                "index": y['index'],
                "title": y['title'],
                "description": y['description'],
                "video": lst,
                "createAt":  y['createAt'],
                "updateAt": y['updateAt']
            }
            lstChapter.append(chapter)
        
        tmp  = {
            "idCourse"      : idCourse,
            "idAuthor"      : dataCourse['idAuthor'],
            "nameAuthor"    : nameAuthor,
            "title"         : dataCourse['title'],
            "viewer"        : dataCourse['viewer'],
            "keyword"       : dataCourse['keyword'],
            "tag"           : dataCourse['tag'],
            "thumbnail"     : dataCourse['thumbnail'],
            "description"   : dataCourse['description'],
            "numberStar"    : numberStar,
            "data"          : lstChapter,
            "createAt"      : dataCourse['createAt'],
            "updateAt"      : dataCourse['updateAt']
            }
        return tmp
