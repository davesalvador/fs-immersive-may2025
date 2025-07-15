# Flask Blog Site:

# Create a blog site that allows the user to login or register for your site.
# When the users login or register successfully they are greeted with a page that resembles a news feed
# This news feed should have a form that prompts the user to create a post.
# Below that form would be all posts created by all the users that have added posts on the site.


from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os 

app = Flask(__name__)


app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'your_secret_key')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(150), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)

    def set_password(self, password):
        """Hash the password for storage."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Check the hashed password against the provided password."""
        return check_password_hash(self.password_hash, password)
    
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


def create_tables():
    """Create database tables."""
    with app.app_context():
        db.create_all()

def is_logged_in():
    """Check if the user is logged in."""
    return 'user_id' in session

def get_current_user():
    """Get the current logged-in user."""
    if is_logged_in():
        return User.query.get(session['user_id'])
    return None

@app.route('/')
def index():
    if is_logged_in():
        return redirect(url_for('feed'))
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        # This would search for username and email in the database
        if User.query.filter_by(username=username).first():
            flash('Username already exists.', 'danger')
            return render_template('register.html')
        
        if User.query.filter_by(email=email).first():
            flash('Email already registered.', 'danger')
            return render_template('register.html')
        
        # Create new user
        user = User(username=username, email=email)
        user.set_password(password)

        # Add user to the database
        db.session.add(user)
        # Save the changes to the database
        db.session.commit()

        # Temporary success message
        flash('Registration successful! Please log in.', 'success')
        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # get the form data
        username = request.form['username']
        password = request.form['password']

        # find the user in the database
        user = User.query.filter_by(username=username).first()

        # check if the user exists and the password is correct
        if user and user.check_password(password):
            # login successfull - create a session
            session['user_id'] = user.id
            session['username'] = user.username
            flash('Login successful!', 'success')
            return redirect(url_for('feed'))
        else:
            flash('Invalid username or password.', 'danger')

    return render_template('login.html')

@app.route('/logout')
def logout():
    """Log out the user."""
    session.clear()
    flash('You have been logged out.', 'info')
    return redirect(url_for('index'))

@app.route('/feed')
def feed():
    """Display the news feed with posts."""
    if not is_logged_in():
        flash('You need to log in to view the feed.', 'warning')
        return redirect(url_for('login'))
    
    # Get all the post from database 
    posts = Post.query.order_by(Post.timestamp.desc()).all()
    current_user = get_current_user()

    return render_template('feed.html', posts=posts, user=current_user)

@app.route('/create_post', methods=['POST'])
def create_post():
    """Create a new post."""
    if not is_logged_in():
        flash('You need to log in to create a post.', 'warning')
        return redirect(url_for('login'))
    
    # Get form data
    title = request.form['title']
    content = request.form['content']

    # Validate the input
    if not title or not content:
        flash('Title and content are required.', 'danger')
        return redirect(url_for('feed'))
    
    post = Post(
        title=title,
        content=content,
        user_id = session['user_id'] # Set the author to the current user
    )

    # Add the post to the database
    db.session.add(post)
    db.session.commit()

    flash('Post created successfully!', 'success')
    return redirect(url_for('feed'))

if __name__ == '__main__':
    with app.app_context():  
        db.create_all()
    app.run(debug=True) 