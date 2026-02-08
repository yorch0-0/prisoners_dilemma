import json
import os
from flask_cors import CORS
from flask import (Flask, Response, request)
import qis

def create_app() -> Flask:
    app = Flask(__name__)
    CORS(app)  
    RESPONSE_HEADERS = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }    
    
    @app.route('/years2pay', methods=['POST'])
    def calc():
        data = request.get_json()
        strategy_pA = data.get('strategy_pA', None)
        strategy_pB = data.get('strategy_pB', None)
        w = data.get('w', None)
        
        if strategy_pA is None or strategy_pB is None or w is None:
            return Response(json.dumps({ 'error': 'Not enough data' }), status=400, headers=RESPONSE_HEADERS)
        
        # Use float to allow for quantum strategies like -1
        valA, valB = qis.get_years_to_pay(float(strategy_pA), float(strategy_pB), float(w))
        return Response(json.dumps({ 'years_playerA': valA, 'years_playerB': valB }), status=200, headers=RESPONSE_HEADERS)
        
    return app

if __name__ == '__main__':
    # Standard for Render/Heroku: use the PORT environment variable
    port = int(os.environ.get('PORT', 5000))
    create_app().run(debug=True, host='0.0.0.0', port=port)