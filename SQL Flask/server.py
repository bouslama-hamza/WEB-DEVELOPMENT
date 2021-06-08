from flask import Flask ,render_template,request , url_for,session,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config["SECRET_KEY"] = 'MJHAGSDYUHBKASBD3654684ASD'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class Product(db.Model):

    id = db.Column(db.Integer , primary_key = True)
    image = db.Column(db.String(20),nullable = False)
    titre = db.Column(db.String(20),nullable = False)
    prix = db.Column(db.Float , nullable = False)
    specs = db.Column(db.String(60) , nullable = False)
    description = db.Column(db.Text , nullable = False)
    

class Message(db.Model):

    id = db.Column(db.Integer , primary_key = True)
    nom = db.Column(db.String(20), nullable = False)
    email = db.Column(db.String(20), nullable = True)
    mdate = db.Column(db.DateTime , nullable = False , default = datetime.utcnow())
    rate = db.Column(db.Integer)
    message = db.Column(db.Text , nullable = False)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/produit")
def produit():
    return render_template("produit.html")
test = []
@app.route("/contact", methods=['POST','GET'])
def contact():
    if request.method == 'POST':
        for key in list(session.keys()):
            session.pop(key)
        session["email"] = request.form.get("Email")
        session["name"] = request.form.get("name")
        session["message"] = request.form.get("message")
        session["mdate"] = datetime.utcnow()
        message = Message(nom = session["name"] , email = session["email"] , message = session["message"])
        db.session.add(message)
        db.session.commit()
        return redirect(url_for('contact'))
    return render_template("contact.html" , test = session)
    

if __name__ == '__main__':
    app.run(debug=True)