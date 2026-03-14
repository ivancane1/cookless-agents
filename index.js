const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cookles Agents - OK');
});
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
