import Rx = require('rx');
export declare function validIndexValue(val: any): boolean;
export declare function assign(...args: any[]): any;
export declare function ordinal(x: any): string;
export declare function checkArgs(name: any, args: any, {nullable: nullable, minArgs: minArgs, maxArgs: maxArgs}?: {
    nullable?: boolean;
    minArgs?: number;
    maxArgs?: number;
}): void;
export declare function subscribeOrObservable(observable: Rx.Observable<any>): subscribeOrObservableReturn;
export declare type subscribeOrObservableReturn = (...args) => Rx.Observable<any> | Rx.IDisposable;
