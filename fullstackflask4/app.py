from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)

class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    created_at = db.Column(db.String(50), default=datetime.now().strftime('%Y-%m-%d %H:%M:%S'))


    def __repr__(self):
        return f'<User {self.full_name}>'
    
# users
# users/1
# users/new
# users/create
# users/1/edit
# users/1/update
# users/1/delete

@app.route('/')
def home():
    return redirect('/users')

@app.route('/users')
def users():

    all_users = User.query.all()
    return render_template('users.html', users=all_users)

@app.route('/users/<int:id>')
def show(id):

    user = User.query.get(id)
    return render_template('show.html', user=user)

@app.route('/users/new')
def new():
    return render_template('new.html')

@app.route('/users/create', methods=['POST'])
def create():

    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    email = request.form.get('email')

    new_user = User(
        full_name=f"{first_name} {last_name}",
        email=email,
        created_at=datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    )

    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:id>/edit')
def edit(id):

    user = User.query.get(id)

    names = user.full_name.split(' ', 1)
    user.first_name = names[0]
    user.last_name = names[1] if len(names) > 1 else ''
    return render_template('edit.html', user=user)

@app.route('/users/<int:id>/update', methods=['POST'])
def update(id):

    user = User.query.get(id)

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    user.full_name = f"{first_name} {last_name}"
    user.email = request.form['email']

    db.session.commit()

    return redirect(f'/users/{id}')

@app.route('/users/<int:id>/destroy',methods=['POST'])
def destroy(id):

    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return redirect('/users')

if __name__ == '__main__':
    app.run(debug=True)



