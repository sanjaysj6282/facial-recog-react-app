from flask import Flask, request, send_file, render_template
import os

app = Flask(__name__)


@app.route('/')
def get_csv():
    csv_dir = "./static"
    csv_file = "logcsv.csv"
    csv_path = os.path.join(csv_dir, csv_file)

    if not os.path.isfile(csv_path):
        return "ERROR: file %s was not found on the server" % csv_file
    # Send the file back to the client
    return send_file(csv_path, as_attachment=True, attachment_filename=csv_file)


# @app.route('/')
# def myapp():
#     # message = "To use this app: %s/get_csv?month=value" % request.base_url
#     return render_template('downloads.html')