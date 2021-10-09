
class PostModel:
    def __init__(self, idPost, idUser, title, viewer, idCategory, keyword, tag, description, content, summary, createAt, updateAt):
        self.idPost      = idPost
        self.idUser  = idUser
        self.title           = title
        self.viewer        = viewer
        self.idCategory    = idCategory
        self.keyword          = keyword
        self.tag      = tag
        self.description          = description 
        self.content = content
        self.summary = summary
        self.createAt = createAt
        self.updateAt = updateAt
        
    def serialize(self):
        return {
        "idPost"      :self.idPost,
        "idUser"  :self.idUser,
        "title"          :self.title,
        "viewer"        :self.viewer,
        "idCategory"   :self.idCategory,
        "keyword"          :self.keyword,
        "tag"      :self.tag,
        "description"          :self.description ,
        "content" :self.content,
        "summary" :self.summary,
        "createAt" :self.createAt,
        "updateAt" :self.updateAt
        }
