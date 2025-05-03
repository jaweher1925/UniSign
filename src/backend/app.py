from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import cv2
import numpy as np
import base64
from io import BytesIO
import mediapipe as mp

class GestureDetector:
    def __init__(self):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=2,
            min_detection_confidence=0.5
        )
        
    def detect_gesture(self, frame):
        # Convert BGR to RGB
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Process the frame and detect hands
        results = self.hands.process(frame_rgb)
        
        if results.multi_hand_landmarks:
            # Get the first detected hand
            hand = results.multi_hand_landmarks[0]
            
            # Basic gesture detection based on thumb position
            thumb_tip = hand.landmark[4]
            index_tip = hand.landmark[8]
            
            if thumb_tip.y < index_tip.y:
                return "thumbsUp"
            elif abs(thumb_tip.x - index_tip.x) < 0.1:
                return "point"
            else:
                return "wave"
                
        return "none"

class GestureHandler(SimpleHTTPRequestHandler):
    detector = GestureDetector()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()
    
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))
        
        # Decode base64 image
        img_data = base64.b64decode(data['image'].split(',')[1])
        img_array = np.frombuffer(img_data, np.uint8)
        frame = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        
        # Detect gesture
        gesture = self.detector.detect_gesture(frame)
        
        # Send response
        self.send_response(200)
        self.send_cors_headers()
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        
        response = json.dumps({'gesture': gesture})
        self.wfile.write(response.encode('utf-8'))
    
    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, GestureHandler)
    print('Starting gesture detection server on port 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()