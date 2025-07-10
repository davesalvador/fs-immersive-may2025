# Create an app that takes in your first name, last name, username, e-mail and a password via form submission.
# Save that data to your database
# This app must then redirect to a new page
# Display your form data on this new page.



from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)


# Tell sqlalchemy to use sqlite and store the data in database.db alonside app.py
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

# Initialize the SQLAlchemy object with the Flask app
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(200), nullable=False)


@app.route('/')
def form():

    return render_template('form.html')


@app.route('/submit', methods=['POST'])
def submit():

    """Handle form submission and save data to the database. 
    1. Pulls data from the form.
    2. It will create a new user instance with the form data.
    3. Adds and commits the new user to the database.
    4. Redirects to the display page to show the submitted data.
    """

    data = request.form
    user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        email=data['email'],
        password=data['password']
    )

    db.session.add(user)
    db.session.commit()

    return redirect(url_for('success', user_id=user.id))


@app.route('/success/<int:user_id>')
def success(user_id):

    """Display the submitted data on a new page.
    1. Retrieves the user from the database using the user_id.
    2. Renders a template to display the user's data.
    """
    user = User.query.get_or_404(user_id)
    return render_template('success.html', user=user)


if __name__ == '__main__':
    # Create the database tables if they don't exist
    with app.app_context():
        db.create_all()
        print("DB file:", os.path.abspath('database.db'))

    app.run(debug=True)