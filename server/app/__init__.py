import json
import os
from flask import (Flask, Response, request)
from flask_cors import CORS
import qis

def create_app() -> Flask:
    app = Flask(__name__)
    
    # Origins="*" es lo más permisivo. 
    # En producción Render, el navegador necesita esto para aceptar la respuesta desde otro dominio.
    CORS(app, resources={r"/*": {"origins": "*"}})
    
    RESPONSE_HEADERS = { 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    }    
    
    @app.route('/years2pay', methods=['POST', 'OPTIONS'])
    def calc():
        if request.method == 'OPTIONS':
            return Response(status=200, headers=RESPONSE_HEADERS)
            
        data = request.get_json()
        strategy_pA = data.get('strategy_pA', None)
        strategy_pB = data.get('strategy_pB', None)
        w = data.get('w', None)
        
        if strategy_pA is None or strategy_pB is None or w is None:
            return Response(json.dumps({ 'error': 'Not enough data' }), status=400, headers=RESPONSE_HEADERS)
        
        try:
            valA, valB = qis.get_years_to_pay(float(strategy_pA), float(strategy_pB), float(w))
            return Response(json.dumps({ 'years_playerA': valA, 'years_playerB': valB }), status=200, headers=RESPONSE_HEADERS)
        except Exception as e:
            return Response(json.dumps({ 'error': str(e) }), status=500, headers=RESPONSE_HEADERS)
        
    return app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    create_app().run(debug=False, host='0.0.0.0', port=port)