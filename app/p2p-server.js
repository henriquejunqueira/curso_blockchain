const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

// $ HTTP_PORT = 3002 P2P_PORT = 5003 PEERS=ws://localhost:5001, ws://localhost:5002 npm run dev

// The P2pServer class is used to create a P2P (peer-to-peer) server that connects to other nodes
// on the network and allows data synchronization.
class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.socket = [];
  }

  // The "listen" function creates a new WebSocket server using the Websocket.Server class, and it listens
  // on the port specified by the P2P_PORT variable. When a new connection is made to the server,
  // the connectSocket function is called and passed the new socket as an argument.
  listenerCount() {
    // Creates a new instance of a WebSocket server, specifying the port on which the server should listen.
    // The port is specified by the P2P_PORT variable.
    const server = new Websocket.Server({ port: P2P_PORT });

    // Adds a "connection" event to the server. When a new client connects to the server, the function passed
    // as an argument will be called, in this case, this.connectSocket(socket).
    server.on('connetion', (socket) => this.connectSocket(socket));

    // Calls the "connectToPeers" function to connect to other peers.
    this.connectToPeers();

    // Prints a message to the console stating that it is listening for peer-to-peer connections on the
    // specified port.
    console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
  }

  // The "connectToPeers" function iterates through an array of peers, creates a new WebSocket connection
  // for each peer, adds an event listener for the "open" event on the socket, when the socket is opened,
  // it calls the connectSocket function passing the socket as an argument.
  connectToPeers() {
    // Iterates through an array of peers called "peers"
    peers.forEach((peer) => {
      // For each peer, create a new WebSocket connection using the WebSocket class and the peer's address.
      const socket = new Websocket(peer);

      // Adds an event listener for the "open" event on the socket, when the socket is opened,
      // it calls the function
      socket.on('open', () => this.connectSocket(socket));
    });
  }

  // The "connectSocket" function is called when a new connection is made to the server, and stores the
  // new socket in an array called "socket" and logs a "Socket connected" message to the console to
  // indicate that a new socket has been connected to the server.
  connectSocket(socket) {
    // It stores the new socket in an array called "socket" and pushes the new socket into it.
    this.socket.push(socket);

    // It logs a "Socket connected" message to the console to indicate that a new socket has been
    // connected to the server.
    console.log('Socket connected');

    this.messageHandler(socket);

    this.sendChain(socket);
  }

  sendChain(socket) {
    socket.send(JSON.stringify(this.blockchain.chain));
  }

  messageHandler(socket) {
    // creates an event for the socket to listen for messages, and when a message is received,
    // it will be passed as an argument to the anonymous function that is being passed as
    // the second argument
    socket.on('message', (message) => {
      // converts the received message, which is a string, to a JSON object so that it can
      // be manipulated more easily
      const data = JSON.parse(message);

      this.blockchain.replaceChain(data);
    });
  }

  syncChain() {
    this.socket.forEach((socket) => this.sendChain(socket));
  }
}

// Exports the P2Server class, so that it can be used in other parts of the application.
module.exports = P2pServer;
