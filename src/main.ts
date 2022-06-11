import Blockchain from './BlockChain';

const blockchain = new Blockchain();

blockchain.addBlock('First One');
blockchain.addBlock('Second One');
blockchain.addBlock('Third One');

console.log(blockchain.getBlocks());
