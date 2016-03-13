import Rx = require('rx');
import { Collection } from './ast';
import HorizonSocket from './socket';
export declare const Horizon: (({host, secure, path, lazyWrites}?: {
    host?: string;
    secure?: boolean;
    path?: string;
    lazyWrites?: boolean;
}) => (<T extends Object>(name: string) => Collection<T>) & {
    dispose: () => void;
    connect: (onError: any) => void;
    status: (...args: any[]) => Rx.Observable<any> | Rx.IDisposable;
    onDisconnected: (...args: any[]) => Rx.Observable<any> | Rx.IDisposable;
    onConnected: (...args: any[]) => Rx.Observable<any> | Rx.IDisposable;
    onSocketError: (...args: any[]) => Rx.Observable<any> | Rx.IDisposable;
}) & {
    log: (message?: any, ...optionalParams: any[]) => void;
    logError: (message?: any, ...optionalParams: any[]) => void;
    enableLogging: (deb?: boolean) => void;
    Socket: typeof HorizonSocket;
};
export declare type SendRequest = (type, options) => Rx.Observable<any>;
