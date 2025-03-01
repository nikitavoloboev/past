import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type TonGuarantee$Data = {
    $$type: 'TonGuarantee$Data';
    argueFromInvestor: boolean;
    argueFromWorker: boolean;
    started: boolean;
    revokedAt: bigint;
    investor: Address;
    performer: Address;
    moderator: Address;
    subtasks: Subtasks;
    collection: Address;
    index: bigint;
}

export function storeTonGuarantee$Data(src: TonGuarantee$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.argueFromInvestor);
        b_0.storeBit(src.argueFromWorker);
        b_0.storeBit(src.started);
        b_0.storeUint(src.revokedAt, 64);
        b_0.storeAddress(src.investor);
        b_0.storeAddress(src.performer);
        b_0.storeAddress(src.moderator);
        let b_1 = new Builder();
        b_1.store(storeSubtasks(src.subtasks));
        b_1.storeAddress(src.collection);
        b_1.storeInt(src.index, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadTonGuarantee$Data(slice: Slice) {
    let sc_0 = slice;
    let _argueFromInvestor = sc_0.loadBit();
    let _argueFromWorker = sc_0.loadBit();
    let _started = sc_0.loadBit();
    let _revokedAt = sc_0.loadUintBig(64);
    let _investor = sc_0.loadAddress();
    let _performer = sc_0.loadAddress();
    let _moderator = sc_0.loadAddress();
    let sc_1 = sc_0.loadRef().beginParse();
    let _subtasks = loadSubtasks(sc_1);
    let _collection = sc_1.loadAddress();
    let _index = sc_1.loadIntBig(257);
    return { $$type: 'TonGuarantee$Data' as const, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, revokedAt: _revokedAt, investor: _investor, performer: _performer, moderator: _moderator, subtasks: _subtasks, collection: _collection, index: _index };
}

function loadTupleTonGuarantee$Data(source: TupleReader) {
    let _argueFromInvestor = source.readBoolean();
    let _argueFromWorker = source.readBoolean();
    let _started = source.readBoolean();
    let _revokedAt = source.readBigNumber();
    let _investor = source.readAddress();
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    const _subtasks = loadTupleSubtasks(source);
    let _collection = source.readAddress();
    let _index = source.readBigNumber();
    return { $$type: 'TonGuarantee$Data' as const, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, revokedAt: _revokedAt, investor: _investor, performer: _performer, moderator: _moderator, subtasks: _subtasks, collection: _collection, index: _index };
}

function loadGetterTupleTonGuarantee$Data(source: TupleReader) {
    let _argueFromInvestor = source.readBoolean();
    let _argueFromWorker = source.readBoolean();
    let _started = source.readBoolean();
    let _revokedAt = source.readBigNumber();
    let _investor = source.readAddress();
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    const _subtasks = loadGetterTupleSubtasks(source);
    let _collection = source.readAddress();
    let _index = source.readBigNumber();
    return { $$type: 'TonGuarantee$Data' as const, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, revokedAt: _revokedAt, investor: _investor, performer: _performer, moderator: _moderator, subtasks: _subtasks, collection: _collection, index: _index };
}

function storeTupleTonGuarantee$Data(source: TonGuarantee$Data) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.argueFromInvestor);
    builder.writeBoolean(source.argueFromWorker);
    builder.writeBoolean(source.started);
    builder.writeNumber(source.revokedAt);
    builder.writeAddress(source.investor);
    builder.writeAddress(source.performer);
    builder.writeAddress(source.moderator);
    builder.writeTuple(storeTupleSubtasks(source.subtasks));
    builder.writeAddress(source.collection);
    builder.writeNumber(source.index);
    return builder.build();
}

function dictValueParserTonGuarantee$Data(): DictionaryValue<TonGuarantee$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTonGuarantee$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTonGuarantee$Data(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ModeratorCloseTask = {
    $$type: 'ModeratorCloseTask';
    taskId: bigint;
    isLastTask: boolean;
}

export function storeModeratorCloseTask(src: ModeratorCloseTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1103476706, 32);
        b_0.storeUint(src.taskId, 64);
        b_0.storeBit(src.isLastTask);
    };
}

export function loadModeratorCloseTask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1103476706) { throw Error('Invalid prefix'); }
    let _taskId = sc_0.loadUintBig(64);
    let _isLastTask = sc_0.loadBit();
    return { $$type: 'ModeratorCloseTask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function loadTupleModeratorCloseTask(source: TupleReader) {
    let _taskId = source.readBigNumber();
    let _isLastTask = source.readBoolean();
    return { $$type: 'ModeratorCloseTask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function loadGetterTupleModeratorCloseTask(source: TupleReader) {
    let _taskId = source.readBigNumber();
    let _isLastTask = source.readBoolean();
    return { $$type: 'ModeratorCloseTask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function storeTupleModeratorCloseTask(source: ModeratorCloseTask) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.taskId);
    builder.writeBoolean(source.isLastTask);
    return builder.build();
}

function dictValueParserModeratorCloseTask(): DictionaryValue<ModeratorCloseTask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeModeratorCloseTask(src)).endCell());
        },
        parse: (src) => {
            return loadModeratorCloseTask(src.loadRef().beginParse());
        }
    }
}

export type SetArgue = {
    $$type: 'SetArgue';
    argue: boolean;
}

export function storeSetArgue(src: SetArgue) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(523230747, 32);
        b_0.storeBit(src.argue);
    };
}

export function loadSetArgue(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 523230747) { throw Error('Invalid prefix'); }
    let _argue = sc_0.loadBit();
    return { $$type: 'SetArgue' as const, argue: _argue };
}

