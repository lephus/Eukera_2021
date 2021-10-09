class Respont:
    def __init__(self, status, data, message):
        self.status = status
        self.data = data
        self.message = message
    
    def serialize(self):
        return {
        "status"    :self.status,
        "data"      :self.data,
        "message"   :self.message
        }