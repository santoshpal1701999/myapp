const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from AWS Assignment completed</h1><p>Node app is running successfully Now lets go for second </p>');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

