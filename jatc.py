from __future__ import absolute_import

from flask import Flask

from flask import Flask
from flask import jsonify
from flask import render_template
from flask import request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class Coqui(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(70))
    # todo - timestamp?

    def __init__(self, message):
        self.message = message

    def __repr__(self):
        return '<Coqui: {}>'.format(self.message)

@app.route('/coqui', methods=['GET', 'POST'])
def coquis():
    '''
    GET: Fetch all coquis
    POST: Create new coqui
    '''
    if request.method == 'POST':
        data = request.get_json()
        message = data.get('message', None) if data else None
        if message is None:
            return 'Please provide a message for your coqui', 400
        new_coqui = Coqui(message=message)
        db.session.add(new_coqui)
        db.session.commit()
        return jsonify(dict(id=new_coqui.id, message=new_coqui.message))
    else:
        coquis = [dict(message=c.message, id=c.id) for c in Coqui.query.all()]
        return jsonify(dict(coquis=coquis))

@app.route('/')
def index():
  return render_template('index.html')
