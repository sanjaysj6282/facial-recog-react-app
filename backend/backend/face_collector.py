from flask import Flask, render_template, request, jsonify, redirect, url_for, session, make_response, Response
import os
import cv2
import numpy as np
import keyboard

APP_ROOT = os.path.dirname(os.path.abspath(__file__))  # refers to application_top

app = Flask(__name__)

camera = cv2.VideoCapture(0)

detector = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

name = input("Enter your name : ")

frames = []
outputs = []


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

            key = cv2.waitKey(15)
            # ch = input("Please enter a q/c:")
            if keyboard.is_pressed('q'):
                print('You Pressed Q and its written in face_dat.npy')
                x = np.array(frames)
                y = np.array(outputs)

                data = np.hstack([y, x])

                f_name = "face_data"

                if os.path.exists(f_name):
                    old = np.load(f_name)
                    data = np.vstack([old, data])

                np.save(f_name, data)

            if keyboard.is_pressed('c'):
                frames.append(gray.flatten())
                outputs.append([name])
                print('You Pressed C')

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(threaded=True, host="192.168.1.50", port=5003)
