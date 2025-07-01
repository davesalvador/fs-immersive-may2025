# Create a program that builds off of Flask Assignment 4  program.
# This program should utilize “SESSION” so that after the user enters their information and the information is displayed, the user should be able to refresh the page and still see their information.\


# from flask import Flask, render_template, request, session, redirect, url_for

# app = Flask(__name__)
# app.secret_key = "blabla"



# @app.route('/', methods=['GET'])
# def display_form():
#     states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California']
#     return render_template('form.html', states=states)

# @app.route('/submit', methods=['POST'])
# def handle_form():
#     # Save form values to session
#     session["first_name"] = request.form.get("first_name")
#     session["last_name"] = request.form.get("last_name")
#     session["email"] = request.form.get("email")
#     session["city"] = request.form.get("city")
#     session["state"] = request.form.get("state")
#     session["zip_code"] = request.form.get("zip_code")

#     return redirect(url_for("show_result"))

# @app.route('/result', methods=['GET'])
# def show_result():
#     if "first_name" not in session:
#         return redirect(url_for("display_form"))

#     user = {
#         "first_name": session.get("first_name"),
#         "last_name": session.get("last_name"),
#         "email": session.get("email"),
#         "city": session.get("city"),
#         "state": session.get("state"),
#         "zip_code": session.get("zip_code")
#     }
#     return render_template("result.html", user=user)


# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, render_template, request, session, redirect, url_for

# Create a new Flask web application instance
app = Flask(__name__)

# A secret key is required for Flask to use sessions.
# This should be a random string in production.
app.secret_key = "blabla"

# This is the homepage route that shows the user form
@app.route('/', methods=['GET'])
def display_form():
    # Create a list of states to populate the dropdown in the form
    states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California']
    
    # Render the form.html template and send the list of states to it
    return render_template('form.html', states=states)

# This route handles the form submission using POST method
@app.route('/submit', methods=['POST'])
def handle_form():
    # Collect form input data and store it in Flask's session object.
    # This keeps the data even after refreshing or navigating between pages.
    session["first_name"] = request.form.get("first_name")
    session["last_name"] = request.form.get("last_name")
    session["email"] = request.form.get("email")
    session["city"] = request.form.get("city")
    session["state"] = request.form.get("state")
    session["zip_code"] = request.form.get("zip_code")

    # After saving the data, redirect the user to the result page
    return redirect(url_for("show_result"))

# This route displays the submitted user information
@app.route('/result', methods=['GET'])
def show_result():
    # If no data is found in the session, redirect user back to the form page
    if "first_name" not in session:
        return redirect(url_for("display_form"))

    # Retrieve the data from session and put it into a dictionary called 'user'
    user = {
        "first_name": session.get("first_name"),
        "last_name": session.get("last_name"),
        "email": session.get("email"),
        "city": session.get("city"),
        "state": session.get("state"),
        "zip_code": session.get("zip_code")
    }

    # Pass the user data to the result.html template for display
    return render_template("result.html", user=user)

# Run the Flask app if this script is executed directly
if __name__ == '__main__':
    # Enable debug mode for development (shows errors in the browser)
    app.run(debug=True)