function loadTupleSetArgue(source: TupleReader) {
    let _argue = source.readBoolean();
    return { $$type: 'SetArgue' as const, argue: _argue };
}

function loadGetterTupleSetArgue(source: TupleReader) {
    let _argue = source.readBoolean();
    return { $$type: 'SetArgue' as const, argue: _argue };
}

function storeTupleSetArgue(source: SetArgue) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.argue);
    return builder.build();
}

function dictValueParserSetArgue(): DictionaryValue<SetArgue> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetArgue(src)).endCell());
        },
        parse: (src) => {
            return loadSetArgue(src.loadRef().beginParse());
        }
    }
}

export type TokenTransfer = {
    $$type: 'TokenTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    excess_to: Address;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Slice;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.excess_to);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _excess_to = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0;
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, excess_to: _excess_to, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _excess_to = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, excess_to: _excess_to, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadGetterTupleTokenTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _excess_to = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, excess_to: _excess_to, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransfer(source: TokenTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.excess_to);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserTokenTransfer(): DictionaryValue<TokenTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransfer(src.loadRef().beginParse());
        }
    }
}

export type OneTask = {
    $$type: 'OneTask';
    amount: bigint;
    finished: boolean;
}

export function storeOneTask(src: OneTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.amount);
        b_0.storeBit(src.finished);
    };
}

export function loadOneTask(slice: Slice) {
    let sc_0 = slice;
    let _amount = sc_0.loadCoins();
    let _finished = sc_0.loadBit();
    return { $$type: 'OneTask' as const, amount: _amount, finished: _finished };
}

function loadTupleOneTask(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _finished = source.readBoolean();
    return { $$type: 'OneTask' as const, amount: _amount, finished: _finished };
}

function loadGetterTupleOneTask(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _finished = source.readBoolean();
    return { $$type: 'OneTask' as const, amount: _amount, finished: _finished };
}

function storeTupleOneTask(source: OneTask) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeBoolean(source.finished);
    return builder.build();
}

function dictValueParserOneTask(): DictionaryValue<OneTask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOneTask(src)).endCell());
        },
        parse: (src) => {
            return loadOneTask(src.loadRef().beginParse());
        }
    }
}

export type Subtasks = {
    $$type: 'Subtasks';
    token: Address;
    finishAmount: bigint;
    tasks: Dictionary<number, OneTask>;
}

export function storeSubtasks(src: Subtasks) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.token);
        b_0.storeCoins(src.finishAmount);
        b_0.storeDict(src.tasks, Dictionary.Keys.Uint(16), dictValueParserOneTask());
    };
}

export function loadSubtasks(slice: Slice) {
    let sc_0 = slice;
    let _token = sc_0.loadAddress();
    let _finishAmount = sc_0.loadCoins();
    let _tasks = Dictionary.load(Dictionary.Keys.Uint(16), dictValueParserOneTask(), sc_0);
    return { $$type: 'Subtasks' as const, token: _token, finishAmount: _finishAmount, tasks: _tasks };
}

function loadTupleSubtasks(source: TupleReader) {
    let _token = source.readAddress();
    let _finishAmount = source.readBigNumber();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.Uint(16), dictValueParserOneTask(), source.readCellOpt());
    return { $$type: 'Subtasks' as const, token: _token, finishAmount: _finishAmount, tasks: _tasks };
}

function loadGetterTupleSubtasks(source: TupleReader) {
    let _token = source.readAddress();
    let _finishAmount = source.readBigNumber();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.Uint(16), dictValueParserOneTask(), source.readCellOpt());
    return { $$type: 'Subtasks' as const, token: _token, finishAmount: _finishAmount, tasks: _tasks };
}

function storeTupleSubtasks(source: Subtasks) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.token);
    builder.writeNumber(source.finishAmount);
    builder.writeCell(source.tasks.size > 0 ? beginCell().storeDictDirect(source.tasks, Dictionary.Keys.Uint(16), dictValueParserOneTask()).endCell() : null);
    return builder.build();
}

function dictValueParserSubtasks(): DictionaryValue<Subtasks> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSubtasks(src)).endCell());
        },
        parse: (src) => {
            return loadSubtasks(src.loadRef().beginParse());
        }
    }
}

export type InitializeContract = {
    $$type: 'InitializeContract';
    investor: Address;
    moderator: Address;
    performer: Address;
    subtasks: Subtasks;
}

export function storeInitializeContract(src: InitializeContract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2039384754, 32);
        b_0.storeAddress(src.investor);
        b_0.storeAddress(src.moderator);
        b_0.storeAddress(src.performer);
        let b_1 = new Builder();
        b_1.store(storeSubtasks(src.subtasks));
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInitializeContract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2039384754) { throw Error('Invalid prefix'); }
    let _investor = sc_0.loadAddress();
    let _moderator = sc_0.loadAddress();
    let _performer = sc_0.loadAddress();
    let sc_1 = sc_0.loadRef().beginParse();
    let _subtasks = loadSubtasks(sc_1);
    return { $$type: 'InitializeContract' as const, investor: _investor, moderator: _moderator, performer: _performer, subtasks: _subtasks };
}

function loadTupleInitializeContract(source: TupleReader) {
    let _investor = source.readAddress();
    let _moderator = source.readAddress();
    let _performer = source.readAddress();
    const _subtasks = loadTupleSubtasks(source);
    return { $$type: 'InitializeContract' as const, investor: _investor, moderator: _moderator, performer: _performer, subtasks: _subtasks };
}

