from controllers import postController
from flask import jsonify
from models.respont import Respont
class PostView:
    def __init__(self) -> None:
        pass
    def getAllPosts():
        res = postController.PostController.getAllPosts()
        if(len(res) == 0):
            return jsonify(Respont(False, "", "Not found data").serialize()), 404
        return jsonify(Respont(True, res, "Successfully").serialize()), 200
    
    def getDetailPost(idPost):
        res = postController.PostController.getDetailPost(idPost)
        if(res == None):
            return jsonify(Respont(False, "", "Not found data").serialize()), 404
        return jsonify(Respont(True, res, "Successfully").serialize()), 200
    
    def suggestions(idPost):
        res = postController.PostController.Suggestions(idPost)
        return jsonify(Respont(True, res, "Successfully").serialize()), 200
        