// Create the block class
class Block {
  // Create the constructor
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // Create the toString function
  toString() {
    return `Block =
            Timestamp = ${this.timestamp}
            lastHash = ${this.lastHash.substring(0, 10)}
            hash = ${this.hash.substring(0, 10)}
            data = ${this.data}`;
  }

  static genesis() {
    return new this('Genesis time', '----------', 'JFHFff3439', []);
  }
}

// exports the Block class
module.exports = Block;