function loadGetterTupleInitializeContract(source: TupleReader) {
    let _investor = source.readAddress();
    let _moderator = source.readAddress();
    let _performer = source.readAddress();
    const _subtasks = loadGetterTupleSubtasks(source);
    return { $$type: 'InitializeContract' as const, investor: _investor, moderator: _moderator, performer: _performer, subtasks: _subtasks };
}

function storeTupleInitializeContract(source: InitializeContract) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.investor);
    builder.writeAddress(source.moderator);
    builder.writeAddress(source.performer);
    builder.writeTuple(storeTupleSubtasks(source.subtasks));
    return builder.build();
}

function dictValueParserInitializeContract(): DictionaryValue<InitializeContract> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInitializeContract(src)).endCell());
        },
        parse: (src) => {
            return loadInitializeContract(src.loadRef().beginParse());
        }
    }
}

export type ReleaseSubtask = {
    $$type: 'ReleaseSubtask';
    taskId: bigint;
    isLastTask: boolean;
}

export function storeReleaseSubtask(src: ReleaseSubtask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2648785511, 32);
        b_0.storeInt(src.taskId, 257);
        b_0.storeBit(src.isLastTask);
    };
}

export function loadReleaseSubtask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2648785511) { throw Error('Invalid prefix'); }
    let _taskId = sc_0.loadIntBig(257);
    let _isLastTask = sc_0.loadBit();
    return { $$type: 'ReleaseSubtask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function loadTupleReleaseSubtask(source: TupleReader) {
    let _taskId = source.readBigNumber();
    let _isLastTask = source.readBoolean();
    return { $$type: 'ReleaseSubtask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function loadGetterTupleReleaseSubtask(source: TupleReader) {
    let _taskId = source.readBigNumber();
    let _isLastTask = source.readBoolean();
    return { $$type: 'ReleaseSubtask' as const, taskId: _taskId, isLastTask: _isLastTask };
}

function storeTupleReleaseSubtask(source: ReleaseSubtask) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.taskId);
    builder.writeBoolean(source.isLastTask);
    return builder.build();
}

function dictValueParserReleaseSubtask(): DictionaryValue<ReleaseSubtask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReleaseSubtask(src)).endCell());
        },
        parse: (src) => {
            return loadReleaseSubtask(src.loadRef().beginParse());
        }
    }
}

export type InvestmentData = {
    $$type: 'InvestmentData';
    subtasks: Subtasks;
    investor: Address;
    performer: Address;
    moderator: Address;
    argueFromInvestor: boolean;
    argueFromWorker: boolean;
    started: boolean;
    canceled: boolean;
    index: bigint;
}

export function storeInvestmentData(src: InvestmentData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.store(storeSubtasks(src.subtasks));
        b_0.storeAddress(src.investor);
        b_0.storeAddress(src.performer);
        let b_1 = new Builder();
        b_1.storeAddress(src.moderator);
        b_1.storeBit(src.argueFromInvestor);
        b_1.storeBit(src.argueFromWorker);
        b_1.storeBit(src.started);
        b_1.storeBit(src.canceled);
        b_1.storeInt(src.index, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadInvestmentData(slice: Slice) {
    let sc_0 = slice;
    let _subtasks = loadSubtasks(sc_0);
    let _investor = sc_0.loadAddress();
    let _performer = sc_0.loadAddress();
    let sc_1 = sc_0.loadRef().beginParse();
    let _moderator = sc_1.loadAddress();
    let _argueFromInvestor = sc_1.loadBit();
    let _argueFromWorker = sc_1.loadBit();
    let _started = sc_1.loadBit();
    let _canceled = sc_1.loadBit();
    let _index = sc_1.loadIntBig(257);
    return { $$type: 'InvestmentData' as const, subtasks: _subtasks, investor: _investor, performer: _performer, moderator: _moderator, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, canceled: _canceled, index: _index };
}

function loadTupleInvestmentData(source: TupleReader) {
    const _subtasks = loadTupleSubtasks(source);
    let _investor = source.readAddress();
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    let _argueFromInvestor = source.readBoolean();
    let _argueFromWorker = source.readBoolean();
    let _started = source.readBoolean();
    let _canceled = source.readBoolean();
    let _index = source.readBigNumber();
    return { $$type: 'InvestmentData' as const, subtasks: _subtasks, investor: _investor, performer: _performer, moderator: _moderator, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, canceled: _canceled, index: _index };
}

function loadGetterTupleInvestmentData(source: TupleReader) {
    const _subtasks = loadGetterTupleSubtasks(source);
    let _investor = source.readAddress();
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    let _argueFromInvestor = source.readBoolean();
    let _argueFromWorker = source.readBoolean();
    let _started = source.readBoolean();
    let _canceled = source.readBoolean();
    let _index = source.readBigNumber();
    return { $$type: 'InvestmentData' as const, subtasks: _subtasks, investor: _investor, performer: _performer, moderator: _moderator, argueFromInvestor: _argueFromInvestor, argueFromWorker: _argueFromWorker, started: _started, canceled: _canceled, index: _index };
}

function storeTupleInvestmentData(source: InvestmentData) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleSubtasks(source.subtasks));
    builder.writeAddress(source.investor);
    builder.writeAddress(source.performer);
    builder.writeAddress(source.moderator);
    builder.writeBoolean(source.argueFromInvestor);
    builder.writeBoolean(source.argueFromWorker);
    builder.writeBoolean(source.started);
    builder.writeBoolean(source.canceled);
    builder.writeNumber(source.index);
    return builder.build();
}

