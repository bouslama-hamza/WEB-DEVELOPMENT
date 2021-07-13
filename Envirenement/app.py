from flask import Flask ,render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
db = SQLAlchemy(app)
app.config["SECRET_KEY"] = 'UNS654SD22W81WD2F1S4E3FF1SDF'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///test.db'
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/service")
def service():
    return render_template("services.html")

if __name__ == '__main__':
    app.run(debug=True , port= 5021)