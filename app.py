from flask import Flask, jsonify

app = Flask(__name__)

# Define a route for the API endpoint
@app.route('/api/grimaldo', methods=['GET'])
def get_data2():
    return jsonify({"message": "Hello from your dad!"})

# Define a route for the info endpoint
@app.route('/api/info', methods=['GET'])
def get_info():
    return jsonify({"info": "This is some additional info from the backend."})

# Define a route for the data endpoint
@app.route('/api/data', methods=['GET'])
def get_data():
    items = [
        {"id": 1, "name": "Item 1", "description": "This is item 1"},
        {"id": 2, "name": "Item 2", "description": "This is item 2"},
        {"id": 3, "name": "Item 3", "description": "This is item 3"}
    ]
    return jsonify({"items": items})

if __name__ == '__main__':
    app.run(debug=True)