function dictValueParserInvestmentData(): DictionaryValue<InvestmentData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInvestmentData(src)).endCell());
        },
        parse: (src) => {
            return loadInvestmentData(src.loadRef().beginParse());
        }
    }
}

export type NftTransfer = {
    $$type: 'NftTransfer';
    queryId: bigint;
    new_owner: Address;
    response_destination: Address | null;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Slice;
}

export function storeNftTransfer(src: NftTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1607220500, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadNftTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _new_owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadMaybeAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_amount = sc_0.loadCoins();
    let _forward_payload = sc_0;
    return { $$type: 'NftTransfer' as const, queryId: _queryId, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function loadTupleNftTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddressOpt();
    let _custom_payload = source.readCellOpt();
    let _forward_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'NftTransfer' as const, queryId: _queryId, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function loadGetterTupleNftTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddressOpt();
    let _custom_payload = source.readCellOpt();
    let _forward_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'NftTransfer' as const, queryId: _queryId, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function storeTupleNftTransfer(source: NftTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.new_owner);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserNftTransfer(): DictionaryValue<NftTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNftTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadNftTransfer(src.loadRef().beginParse());
        }
    }
}

export type GetStaticData = {
    $$type: 'GetStaticData';
    queryId: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(801842850, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadGetStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 801842850) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'GetStaticData' as const, queryId: _queryId };
}

function loadTupleGetStaticData(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'GetStaticData' as const, queryId: _queryId };
}

function loadGetterTupleGetStaticData(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'GetStaticData' as const, queryId: _queryId };
}

function storeTupleGetStaticData(source: GetStaticData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserGetStaticData(): DictionaryValue<GetStaticData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadGetStaticData(src.loadRef().beginParse());
        }
    }
}

export type Destroy = {
    $$type: 'Destroy';
    queryId: bigint;
}

export function storeDestroy(src: Destroy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(520377210, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDestroy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 520377210) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Destroy' as const, queryId: _queryId };
}

function loadTupleDestroy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Destroy' as const, queryId: _queryId };
}

function loadGetterTupleDestroy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Destroy' as const, queryId: _queryId };
}

function storeTupleDestroy(source: Destroy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDestroy(): DictionaryValue<Destroy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDestroy(src)).endCell());
        },
        parse: (src) => {
            return loadDestroy(src.loadRef().beginParse());
        }
    }
}

export type Revoke = {
    $$type: 'Revoke';
    queryId: bigint;
}

export function storeRevoke(src: Revoke) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1871312355, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadRevoke(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1871312355) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Revoke' as const, queryId: _queryId };
}

function loadTupleRevoke(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Revoke' as const, queryId: _queryId };
}

function loadGetterTupleRevoke(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Revoke' as const, queryId: _queryId };
}

function storeTupleRevoke(source: Revoke) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserRevoke(): DictionaryValue<Revoke> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRevoke(src)).endCell());
        },
        parse: (src) => {
            return loadRevoke(src.loadRef().beginParse());
        }
    }
}

export type GetNftData = {
    $$type: 'GetNftData';
    is_initialized: boolean;
    index: bigint;
    collection_address: Address;
    owner_address: Address | null;
    individual_content: Cell;
}

export function storeGetNftData(src: GetNftData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.is_initialized);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.collection_address);
        b_0.storeAddress(src.owner_address);
        b_0.storeRef(src.individual_content);
    };
}

export function loadGetNftData(slice: Slice) {
    let sc_0 = slice;
    let _is_initialized = sc_0.loadBit();
    let _index = sc_0.loadIntBig(257);
    let _collection_address = sc_0.loadAddress();
    let _owner_address = sc_0.loadMaybeAddress();
    let _individual_content = sc_0.loadRef();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

function loadTupleGetNftData(source: TupleReader) {
    let _is_initialized = source.readBoolean();
    let _index = source.readBigNumber();
    let _collection_address = source.readAddress();
    let _owner_address = source.readAddressOpt();
    let _individual_content = source.readCell();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

function loadGetterTupleGetNftData(source: TupleReader) {
    let _is_initialized = source.readBoolean();
    let _index = source.readBigNumber();
    let _collection_address = source.readAddress();
    let _owner_address = source.readAddressOpt();
    let _individual_content = source.readCell();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

function storeTupleGetNftData(source: GetNftData) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.is_initialized);
    builder.writeNumber(source.index);
    builder.writeAddress(source.collection_address);
    builder.writeAddress(source.owner_address);
    builder.writeCell(source.individual_content);
    return builder.build();
}

function dictValueParserGetNftData(): DictionaryValue<GetNftData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetNftData(src)).endCell());
        },
        parse: (src) => {
            return loadGetNftData(src.loadRef().beginParse());
        }
    }
}

export type ReportStaticData = {
    $$type: 'ReportStaticData';
    queryId: bigint;
    index_id: bigint;
    collection: Address;
}

export function storeReportStaticData(src: ReportStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2339837749, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.index_id, 257);
        b_0.storeAddress(src.collection);
    };
}

export function loadReportStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2339837749) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _index_id = sc_0.loadIntBig(257);
    let _collection = sc_0.loadAddress();
    return { $$type: 'ReportStaticData' as const, queryId: _queryId, index_id: _index_id, collection: _collection };
}

function loadTupleReportStaticData(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _index_id = source.readBigNumber();
    let _collection = source.readAddress();
    return { $$type: 'ReportStaticData' as const, queryId: _queryId, index_id: _index_id, collection: _collection };
}

