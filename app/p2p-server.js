const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

// $ HTTP_PORT = 3002 P2P_PORT = 5003 PEERS=ws://localhost:5001, ws://localhost:5002 npm run dev

// A classe P2pServer é usada para criar um servidor P2P (peer-to-peer) que se conecta a outros
// nós na rede e permite a sincronização de dados.
class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.socket = [];
  }
}
