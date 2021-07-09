from os import devnull
from flask import Flask
from flask.templating import render_template 
app = Flask(__name__)
room = [ 
    {
        'picture' : 'img1.jpg',
        'type' : 'Luxury Rooms',
        'features' : ['Room Of Two', 'So Warm'],
        'dicribe' : 'You can describe anything about this room here',
        'price' : '$99.00',
    }
]
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/room")
def rooms():
    return render_template("room.html", room = room)


if __name__ == '__main__':
    app.run(debug=True)