function loadGetterTupleReportStaticData(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _index_id = source.readBigNumber();
    let _collection = source.readAddress();
    return { $$type: 'ReportStaticData' as const, queryId: _queryId, index_id: _index_id, collection: _collection };
}

function storeTupleReportStaticData(source: ReportStaticData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.index_id);
    builder.writeAddress(source.collection);
    return builder.build();
}

function dictValueParserReportStaticData(): DictionaryValue<ReportStaticData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReportStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadReportStaticData(src.loadRef().beginParse());
        }
    }
}

export type OwnershipProof = {
    $$type: 'OwnershipProof';
    queryId: bigint;
    item_id: bigint;
    owner: Address;
    data: Cell;
    revoked_at: bigint;
    content: Cell | null;
}

export function storeOwnershipProof(src: OwnershipProof) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(86296494, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeUint(src.item_id, 256);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.data);
        b_0.storeUint(src.revoked_at, 64);
        if (src.content !== null && src.content !== undefined) { b_0.storeBit(true).storeRef(src.content); } else { b_0.storeBit(false); }
    };
}

export function loadOwnershipProof(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 86296494) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _item_id = sc_0.loadUintBig(256);
    let _owner = sc_0.loadAddress();
    let _data = sc_0.loadRef();
    let _revoked_at = sc_0.loadUintBig(64);
    let _content = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'OwnershipProof' as const, queryId: _queryId, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function loadTupleOwnershipProof(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _item_id = source.readBigNumber();
    let _owner = source.readAddress();
    let _data = source.readCell();
    let _revoked_at = source.readBigNumber();
    let _content = source.readCellOpt();
    return { $$type: 'OwnershipProof' as const, queryId: _queryId, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function loadGetterTupleOwnershipProof(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _item_id = source.readBigNumber();
    let _owner = source.readAddress();
    let _data = source.readCell();
    let _revoked_at = source.readBigNumber();
    let _content = source.readCellOpt();
    return { $$type: 'OwnershipProof' as const, queryId: _queryId, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function storeTupleOwnershipProof(source: OwnershipProof) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.item_id);
    builder.writeAddress(source.owner);
    builder.writeCell(source.data);
    builder.writeNumber(source.revoked_at);
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserOwnershipProof(): DictionaryValue<OwnershipProof> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOwnershipProof(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipProof(src.loadRef().beginParse());
        }
    }
}

export type ProveOwnership = {
    $$type: 'ProveOwnership';
    queryId: bigint;
    dest: Address;
    forward_payload: Cell;
    with_content: boolean;
}

export function storeProveOwnership(src: ProveOwnership) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(81711432, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.dest);
        b_0.storeRef(src.forward_payload);
        b_0.storeBit(src.with_content);
    };
}

export function loadProveOwnership(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 81711432) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _dest = sc_0.loadAddress();
    let _forward_payload = sc_0.loadRef();
    let _with_content = sc_0.loadBit();
    return { $$type: 'ProveOwnership' as const, queryId: _queryId, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function loadTupleProveOwnership(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _dest = source.readAddress();
    let _forward_payload = source.readCell();
    let _with_content = source.readBoolean();
    return { $$type: 'ProveOwnership' as const, queryId: _queryId, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function loadGetterTupleProveOwnership(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _dest = source.readAddress();
    let _forward_payload = source.readCell();
    let _with_content = source.readBoolean();
    return { $$type: 'ProveOwnership' as const, queryId: _queryId, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function storeTupleProveOwnership(source: ProveOwnership) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.dest);
    builder.writeCell(source.forward_payload);
    builder.writeBoolean(source.with_content);
    return builder.build();
}

function dictValueParserProveOwnership(): DictionaryValue<ProveOwnership> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProveOwnership(src)).endCell());
        },
        parse: (src) => {
            return loadProveOwnership(src.loadRef().beginParse());
        }
    }
}

export type OwnershipProofBounced = {
    $$type: 'OwnershipProofBounced';
    queryId: bigint;
}

export function storeOwnershipProofBounced(src: OwnershipProofBounced) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3247343314, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadOwnershipProofBounced(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3247343314) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'OwnershipProofBounced' as const, queryId: _queryId };
}

function loadTupleOwnershipProofBounced(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'OwnershipProofBounced' as const, queryId: _queryId };
}

function loadGetterTupleOwnershipProofBounced(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'OwnershipProofBounced' as const, queryId: _queryId };
}

function storeTupleOwnershipProofBounced(source: OwnershipProofBounced) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserOwnershipProofBounced(): DictionaryValue<OwnershipProofBounced> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOwnershipProofBounced(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipProofBounced(src.loadRef().beginParse());
        }
    }
}

export type ElString = {
    $$type: 'ElString';
    value: string;
}

export function storeElString(src: ElString) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.value);
    };
}

export function loadElString(slice: Slice) {
    let sc_0 = slice;
    let _value = sc_0.loadStringRefTail();
    return { $$type: 'ElString' as const, value: _value };
}

function loadTupleElString(source: TupleReader) {
    let _value = source.readString();
    return { $$type: 'ElString' as const, value: _value };
}

function loadGetterTupleElString(source: TupleReader) {
    let _value = source.readString();
    return { $$type: 'ElString' as const, value: _value };
}

function storeTupleElString(source: ElString) {
    let builder = new TupleBuilder();
    builder.writeString(source.value);
    return builder.build();
}

function dictValueParserElString(): DictionaryValue<ElString> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeElString(src)).endCell());
        },
        parse: (src) => {
            return loadElString(src.loadRef().beginParse());
        }
    }
}

export type CollectionData = {
    $$type: 'CollectionData';
    next_item_index: bigint;
    collection_content: Cell;
    owner_address: Address | null;
}

