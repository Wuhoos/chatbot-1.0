from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/upload_file', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        upload_dir = 'uploads'
        os.makedirs(upload_dir, exist_ok=True)

        file.save(os.path.join(upload_dir, file.filename))

        return jsonify({'message': 'File uploaded successfully'})

if __name__==  '__main__':
    app.run()