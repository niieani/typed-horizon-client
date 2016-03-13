import Rx = require('rx');
export default class HorizonSocket extends Rx.AnonymousSubject<any> {
    makeRequest: (rawRequest) => Rx.Observable<any>;
    handshake: Rx.AsyncSubject<any>;
    status: Rx.BehaviorSubject<StatusObject>;
    constructor(host: string, secure: boolean, path: string);
}
export declare type StatusObject = {
    type: 'unconnected' | 'connected' | 'error' | 'disconnected';
};
