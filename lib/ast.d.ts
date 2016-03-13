import Rx = require('rx');
import { SendRequest } from './index';
export declare class TermBase<T> {
    private _sendRequest;
    private _query;
    private _legalMethods;
    constructor(sendRequest: SendRequest, query: any, legalMethods: Array<AnyMethod>);
    watch({rawChanges}?: {
        rawChanges?: boolean;
    }): Rx.Observable<RawChanges<T>> | Rx.Observable<Array<T>>;
    fetch(): Rx.Observable<T>;
    findAll(...fieldValues: Array<T>): FindAll<T>;
    find(idOrObject: Id | Object): Find<T>;
    order(fields: string, direction?: Direction): Order<T>;
    above(aboveSpec: number | Object, bound?: Bound): Above<T>;
    below(belowSpec: number | Object, bound?: Bound): Below<T>;
    limit(size: number): Limit<T>;
}
export declare class Collection<T> extends TermBase<T> {
    private _lazyWrites;
    constructor(sendRequest: SendRequest, collectionName: string, lazyWrites: boolean);
    store(documents: T | Array<T>): Rx.Observable<Id>;
    upsert(documents: T | Array<T>): Rx.Observable<Id>;
    insert(documents: T | Array<T>): Rx.Observable<Id>;
    replace(documents: T | Array<T>): Rx.Observable<Id>;
    update(documents: T | Array<T>): Rx.Observable<Id>;
    remove(documentOrId: DocumentOrId<T>): Rx.Observable<Id>;
    removeAll(documentsOrIds: Array<DocumentOrId<T>>): Rx.Observable<Id>;
}
export declare class Find<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, idOrObject: any);
}
export declare class FindAll<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, fieldValues: any);
}
export declare class Above<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, aboveSpec: any, bound: any);
}
export declare class Below<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, belowSpec: any, bound: any);
}
export declare class Order<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, fields: any, direction: any);
}
export declare class Limit<T> extends TermBase<T> {
    constructor(sendRequest: SendRequest, previousQuery: any, size: any);
}
export declare type AnyMethod = 'find' | 'findAll' | 'justInitial' | 'order' | 'above' | 'below' | 'limit';
export declare type Bound = 'closed' | 'open';
export declare type Direction = 'ascending' | 'descending';
export declare type Id = number | string;
export declare type Document<T> = T & {
    id: Id;
};
export declare type DocumentOrId<T extends Object> = Id | Document<T>;
export declare type RawChanges<T> = {
    type: 'state' | 'added' | 'removed' | 'add' | 'remove' | 'uninitial' | 'initial' | 'change';
    state?: 'synced';
    new_val?: Document<T>;
    old_val?: Document<T>;
};
