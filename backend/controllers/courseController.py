from database import connect
myList = []
class CourseController:
    def __init__(self) -> None:
        pass

    def getAllCourse():
        dataCourse = list(connect.db.courses.find())
        myList.clear()
        for x in dataCourse:
            dataCourseVideo = connect.db.videos.count({"idCourse" : x['idCourse']})
            dataChapter = connect.db.chapters.count({"idCourse" : x['idCourse']})
            tmp  = {
                    "idCourse"        : x['idCourse'],
                    "idUser"        : x['title'],
                    "title"         : x['title'],
                    "viewer"        : x['viewer'],
                    "idCategory"    : x['idCategory'],
                    "keyword"       : x['keyword'],
                    "tag"           : x['tag'],
                    "numberChapter" : dataChapter,
                    "numberVideo"   : dataCourseVideo,
                    "description"   : x['description'],
                    "createAt"      : x['createAt'],
                    "updateAt"      : x['updateAt']
                    }
            myList.append(tmp)
        return myList

    def getDetailCourse(idCourse):
        dataCourse = connect.db.courses.find_one({"idCourse": idCourse})
        dataCourseVideo = list(connect.db.videos.find({"idCourse" : idCourse}))
        dataChapter = list(connect.db.chapters.find({"idCourse" : idCourse}).sort('index'))
        lstChapter = []
        for y in dataChapter:
            lst = []
            for x in dataCourseVideo:
                if x['idChapter'] == y['idChapter']:
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
            "idCourse"      : dataCourse['idCourse'],
            "idUser"        : dataCourse['idUser'],
            "title"         : dataCourse['title'],
            "viewer"        : dataCourse['viewer'],
            "idCategory"    : dataCourse['idCategory'],
            "keyword"       : dataCourse['keyword'],
            "tag"           : dataCourse['tag'],
            "description"   : dataCourse['description'],
            "data"          : lstChapter,
            "createAt"      : dataCourse['createAt'],
            "updateAt"      : dataCourse['updateAt']
            }
        return tmp
