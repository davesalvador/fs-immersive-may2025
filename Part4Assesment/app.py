# Part 4: Flask Session and Data Handling
# Task:
# Implement a Flask route ("/login") that renders a login form HTML page.
# Upon successful login (username: "student", password: "flask123"), store the user's login status in a Flask session.
# Create a route ("/dashboard") that checks the user’s login status using the Flask session and:
# If logged in, renders a dashboard page with a welcome message.
# If not logged in, redirects the user to the login page.
# Submission Guidelines:
# Use Flask session to store and manage user login status.
# Implement form validation for the login form.
# Ensure only authenticated users can access the dashboard.

from flask import Flask, render_template, request, redirect, session, url_for

app = Flask(__name__)


app.secret_key = "TryToGuessThisSecretKey"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if username == 'student' and password == 'flask123':
            session['logged_in'] = True
            return redirect(url_for('dashboard'))
        else:
            return "Invalid credentials. Please try again.", 401
        
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():

    if not session.get('logged_in'):
        return redirect(url_for('login'))
    
    return render_template('dashboard.html')


@app.route('/logout')
def logout():

    session.clear()
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)