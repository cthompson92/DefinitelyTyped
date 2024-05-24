import dogstatsd = require("node-dogstatsd");

declare class Collector implements dogstatsd.StatsDClient {
    constructor(client: dogstatsd.StatsDClient | null, delayMilliseconds?: number);

    timing(stat: string, time: number, sample_rate?: number, tags?: string[]): void;

    increment(stat: string, sample_rate?: number, tags?: string[]): void;
    incrementBy(stat: string, value: number, tags?: string[]): void;

    decrement(stat: string, sample_rate?: number, tags?: string[]): void;
    decrementBy(stat: string, value: number, tags?: string[]): void;

    gauge(stat: string, value: number, sample_rate?: number, tags?: string[]): void;

    histogram(stat: string, time: number, sample_rate?: number, tags?: string[]): void;
}

export = Collector;
