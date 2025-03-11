const express = require('express');
const Blockchain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2pServer = require('./p2p-server'); // Import the "P2pServer" class from the "./p2p-server" file

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc); // Creates a new instance of the class, passing a "bc" object as an argument

app.use(express.json());

// Return the blocks
app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

// Add blocks to the Blockchain
app.post('/mine', (req, res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`New Block added: ${block.toString()}`);

  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () =>
  console.log(`Access via link: http://localhost:${HTTP_PORT}`)
);

// Calls the "listen" method on the P2pServer object, which creates a new WebSocket server,
// listens for new connections, calls the "connectToPeers" function, and logs a message to the
// console to indicate that the server is listening for peer-to-peer connections on the specified port.
p2pServer.listenerCount();
