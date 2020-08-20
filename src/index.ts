/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/06/2020
 * Description: 
 ******************************************************************/

import EventEmitter from '@lvchengbin/event-emitter';

export type Step = [ string, () => any ];

export type StepLog = {
    time?: number;
    action?: string;
    message?: string;
    data?: any;
}

export type StepwiseOptions = {
    interval?: number;
};

export default class Stepwise {
    public $0: Record<string, any>;
    public $1: Record<string, any>;
    public length: number;
    #cursor = 0;
    #steps: any[] = [];
    #log: any[] = [];

    constructor( name: string, options: StepwiseOptions = {} );
    constructor( name: string, steps: Step[], options: StepwiseOptions = {} );
    constructor( name: string, steps: () => any, options: StepwiseOptions = {} );

    /**
     * wait for ${wait}ms
     */
    static step( wait: number, condition?: boolean ): void;
    static step( desc: string, callback: () => any, condition?: boolean ): void;
    static step( stepwise: Stepwise, condition?: boolean ): void;
    static step( parallelSteps: () => Step[], condition?: boolean ): void; 

    static beforeAll(): void;
    static afterAll(): void;

    static beforeEach(): void;
    static afterEach(): void;

    step(): this {
    }

    next(): this {
    }

    pause(): this {
    }

    resume(): this {
        return this;
    }

    back( n?: number ): this {
        this.#cusror = n;
        return this;
    }

    reset(): this {
        this.#cursor = 0;
    }
}
