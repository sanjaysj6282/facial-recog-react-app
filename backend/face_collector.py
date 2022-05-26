from flask import Flask, render_template, request, jsonify, redirect, url_for, session, make_response, Response
import os
import cv2
import numpy as np
import keyboard

app = Flask(__name__)

camera = cv2.VideoCapture(0)

detector = cv2.CascadeClassifier("./static/haarcascade_frontalface_default.xml")

name = input("Enter your name : ")
# name = ' '
frames = []
outputs = []


def gen_frames():
    while True:
        success, frame = camera.read()  # read the camera frame
        if success:
            faces = detector.detectMultiScale(frame)

            for face in faces:
                x, y, w, h = face

                cut = frame[y:y + h, x:x + w]

                fix = cv2.resize(cut, (100, 100))
                gray = cv2.cvtColor(fix, cv2.COLOR_BGR2GRAY)

            key = cv2.waitKey(15)
            # ch = input("Please enter a q/c:")
            if keyboard.is_pressed('q'):
                print('You Pressed Q and its written in face_data.npy')
                x = np.array(frames)
                y = np.array(outputs)

                data = np.hstack([y, x])
                f_name = "face_data.npy"

                path = './static/'+f_name
                print(path)
                if os.path.exists(path):
                    old = np.load(path)
                    print(old.shape)
                    data = np.vstack([old, data])

                np.save(os.path.join('./static', f_name), data)
                # np.save(os.path.join('Check', 'train_set'), training)
                # np.save(f_name, data)

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
    return render_template('home_face_collector.html')


# @app.route('/video_feed/<Names>')
# def video_feed(Names):
@app.route('/video_feed')
def video_feed():
    # name = Names
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(threaded=True, host="localhost", port=5003)
    # app.run(threaded=True, host="192.168.1.67", port=5003)
