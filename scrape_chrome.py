import urllib.request
import json
import websocket
import sys

def get_tabs():
    try:
        req = urllib.request.Request('http://localhost:9222/json')
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching tabs: {e}")
        return []

def get_dom(ws_url):
    try:
        ws = websocket.create_connection(ws_url, timeout=5, header=["Origin: http://localhost:9222"])
        # Request DOM
        ws.send(json.dumps({"id": 1, "method": "Runtime.evaluate", "params": {"expression": "document.documentElement.outerHTML"}}))
        while True:
            result = ws.recv()
            data = json.loads(result)
            if data.get('id') == 1:
                html = data.get('result', {}).get('result', {}).get('value', '')
                ws.close()
                return html
    except Exception as e:
        print(f"WebSocket error: {e}")
        return ""

tabs = get_tabs()
print(f"Found {len(tabs)} open targets.")

pages = [t for t in tabs if t.get('type') == 'page' and not t.get('url').startswith('chrome-extension')]

print(f"Found {len(pages)} actual pages.")

for i, page in enumerate(pages):
    print(f"\n--- Tab {i+1} ---")
    print(f"Title: {page.get('title')}")
    print(f"URL: {page.get('url')}")
    ws_url = page.get('webSocketDebuggerUrl')
    if ws_url:
        html = get_dom(ws_url)
        print(f"HTML length: {len(html)}")
        # Save to file for later analysis
        safe_title = "".join([c if c.isalnum() else "_" for c in page.get('title', 'tab')[:50]])
        with open(f"tab_{i}_{safe_title}.html", "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Saved to tab_{i}_{safe_title}.html")
    else:
        print("No WebSocket URL available.")

print("\nDone.")
