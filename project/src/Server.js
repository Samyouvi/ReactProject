const WebSocket = require('ws');
const URL = "wss://imr3-react.herokuapp.com";
const wss = new WebSocket(URL);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});