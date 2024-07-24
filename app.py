from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def work():
    return render_template("about.html")

@app.route('/project')
def projects():
    return render_template("project.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")