export function storeCollectionData(src: CollectionData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.next_item_index, 257);
        b_0.storeRef(src.collection_content);
        b_0.storeAddress(src.owner_address);
    };
}

export function loadCollectionData(slice: Slice) {
    let sc_0 = slice;
    let _next_item_index = sc_0.loadIntBig(257);
    let _collection_content = sc_0.loadRef();
    let _owner_address = sc_0.loadMaybeAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

function loadTupleCollectionData(source: TupleReader) {
    let _next_item_index = source.readBigNumber();
    let _collection_content = source.readCell();
    let _owner_address = source.readAddressOpt();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

function loadGetterTupleCollectionData(source: TupleReader) {
    let _next_item_index = source.readBigNumber();
    let _collection_content = source.readCell();
    let _owner_address = source.readAddressOpt();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

function storeTupleCollectionData(source: CollectionData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.next_item_index);
    builder.writeCell(source.collection_content);
    builder.writeAddress(source.owner_address);
    return builder.build();
}

function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCollectionData(src)).endCell());
        },
        parse: (src) => {
            return loadCollectionData(src.loadRef().beginParse());
        }
    }
}

export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    from: Address;
    forward_payload: Slice;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _forward_payload = sc_0;
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function loadTupleTokenNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function loadGetterTupleTokenNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function storeTupleTokenNotification(source: TokenNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserTokenNotification(): DictionaryValue<TokenNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenNotification(src.loadRef().beginParse());
        }
    }
}

export type NotifyMessage = {
    $$type: 'NotifyMessage';
    performer: Address;
    moderator: Address;
    randomId: bigint;
    subtasks: Subtasks;
}

export function storeNotifyMessage(src: NotifyMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.performer);
        b_0.storeAddress(src.moderator);
        b_0.storeInt(src.randomId, 257);
        let b_1 = new Builder();
        b_1.store(storeSubtasks(src.subtasks));
        b_0.storeRef(b_1.endCell());
    };
}

export function loadNotifyMessage(slice: Slice) {
    let sc_0 = slice;
    let _performer = sc_0.loadAddress();
    let _moderator = sc_0.loadAddress();
    let _randomId = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _subtasks = loadSubtasks(sc_1);
    return { $$type: 'NotifyMessage' as const, performer: _performer, moderator: _moderator, randomId: _randomId, subtasks: _subtasks };
}

function loadTupleNotifyMessage(source: TupleReader) {
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    let _randomId = source.readBigNumber();
    const _subtasks = loadTupleSubtasks(source);
    return { $$type: 'NotifyMessage' as const, performer: _performer, moderator: _moderator, randomId: _randomId, subtasks: _subtasks };
}

function loadGetterTupleNotifyMessage(source: TupleReader) {
    let _performer = source.readAddress();
    let _moderator = source.readAddress();
    let _randomId = source.readBigNumber();
    const _subtasks = loadGetterTupleSubtasks(source);
    return { $$type: 'NotifyMessage' as const, performer: _performer, moderator: _moderator, randomId: _randomId, subtasks: _subtasks };
}

function storeTupleNotifyMessage(source: NotifyMessage) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.performer);
    builder.writeAddress(source.moderator);
    builder.writeNumber(source.randomId);
    builder.writeTuple(storeTupleSubtasks(source.subtasks));
    return builder.build();
}

function dictValueParserNotifyMessage(): DictionaryValue<NotifyMessage> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNotifyMessage(src)).endCell());
        },
        parse: (src) => {
            return loadNotifyMessage(src.loadRef().beginParse());
        }
    }
}

export type RandomHasher = {
    $$type: 'RandomHasher';
    jetton: Address;
    investor: Address;
    randomId: bigint;
}

export function storeRandomHasher(src: RandomHasher) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.jetton);
        b_0.storeAddress(src.investor);
        b_0.storeInt(src.randomId, 257);
    };
}

export function loadRandomHasher(slice: Slice) {
    let sc_0 = slice;
    let _jetton = sc_0.loadAddress();
    let _investor = sc_0.loadAddress();
    let _randomId = sc_0.loadIntBig(257);
    return { $$type: 'RandomHasher' as const, jetton: _jetton, investor: _investor, randomId: _randomId };
}

function loadTupleRandomHasher(source: TupleReader) {
    let _jetton = source.readAddress();
    let _investor = source.readAddress();
    let _randomId = source.readBigNumber();
    return { $$type: 'RandomHasher' as const, jetton: _jetton, investor: _investor, randomId: _randomId };
}

function loadGetterTupleRandomHasher(source: TupleReader) {
    let _jetton = source.readAddress();
    let _investor = source.readAddress();
    let _randomId = source.readBigNumber();
    return { $$type: 'RandomHasher' as const, jetton: _jetton, investor: _investor, randomId: _randomId };
}

function storeTupleRandomHasher(source: RandomHasher) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jetton);
    builder.writeAddress(source.investor);
    builder.writeNumber(source.randomId);
    return builder.build();
}

function dictValueParserRandomHasher(): DictionaryValue<RandomHasher> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRandomHasher(src)).endCell());
        },
        parse: (src) => {
            return loadRandomHasher(src.loadRef().beginParse());
        }
    }
}

export type Collection$Data = {
    $$type: 'Collection$Data';
}

