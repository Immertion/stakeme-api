export interface Block {
    height: number;
    hash: string;
    parentHash: string;
    gasLimit: number;
    gasUsed: number;
    size: number;
  }
  