import pandas
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    filename = 'static/logcsv.csv'

    # to read the csv file using the pandas library
    data = pandas.read_csv(filename, header=0)

    myData = data.values
    print(myData)
    return render_template('home_view_attendance.html',len = len(myData), myData=myData)


if __name__ == '__main__':
    app.run(threaded=True, host="localhost", port=5005)
