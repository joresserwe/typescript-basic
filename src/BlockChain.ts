import Block from './Block';

export default class Blockchain {
  private blocks: Block[];

  constructor() {
    this.blocks = [];
  }

  private getCurrentHeight() {
    return this.blocks.length;
  }

  private getPrevHash() {
    const length = this.getCurrentHeight();
    return length === 0 ? '' : this.blocks[length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.getCurrentHeight() + 1, data);
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}
