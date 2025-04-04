from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save_game', methods=['POST'])
def save_game():
    data = request.json
    # You can save the data to a database or file here if needed
    print("Game saved with data:", data)  # For now, just printing to console
    return jsonify({"message": "Game saved successfully!"})

if __name__ == '__main__':
    app.run(debug=True)