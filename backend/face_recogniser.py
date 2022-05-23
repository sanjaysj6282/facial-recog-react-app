from flask import Flask, render_template, Response
import os
import cv2
import numpy as np
import keyboard
from sklearn.neighbors import KNeighborsClassifier
from datetime import datetime, date
import csv

data = np.load("./static/face_data.npy")

print(data.shape, data.dtype)

X = data[:, 1:].astype(int)
Y = data[:, 0]
model = KNeighborsClassifier()
model.fit(X, Y)


app = Flask(__name__)

camera = cv2.VideoCapture(0)

detector = cv2.CascadeClassifier("./static/haarcascade_frontalface_default.xml")

file = open('./static/logtext.txt', 'w')
filecsv = open('./static/logcsv.csv', 'w')
writer = csv.writer(filecsv)
header = ['Name', 'Time', 'Date']
writer.writerow(header)

result = []


def gen_frames():
    while True:
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            faces = detector.detectMultiScale(frame)

            for face in faces:
                x, y, w, h = face

                cut = frame[y:y + h, x:x + w]

                fix = cv2.resize(cut, (100, 100))
                gray = cv2.cvtColor(fix, cv2.COLOR_BGR2GRAY)

                out = model.predict([gray.flatten()])

                cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

                # Print Name on top of rectangle
                cv2.putText(frame, str(out[0]), (x, y - 10), cv2.FONT_HERSHEY_COMPLEX, 2, (255, 0, 0), 2)

                ans = out[0]

                if not (ans in result):
                    result.append(ans)

                    now = datetime.now()
                    today = date.today()
                    current_time = now.strftime("%H:%M:%S")
                    print("Time = ", current_time)
                    # Textual month, day and year
                    d2 = today.strftime("%B %d, %Y")
                    print("Date = ", d2)

                    row = [ans, current_time, d2]
                    print(row)
                    writer.writerow(row)

                    file.write(ans)
                    file.write('    ')
                    file.write(current_time)
                    file.write('   ')
                    file.write(d2)
                    file.write('\n')

            key = cv2.waitKey(1)
            if keyboard.is_pressed('q'):
                file.close()
                filecsv.close()
                break

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('home_face_recogniser.html')


@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(threaded=True, host="192.168.241.29", port=5004)
