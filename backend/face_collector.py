
from flask import Flask

app = Flask(__name__)

@app.route("/")
def facestart():
    return "<p>Hello, World!</p>"

if __name__=="main":
    app.run(debug=True)

