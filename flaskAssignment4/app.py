# For this assignment you must create a form that retrieves a user’s information.
# This form must contain the first name, last name, e-mail, home address ( this includes city, state, and zip code. For the state use a select tag)
# After you have created this form you must have all the user’s data display back on the html page.
# When displaying your data please make sure that it is organized and clean.

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def display_form():
    states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',]
    return render_template('form.html', states=states)

@app.route('/submit', methods=['POST'])
def handle_form():
    user_data = {
        "first_name": request.form.get("first_name"),
        "last_name": request.form.get("last_name"),
        "email": request.form.get("email"),
        "city": request.form.get("city"),
        "state": request.form.get("state"),
        "zip_code": request.form.get("zip_code")
    }
    return render_template("result.html", user=user_data)


if __name__ == '__main__':
    app.run(debug=True)