export function storeCollection$Data(src: Collection$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

export function loadCollection$Data(slice: Slice) {
    let sc_0 = slice;
    return { $$type: 'Collection$Data' as const };
}

function loadTupleCollection$Data(source: TupleReader) {
    return { $$type: 'Collection$Data' as const };
}

function loadGetterTupleCollection$Data(source: TupleReader) {
    return { $$type: 'Collection$Data' as const };
}

function storeTupleCollection$Data(source: Collection$Data) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserCollection$Data(): DictionaryValue<Collection$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCollection$Data(src)).endCell());
        },
        parse: (src) => {
            return loadCollection$Data(src.loadRef().beginParse());
        }
    }
}

 type Collection_init_args = {
    $$type: 'Collection_init_args';
}

function initCollection_init_args(src: Collection_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Collection_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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PwExyAGCEMGOhtJYyx/LP8lSgHBt2zz4D/IAf+Awf+BwIddJwh+VMCDXCx/eIIIQeY6KsrrjAiCCEJ3hQme64wIgghBBxbfiulpBR0gCnDDbPGwWjsGCALRQ+EJSkMcF8vRWEVYRVhFWEVYRVhFWEVYRVhFWEVYRVhHtRO1F7UeTMfLw7WftZe1kgAx/7RGK7UHt8QHy/4ASf9s4f0JEAeDTHwGCEHmOirK68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQQwBc+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6APQEVSAzEDYQNRA0WAH8CxERCwoREAoQnxCOEH0QbAUREQUEERAEED9O3IIA6psqs/L0bCIygQuhjQhgB//////////////////////////////////////////8UAbHBRXy9IELoY0IYAf//////////////////////////////////////////FAERQL8xwUT8vSBC6GNCGAH//////////////////////////////////////////xYxwXy9FO2gBD0h2+lIJESlTFtMm0B4pCONSBukjBtmtD6ANIAWWwSbwLiIG7y0IBvIoEtgzKz8vSAECkCWfR8b6UglALUMFiVMW0ybQHi6FuIVUYBJhB9EGwQWxBKGV4lEEYVFHBt2zxaAXQw0x8BghCd4UJnuvLggYEBAdcA0gBZbBJVsYIAr2n4QlKQxwXy9IFBwCry9IIA3a8pwADy9FUb2zx/SQT8jrIw0x8BghBBxbfiuvLggdM/0gBZbBJVsYEj7PhCUnDHBfL0gSwfLJF/kSvi8vRVG9s8f+AgghAfL94buo82MNMfAYIQHy/eG7ry4IHSAAEx+EJSkMcFkTyOEPhCUoDHBZE7ljCBEU3y8OLiiPhCAX9t2zx/4CCCEF/MPRS6SVVaSwHkVbF/gR+W+EFvJBNfAwKWghAO5rKAloIQB7+kgOISvvL0IoAQL1n0D2+hkjBt3yBukjBtmtD6ANIAWWwSbwLiggCTXiFus5ohIG7y0IBvIjGzkXDi8vQgbvLQgG8iMH8hgBACyFlZ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ygDicAHKAAJ/AcoAAslYzAHeULzKABnKABfKABXLP1ADINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbIUDMEYQCYWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlj6AvQAWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhKBAQHPAMkBzAIBIGNoAgFYZGYCEbVjG2ebZ42YMG1lABTIcAHKAHABygDJAhG3sHtnm2eNmDBtZwACKAIBIGl5AgFiamwCJ6+xbZ5tnh2dnZ2dnZ2dnZ2eNg1AbWsBBNs8dgIRr+ftnm2eNmLAbXMCju1E0NQB+GPSAAGOhNs8bBzg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAds8bnAB1tIA0gDSANM/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQbwC++kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6APQEVSAD+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXADAQXBBbEFoQWRBYEFcQVhA0ECMC9nBwcHCNCGAH//////////////////////////////////////////whbY0IYAf//////////////////////////////////////////I0IYAf//////////////////////////////////////////IkQmxCKEHkQaHFyAEOAH//////////////////////////////////////////wAApHFVUwBgJG2zxUcShVs9s8BBEQBBA/TtAMERAMEL8QrhCdEIwQexBqEFl0dQBQjQhgB//////////////////////////////////////////8KMcFswIQ2zzIVaDbPMl2dwAsKMMAVGVQVGWwVGuwVhIBVhIBVhJRGgHSEDtKmFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZY+gL0AFAEINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshYeABiINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEsoAFcoAE8oAygCBAQHPAMkBzAARuCvu1E0NIAAYZTSF5A==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initCollection_init_args({ $$type: 'Collection_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Collection_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    2977: { message: `Already initialized` },
    4429: { message: `Invalid sender` },
    5165: { message: `Not enough value` },
    7657: { message: `Not initialized` },
    8086: { message: `Not enough funds` },
    9196: { message: `Only moderator can call this method` },
    11261: { message: `Incorrect amount sent` },
    11295: { message: `No argue` },
    11651: { message: `Can not initialize contract with finished tasks` },
    16832: { message: `Contract is not started yet` },
    22073: { message: `Not all tasks are finished` },
    32438: { message: `Only worker can call this method` },
    33210: { message: `Contract is not canceled` },
    37726: { message: `Task is not found or already finished` },
    44905: { message: `Only investor can call this method` },
    46160: { message: `Only collection can initialize contract` },
    56751: { message: `Contract is canceled` },
    60059: { message: `Contract is already started` },
}

