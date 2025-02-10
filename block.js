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
            lastHash = ${this.lastHash}
            hash = ${this.hash}
            data = ${this.data}`;
  }
}
