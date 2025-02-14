const SHA256 = require('crypto-js/sha256');

// Define the Block class, representing a block in the blockchain
class Block {
  // Constructor to initialize the block properties
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp; // The creation time of the block
    this.lastHash = lastHash; // The hash of the previous block
    this.hash = hash; // The unique hash of this block
    this.data = data; // The data stored in the block
  }

  // Method to return a formatted string representation of the block
  toString() {
    return `Block =
            Timestamp = ${this.timestamp}
            lastHash = ${this.lastHash.substring(0, 10)}
            hash = ${this.hash.substring(0, 10)}
            data = ${this.data}`;
  }

  // Static method to create the genesis block (the first block in the blockchain)
  static genesis() {
    return new this(
      'Genesis time', // Fixed timestamp indicating the creation of the blockchain
      '----------', // Placeholder hash since there is no previous block
      'JFHFff3439', // Fixed hash for the genesis block
      [] // No initial data stored
    );
  }

  // Static method to mine a new block based on the last block
  static mineBlock(lastBlock, data) {
    const timestamp = Date.now(); // Get the current timestamp
    const lastHash = lastBlock.hash; // Use the last block's hash as reference
    //const hash = 'a-fazer-hash'; // Placeholder for hash generation logic
    const hash = Block.hash(timestamp, lastHash, data); // ✅ Calcula o hash corretamente // Placeholder for hash generation logic

    // Return a new Block instance with the computed values
    return new this(timestamp, lastHash, hash, data);
  }

  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }

  static blockHash(block) {
    const { timestamp, lastHash, data } = block;

    return Block.hash(timestamp, lastHash, data);
  }
}

// Export the Block class to be used in other files
module.exports = Block;
