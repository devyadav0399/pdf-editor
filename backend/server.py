from crypt import methods
from distutils.log import debug
from urllib import response
from wsgiref.util import request_uri
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
import pdfplumber
import json

app = Flask(__name__)

app.config['MONGO_URI']="mongodb+srv://admin:admin@cluster0.hp8aivv.mongodb.net/pdfs"

mongo = PyMongo(app)

def fileToJson(file):
  pdf = pdfplumber.open(file)
  page = pdf.pages[0]
  tables = page.extract_tables()
  table = tables[0]
  keys = table[0]
  values = table[1:]
  finalData = []
  for j in range(0, len(values)):
    json_data = {}
    for i in range(0, len(keys)):
      json_data[str(keys[i])]=values[j][i]
    finalData.append(json_data)

  return (finalData)

@app.route('/')
def home():
  return "home"

@app.route('/data')
def get_data():
  data = mongo.db.pdfs.find()
  resp = dumps(data)
  return resp

@app.route('/data/<id>')
def data(id):
  data = mongo.db.pdfs.find_one({'_id':ObjectId(id)})
  resp = dumps(data)
  return resp

@app.route('/api/upload', methods = ['POST'])
def upload_file():
    file = request.files['file']
    if file and request.method == 'POST':
      id = mongo.db.pdfs.insert_many(fileToJson(file))
      resp = jsonify("File Read and Data added")
      resp.status_code = 200
      return resp

@app.route('/api/delete', methods = ['DELETE'])
def delete_all():
  result = mongo.db.pdfs.delete_many( { } );
  resp = jsonify("Deleted")
  resp.status_code = 200
  return resp
    

@app.errorhandler(404)
def not_found(error=None):
  message = {
    'status':404,
    'message':'Not Found' + request.url
  }
  resp = jsonify(message)
  resp.status_code = 404
  return resp


if __name__ == "__main__":
  app.run(debug=True)