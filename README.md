Just Another Twitter Clone
=====

The kind of thing you build when you need a thing built to build other things around it.

How to Run
======

Make sure you have all the pre-requisites:

```
# install requirements
npm install -g webpack
pip install -r requirements.txt
export FLASK_APP=app.py
npm install

# create dev db
python -c "from jatc import db; db.create_all();"
```

Then in two separate windows run `webpack -w` and  `flask run`. Open localhost:5000 in a browser and voila.

License
=======
MIT