const Collection_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"TonGuarantee$Data","header":null,"fields":[{"name":"argueFromInvestor","type":{"kind":"simple","type":"bool","optional":false}},{"name":"argueFromWorker","type":{"kind":"simple","type":"bool","optional":false}},{"name":"started","type":{"kind":"simple","type":"bool","optional":false}},{"name":"revokedAt","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"investor","type":{"kind":"simple","type":"address","optional":false}},{"name":"performer","type":{"kind":"simple","type":"address","optional":false}},{"name":"moderator","type":{"kind":"simple","type":"address","optional":false}},{"name":"subtasks","type":{"kind":"simple","type":"Subtasks","optional":false}},{"name":"collection","type":{"kind":"simple","type":"address","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ModeratorCloseTask","header":1103476706,"fields":[{"name":"taskId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"isLastTask","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"SetArgue","header":523230747,"fields":[{"name":"argue","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"TokenTransfer","header":260734629,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"excess_to","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"OneTask","header":null,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"finished","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Subtasks","header":null,"fields":[{"name":"token","type":{"kind":"simple","type":"address","optional":false}},{"name":"finishAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"tasks","type":{"kind":"dict","key":"uint","keyFormat":16,"value":"OneTask","valueFormat":"ref"}}]},
    {"name":"InitializeContract","header":2039384754,"fields":[{"name":"investor","type":{"kind":"simple","type":"address","optional":false}},{"name":"moderator","type":{"kind":"simple","type":"address","optional":false}},{"name":"performer","type":{"kind":"simple","type":"address","optional":false}},{"name":"subtasks","type":{"kind":"simple","type":"Subtasks","optional":false}}]},
    {"name":"ReleaseSubtask","header":2648785511,"fields":[{"name":"taskId","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"isLastTask","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"InvestmentData","header":null,"fields":[{"name":"subtasks","type":{"kind":"simple","type":"Subtasks","optional":false}},{"name":"investor","type":{"kind":"simple","type":"address","optional":false}},{"name":"performer","type":{"kind":"simple","type":"address","optional":false}},{"name":"moderator","type":{"kind":"simple","type":"address","optional":false}},{"name":"argueFromInvestor","type":{"kind":"simple","type":"bool","optional":false}},{"name":"argueFromWorker","type":{"kind":"simple","type":"bool","optional":false}},{"name":"started","type":{"kind":"simple","type":"bool","optional":false}},{"name":"canceled","type":{"kind":"simple","type":"bool","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"NftTransfer","header":1607220500,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"GetStaticData","header":801842850,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"Destroy","header":520377210,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"Revoke","header":1871312355,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"GetNftData","header":null,"fields":[{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":true}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"ReportStaticData","header":2339837749,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"OwnershipProof","header":86296494,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_id","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}},{"name":"revoked_at","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"content","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"ProveOwnership","header":81711432,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"dest","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"cell","optional":false}},{"name":"with_content","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"OwnershipProofBounced","header":3247343314,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ElString","header":null,"fields":[{"name":"value","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CollectionData","header":null,"fields":[{"name":"next_item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"TokenNotification","header":1935855772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"NotifyMessage","header":null,"fields":[{"name":"performer","type":{"kind":"simple","type":"address","optional":false}},{"name":"moderator","type":{"kind":"simple","type":"address","optional":false}},{"name":"randomId","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"subtasks","type":{"kind":"simple","type":"Subtasks","optional":false}}]},
    {"name":"RandomHasher","header":null,"fields":[{"name":"jetton","type":{"kind":"simple","type":"address","optional":false}},{"name":"investor","type":{"kind":"simple","type":"address","optional":false}},{"name":"randomId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Collection$Data","header":null,"fields":[]},
]

const Collection_getters: ABIGetter[] = [
    {"name":"randomIdFor","arguments":[{"name":"jetton","type":{"kind":"simple","type":"address","optional":false}},{"name":"investor","type":{"kind":"simple","type":"address","optional":false}},{"name":"randomId","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_collection_data","arguments":[],"returnType":{"kind":"simple","type":"CollectionData","optional":false}},
    {"name":"get_nft_content","arguments":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}],"returnType":{"kind":"simple","type":"cell","optional":false}},
    {"name":"get_nft_address_by_index","arguments":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const Collection_getterMapping: { [key: string]: string } = {
    'randomIdFor': 'getRandomIdFor',
    'get_collection_data': 'getGetCollectionData',
    'get_nft_content': 'getGetNftContent',
    'get_nft_address_by_index': 'getGetNftAddressByIndex',
}

const Collection_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"TokenNotification"}},
    {"receiver":"internal","message":{"kind":"text","text":"deploy"}},
]

export class Collection implements Contract {
    
    static async init() {
        return await Collection_init();
    }
    
    static async fromInit() {
        const init = await Collection_init();
        const address = contractAddress(0, init);
        return new Collection(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Collection(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Collection_types,
        getters: Collection_getters,
        receivers: Collection_receivers,
        errors: Collection_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenNotification | 'deploy') {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenNotification') {
            body = beginCell().store(storeTokenNotification(message)).endCell();
        }
        if (message === 'deploy') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getRandomIdFor(provider: ContractProvider, jetton: Address, investor: Address, randomId: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(jetton);
        builder.writeAddress(investor);
        builder.writeNumber(randomId);
        let source = (await provider.get('randomIdFor', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetCollectionData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_collection_data', builder.build())).stack;
        const result = loadGetterTupleCollectionData(source);
        return result;
    }
    
    async getGetNftContent(provider: ContractProvider, index: bigint, individual_content: Cell) {
        let builder = new TupleBuilder();
        builder.writeNumber(index);
        builder.writeCell(individual_content);
        let source = (await provider.get('get_nft_content', builder.build())).stack;
        let result = source.readCell();
        return result;
    }
    
    async getGetNftAddressByIndex(provider: ContractProvider, index: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(index);
        let source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}