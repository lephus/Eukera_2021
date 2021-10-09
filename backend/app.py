from flask_caching import Cache
from flask_cors import CORS
from view import postView
from view import courseView
from flask import Flask


app = Flask(__name__)
config = {
    "DEBUG": False,
    "CACHE_TYPE": "SimpleCache",
    "CACHE_DEFAULT_TIMEOUT": 200
}

app.config.from_mapping(config)
cache = Cache(app)


CORS(app)
@app.route("/")
@cache.cached(timeout=50)
def wellcome():
    return "WELLCOME"

# POST 
@app.route("/api/post/get-all")
def postGetAll():
    return postView.PostView.getAllPosts()

# DETAIL POST
@app.route("/api/post/get-detail/<int:idPost>")
def postGetDetail(idPost):
    return postView.PostView.getDetailPost(idPost)

# COURSE
@app.route("/api/course/get-all")
def courseGetAll():
    return courseView.CourseView.getAllCourse()

# DETAIL COURSE
@app.route("/api/course/get-detail/<int:idCourse>")
def courseGetDetail(idCourse):
    return courseView.CourseView.getDetailCourse(idCourse)

# 