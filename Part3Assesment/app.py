# Part 3: Introduction to Forms and Requests
# Task:
# Create a Flask route ("/feedback") that renders a feedback form HTML page.
# The form should include input fields for:
# name
# email
# feedback message
# Implement form validation to ensure name and feedback message are not empty.
# Handle form submission using a separate route ("/submit_feedback") and display a thank you message with the submitted feedback.
# Submission Guidelines:
# Use HTML to create the feedback form.
# Use Flask’s request object to handle form submission and render the thank you page.

 
 

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')


@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    if not name or not message:
        return "Name and feedback message cannot be empty.", 400
    
    return render_template('thank_you.html', name=name, message=message)

if __name__ == '__main__':
    app.run(debug=True)