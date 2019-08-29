
interface ILog {
    TxData: string,
    address: string,
    blockHash: string,
    blockNumber: number,
    logIndex: number,
    removed: number,
    topics: string[],
    transactionHash: string,
    transactionIndex: number
}

interface IEvent {
    name: string,
    type: string,
    value: any
}

interface IDecodedLog extends ILog {
    events?: IEvent[],
    name?: string
}

interface IDecoded {
    name: string,
    value: any,
    type: string
}

export type ILogs = ILog[];

export type IDecodedLogs = IDecodedLog[];

export type IDecodeds = IDecoded[];
