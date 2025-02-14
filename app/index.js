const express = require('express');
const Blockchain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

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
