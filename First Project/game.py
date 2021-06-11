from flask import Flask ,render_template

game = Flask(__name__)

@game.route("/" ,methods=['POST','GET'])
def login():
    return render_template("login.html")

@game.route("/singup" ,methods=['POST','GET'])
def singup():
    return render_template("singup.html")

@game.route("/game" ,methods=['POST','GET'])
def games():
    return render_template("game.html")

if __name__ == '__main__':
    game.run(debug = True , port= 5000)