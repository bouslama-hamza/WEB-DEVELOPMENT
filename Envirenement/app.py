from flask import Flask ,render_template
app = Flask(__name__)
app.config["SECRET_KEY"] = 'UNS654SD22W81WD2F1S4E3FF1SDF'
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
    app.run(debug=True , port= 8000)