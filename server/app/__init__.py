import json
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
        
        if not strategy_pA or not strategy_pB or w == None:
            return Response(json.dumps({ 'error': 'Not enough data' }), status=400, headers=RESPONSE_HEADERS)
        
        valA, valB = qis.get_years_to_pay(int(strategy_pA), int(strategy_pB), float(w))
        return Response(json.dumps({ 'years_playerA': valA, 'years_playerB': valB }), status=200, headers=RESPONSE_HEADERS)
        
    return app

if __name__ == '__main__':
    create_app().run(debug=True, host='0.0.0.0')