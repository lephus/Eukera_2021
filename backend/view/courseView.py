from controllers import courseController
from flask import jsonify
from models.respont import Respont
class CourseView:
    def __init__(self) -> None:
        pass
    def getAllCourse():
        res = courseController.CourseController.getAllCourse()
        if(len(res) == 0):
            return jsonify(Respont(False, "", "Not found data").serialize()), 404
        return jsonify(Respont(True, res, "Successfully").serialize()), 200
    
    def getDetailCourse(id):
        res = courseController.CourseController.getDetailCourse(id)
        if(res == None):
            return jsonify(Respont(False, "", "Not found data").serialize()), 404
        return jsonify(Respont(True, res, "Successfully").serialize()), 200