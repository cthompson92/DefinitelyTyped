import { TypedArrayConstructor, TypedArrayLike, TypedArrayPrototype } from './lib.typed-array';

// TODO: Use template literal and mapped types for this:
// ------------------------ >8 ------------------------
// autogenerated by scripts/collect-intrinsics.ts
// do not edit! 2021-01-06T10:22:26.744Z

// tslint:disable: ban-types
// prettier-ignore
export interface Intrinsics {
    '%AggregateError%': AggregateErrorConstructor;
    '%Array%': ArrayConstructor;
    '%ArrayBuffer%': ArrayBufferConstructor;
    '%ArrayBufferPrototype%': ArrayBuffer;
    '%ArrayIteratorPrototype%': IterableIterator<any>;
    '%ArrayPrototype%': typeof Array.prototype;
    '%ArrayProto_entries%': typeof Array.prototype.entries;
    '%ArrayProto_forEach%': typeof Array.prototype.forEach;
    '%ArrayProto_keys%': typeof Array.prototype.keys;
    '%ArrayProto_values%': typeof Array.prototype.values;
    '%AsyncFromSyncIteratorPrototype%': AsyncGenerator<any>;
    '%AsyncFunction%': FunctionConstructor;
    '%AsyncFunctionPrototype%': typeof Function.prototype;
    '%AsyncGenerator%': AsyncGeneratorFunction;
    '%AsyncGeneratorFunction%': AsyncGeneratorFunctionConstructor;
    '%AsyncGeneratorPrototype%': AsyncGenerator<any>;
    '%AsyncIteratorPrototype%': AsyncIterable<any>;
    '%Atomics%': Atomics;
    '%BigInt%': BigIntConstructor;
    '%BigInt64Array%': BigInt64ArrayConstructor;
    '%BigUint64Array%': BigUint64ArrayConstructor;
    '%Boolean%': BooleanConstructor;
    '%BooleanPrototype%': typeof Boolean.prototype;
    '%DataView%': DataViewConstructor;
    '%DataViewPrototype%': DataView;
    '%Date%': DateConstructor;
    '%DatePrototype%': Date;
    '%decodeURI%': typeof decodeURI;
    '%decodeURIComponent%': typeof decodeURIComponent;
    '%encodeURI%': typeof encodeURI;
    '%encodeURIComponent%': typeof encodeURIComponent;
    '%Error%': ErrorConstructor;
    '%ErrorPrototype%': Error;
    '%eval%': typeof eval;
    '%EvalError%': EvalErrorConstructor;
    '%EvalErrorPrototype%': EvalError;
    '%Float32Array%': Float32ArrayConstructor;
    '%Float32ArrayPrototype%': Float32Array;
    '%Float64Array%': Float64ArrayConstructor;
    '%Float64ArrayPrototype%': Float64Array;
    '%Function%': FunctionConstructor;
    '%FunctionPrototype%': typeof Function.prototype;
    '%Generator%': GeneratorFunction;
    '%GeneratorFunction%': GeneratorFunctionConstructor;
    '%GeneratorPrototype%': Generator<any>;
    '%Int8Array%': Int8ArrayConstructor;
    '%Int8ArrayPrototype%': Int8Array;
    '%Int16Array%': Int16ArrayConstructor;
    '%Int16ArrayPrototype%': Int16Array;
    '%Int32Array%': Int32ArrayConstructor;
    '%Int32ArrayPrototype%': Int32Array;
    '%isFinite%': typeof isFinite;
    '%isNaN%': typeof isNaN;
    '%IteratorPrototype%': Iterable<any>;
    '%JSON%': JSON;
    '%JSONParse%': typeof JSON.parse;
    '%Map%': MapConstructor;
    '%MapIteratorPrototype%': IterableIterator<any>;
    '%MapPrototype%': typeof Map.prototype;
    '%Math%': Math;
    '%Number%': NumberConstructor;
    '%NumberPrototype%': typeof Number.prototype;
    '%Object%': ObjectConstructor;
    '%ObjectPrototype%': typeof Object.prototype;
    '%ObjProto_toString%': typeof Object.prototype.toString;
    '%ObjProto_valueOf%': typeof Object.prototype.valueOf;
    '%parseFloat%': typeof parseFloat;
    '%parseInt%': typeof parseInt;
    '%Promise%': PromiseConstructor;
    '%PromisePrototype%': typeof Promise.prototype;
    '%PromiseProto_then%': typeof Promise.prototype.then;
    '%Promise_all%': typeof Promise.all;
    '%Promise_reject%': typeof Promise.reject;
    '%Promise_resolve%': typeof Promise.resolve;
    '%Proxy%': ProxyConstructor;
    '%RangeError%': RangeErrorConstructor;
    '%RangeErrorPrototype%': RangeError;
    '%ReferenceError%': ReferenceErrorConstructor;
    '%ReferenceErrorPrototype%': ReferenceError;
    '%Reflect%': typeof Reflect;
    '%RegExp%': RegExpConstructor;
    '%RegExpPrototype%': RegExp;
    '%Set%': SetConstructor;
    '%SetIteratorPrototype%': IterableIterator<any>;
    '%SetPrototype%': typeof Set.prototype;
    '%SharedArrayBuffer%': SharedArrayBufferConstructor;
    '%SharedArrayBufferPrototype%': SharedArrayBuffer;
    '%String%': StringConstructor;
    '%StringIteratorPrototype%': IterableIterator<string>;
    '%StringPrototype%': typeof String.prototype;
    '%Symbol%': SymbolConstructor;
    '%SymbolPrototype%': typeof Symbol.prototype;
    '%SyntaxError%': SyntaxErrorConstructor;
    '%SyntaxErrorPrototype%': SyntaxError;
    '%ThrowTypeError%': () => never;
    '%TypedArray%': TypedArrayConstructor;
    '%TypedArrayPrototype%': TypedArrayPrototype;
    '%TypeError%': TypeErrorConstructor;
    '%TypeErrorPrototype%': TypeError;
    '%Uint8Array%': Uint8ArrayConstructor;
    '%Uint8ArrayPrototype%': Uint8Array;
    '%Uint8ClampedArray%': Uint8ClampedArrayConstructor;
    '%Uint8ClampedArrayPrototype%': Uint8ClampedArray;
    '%Uint16Array%': Uint16ArrayConstructor;
    '%Uint16ArrayPrototype%': Uint16Array;
    '%Uint32Array%': Uint32ArrayConstructor;
    '%Uint32ArrayPrototype%': Uint32Array;
    '%URIError%': URIErrorConstructor;
    '%URIErrorPrototype%': URIError;
    '%WeakMap%': WeakMapConstructor;
    '%WeakMapPrototype%': typeof WeakMap.prototype;
    '%WeakSet%': WeakSetConstructor;
    '%WeakSetPrototype%': typeof WeakSet.prototype;
}

// prettier-ignore
export interface Intrinsics {
    '%AggregateError.prototype%': typeof AggregateError.prototype;
    '%AggregateError.prototype.name%': typeof AggregateError.prototype.name;
    '%AggregateError.prototype.message%': typeof AggregateError.prototype.message;
    '%Array.prototype%': typeof Array.prototype;
    '%Array.prototype.length%': typeof Array.prototype.length;
    '%Array.prototype.concat%': typeof Array.prototype.concat;
    '%Array.prototype.copyWithin%': typeof Array.prototype.copyWithin;
    '%Array.prototype.fill%': typeof Array.prototype.fill;
    '%Array.prototype.find%': typeof Array.prototype.find;
    '%Array.prototype.findIndex%': typeof Array.prototype.findIndex;
    '%Array.prototype.lastIndexOf%': typeof Array.prototype.lastIndexOf;
    '%Array.prototype.pop%': typeof Array.prototype.pop;
    '%Array.prototype.push%': typeof Array.prototype.push;
    '%Array.prototype.reverse%': typeof Array.prototype.reverse;
    '%Array.prototype.shift%': typeof Array.prototype.shift;
    '%Array.prototype.unshift%': typeof Array.prototype.unshift;
    '%Array.prototype.slice%': typeof Array.prototype.slice;
    '%Array.prototype.sort%': typeof Array.prototype.sort;
    '%Array.prototype.splice%': typeof Array.prototype.splice;
    '%Array.prototype.includes%': typeof Array.prototype.includes;
    '%Array.prototype.indexOf%': typeof Array.prototype.indexOf;
    '%Array.prototype.join%': typeof Array.prototype.join;
    '%Array.prototype.keys%': typeof Array.prototype.keys;
    '%Array.prototype.entries%': typeof Array.prototype.entries;
    '%Array.prototype.values%': typeof Array.prototype.values;
    '%Array.prototype.forEach%': typeof Array.prototype.forEach;
    '%Array.prototype.filter%': typeof Array.prototype.filter;
    '%Array.prototype.flat%': typeof Array.prototype.flat;
    '%Array.prototype.flatMap%': typeof Array.prototype.flatMap;
    '%Array.prototype.map%': typeof Array.prototype.map;
    '%Array.prototype.every%': typeof Array.prototype.every;
    '%Array.prototype.some%': typeof Array.prototype.some;
    '%Array.prototype.reduce%': typeof Array.prototype.reduce;
    '%Array.prototype.reduceRight%': typeof Array.prototype.reduceRight;
    '%Array.prototype.toLocaleString%': typeof Array.prototype.toLocaleString;
    '%Array.prototype.toString%': typeof Array.prototype.toString;
    '%Array.isArray%': typeof Array.isArray;
    '%Array.from%': typeof Array.from;
    '%Array.of%': typeof Array.of;
    '%ArrayBuffer.prototype%': ArrayBuffer;
    '%ArrayBuffer.prototype.byteLength%': (this: ArrayBuffer) => typeof ArrayBuffer.prototype.byteLength;
    '%ArrayBuffer.prototype.slice%': typeof ArrayBuffer.prototype.slice;
    '%ArrayBuffer.isView%': typeof ArrayBuffer.isView;
    '%ArrayIteratorPrototype.next%': IterableIterator<any>['next'];
    '%AsyncFromSyncIteratorPrototype.next%': AsyncGenerator<any>['next'];
    '%AsyncFromSyncIteratorPrototype.return%': AsyncGenerator<any>['return'];
    '%AsyncFromSyncIteratorPrototype.throw%': AsyncGenerator<any>['throw'];
    '%AsyncFunction.prototype%': typeof Function.prototype;
    '%AsyncGeneratorFunction.prototype%': AsyncGeneratorFunction;
    '%AsyncGeneratorFunction.prototype.prototype%': AsyncGenerator<any>;
    '%AsyncGeneratorFunction.prototype.prototype.next%': AsyncGenerator<any>['next'];
    '%AsyncGeneratorFunction.prototype.prototype.return%': AsyncGenerator<any>['return'];
    '%AsyncGeneratorFunction.prototype.prototype.throw%': AsyncGenerator<any>['throw'];
    '%Atomics.load%': typeof Atomics.load;
    '%Atomics.store%': typeof Atomics.store;
    '%Atomics.add%': typeof Atomics.add;
    '%Atomics.sub%': typeof Atomics.sub;
    '%Atomics.and%': typeof Atomics.and;
    '%Atomics.or%': typeof Atomics.or;
    '%Atomics.xor%': typeof Atomics.xor;
    '%Atomics.exchange%': typeof Atomics.exchange;
    '%Atomics.compareExchange%': typeof Atomics.compareExchange;
    '%Atomics.isLockFree%': typeof Atomics.isLockFree;
    '%Atomics.wait%': typeof Atomics.wait;
    '%Atomics.notify%': typeof Atomics.notify;
    '%BigInt.prototype%': typeof BigInt.prototype;
    '%BigInt.prototype.toLocaleString%': typeof BigInt.prototype.toLocaleString;
    '%BigInt.prototype.toString%': typeof BigInt.prototype.toString;
    '%BigInt.prototype.valueOf%': typeof BigInt.prototype.valueOf;
    '%BigInt.asUintN%': typeof BigInt.asUintN;
    '%BigInt.asIntN%': typeof BigInt.asIntN;
    '%BigInt64Array.prototype%': BigInt64Array;
    '%BigInt64Array.prototype.BYTES_PER_ELEMENT%': typeof BigInt64Array.prototype.BYTES_PER_ELEMENT;
    '%BigInt64Array.BYTES_PER_ELEMENT%': typeof BigInt64Array.BYTES_PER_ELEMENT;
    '%BigUint64Array.prototype%': BigUint64Array;
    '%BigUint64Array.prototype.BYTES_PER_ELEMENT%': typeof BigUint64Array.prototype.BYTES_PER_ELEMENT;
    '%BigUint64Array.BYTES_PER_ELEMENT%': typeof BigUint64Array.BYTES_PER_ELEMENT;
    '%Boolean.prototype%': typeof Boolean.prototype;
    '%Boolean.prototype.toString%': typeof Boolean.prototype.toString;
    '%Boolean.prototype.valueOf%': typeof Boolean.prototype.valueOf;
    '%DataView.prototype%': DataView;
    '%DataView.prototype.buffer%': (this: DataView) => typeof DataView.prototype.buffer;
    '%DataView.prototype.byteLength%': (this: DataView) => typeof DataView.prototype.byteLength;
    '%DataView.prototype.byteOffset%': (this: DataView) => typeof DataView.prototype.byteOffset;
    '%DataView.prototype.getInt8%': typeof DataView.prototype.getInt8;
    '%DataView.prototype.setInt8%': typeof DataView.prototype.setInt8;
    '%DataView.prototype.getUint8%': typeof DataView.prototype.getUint8;
    '%DataView.prototype.setUint8%': typeof DataView.prototype.setUint8;
    '%DataView.prototype.getInt16%': typeof DataView.prototype.getInt16;
    '%DataView.prototype.setInt16%': typeof DataView.prototype.setInt16;
    '%DataView.prototype.getUint16%': typeof DataView.prototype.getUint16;
    '%DataView.prototype.setUint16%': typeof DataView.prototype.setUint16;
    '%DataView.prototype.getInt32%': typeof DataView.prototype.getInt32;
    '%DataView.prototype.setInt32%': typeof DataView.prototype.setInt32;
    '%DataView.prototype.getUint32%': typeof DataView.prototype.getUint32;
    '%DataView.prototype.setUint32%': typeof DataView.prototype.setUint32;
    '%DataView.prototype.getFloat32%': typeof DataView.prototype.getFloat32;
    '%DataView.prototype.setFloat32%': typeof DataView.prototype.setFloat32;
    '%DataView.prototype.getFloat64%': typeof DataView.prototype.getFloat64;
    '%DataView.prototype.setFloat64%': typeof DataView.prototype.setFloat64;
    '%DataView.prototype.getBigInt64%': typeof DataView.prototype.getBigInt64;
    '%DataView.prototype.setBigInt64%': typeof DataView.prototype.setBigInt64;
    '%DataView.prototype.getBigUint64%': typeof DataView.prototype.getBigUint64;
    '%DataView.prototype.setBigUint64%': typeof DataView.prototype.setBigUint64;
    '%Date.prototype%': Date;
    '%Date.prototype.toString%': typeof Date.prototype.toString;
    '%Date.prototype.toDateString%': typeof Date.prototype.toDateString;
    '%Date.prototype.toTimeString%': typeof Date.prototype.toTimeString;
    '%Date.prototype.toISOString%': typeof Date.prototype.toISOString;
    '%Date.prototype.toUTCString%': typeof Date.prototype.toUTCString;
    '%Date.prototype.getDate%': typeof Date.prototype.getDate;
    '%Date.prototype.setDate%': typeof Date.prototype.setDate;
    '%Date.prototype.getDay%': typeof Date.prototype.getDay;
    '%Date.prototype.getFullYear%': typeof Date.prototype.getFullYear;
    '%Date.prototype.setFullYear%': typeof Date.prototype.setFullYear;
    '%Date.prototype.getHours%': typeof Date.prototype.getHours;
    '%Date.prototype.setHours%': typeof Date.prototype.setHours;
    '%Date.prototype.getMilliseconds%': typeof Date.prototype.getMilliseconds;
    '%Date.prototype.setMilliseconds%': typeof Date.prototype.setMilliseconds;
    '%Date.prototype.getMinutes%': typeof Date.prototype.getMinutes;
    '%Date.prototype.setMinutes%': typeof Date.prototype.setMinutes;
    '%Date.prototype.getMonth%': typeof Date.prototype.getMonth;
    '%Date.prototype.setMonth%': typeof Date.prototype.setMonth;
    '%Date.prototype.getSeconds%': typeof Date.prototype.getSeconds;
    '%Date.prototype.setSeconds%': typeof Date.prototype.setSeconds;
    '%Date.prototype.getTime%': typeof Date.prototype.getTime;
    '%Date.prototype.setTime%': typeof Date.prototype.setTime;
    '%Date.prototype.getTimezoneOffset%': typeof Date.prototype.getTimezoneOffset;
    '%Date.prototype.getUTCDate%': typeof Date.prototype.getUTCDate;
    '%Date.prototype.setUTCDate%': typeof Date.prototype.setUTCDate;
    '%Date.prototype.getUTCDay%': typeof Date.prototype.getUTCDay;
    '%Date.prototype.getUTCFullYear%': typeof Date.prototype.getUTCFullYear;
    '%Date.prototype.setUTCFullYear%': typeof Date.prototype.setUTCFullYear;
    '%Date.prototype.getUTCHours%': typeof Date.prototype.getUTCHours;
    '%Date.prototype.setUTCHours%': typeof Date.prototype.setUTCHours;
    '%Date.prototype.getUTCMilliseconds%': typeof Date.prototype.getUTCMilliseconds;
    '%Date.prototype.setUTCMilliseconds%': typeof Date.prototype.setUTCMilliseconds;
    '%Date.prototype.getUTCMinutes%': typeof Date.prototype.getUTCMinutes;
    '%Date.prototype.setUTCMinutes%': typeof Date.prototype.setUTCMinutes;
    '%Date.prototype.getUTCMonth%': typeof Date.prototype.getUTCMonth;
    '%Date.prototype.setUTCMonth%': typeof Date.prototype.setUTCMonth;
    '%Date.prototype.getUTCSeconds%': typeof Date.prototype.getUTCSeconds;
    '%Date.prototype.setUTCSeconds%': typeof Date.prototype.setUTCSeconds;
    '%Date.prototype.valueOf%': typeof Date.prototype.valueOf;
    '%Date.prototype.toJSON%': typeof Date.prototype.toJSON;
    '%Date.prototype.toLocaleString%': typeof Date.prototype.toLocaleString;
    '%Date.prototype.toLocaleDateString%': typeof Date.prototype.toLocaleDateString;
    '%Date.prototype.toLocaleTimeString%': typeof Date.prototype.toLocaleTimeString;
    '%Date.now%': typeof Date.now;
    '%Date.parse%': typeof Date.parse;
    '%Date.UTC%': typeof Date.UTC;
    '%Error.prototype%': Error;
    '%Error.prototype.name%': typeof Error.prototype.name;
    '%Error.prototype.message%': typeof Error.prototype.message;
    '%Error.prototype.toString%': typeof Error.prototype.toString;
    '%EvalError.prototype%': EvalError;
    '%EvalError.prototype.name%': typeof EvalError.prototype.name;
    '%EvalError.prototype.message%': typeof EvalError.prototype.message;
    '%Float32Array.prototype%': Float32Array;
    '%Float32Array.prototype.BYTES_PER_ELEMENT%': typeof Float32Array.prototype.BYTES_PER_ELEMENT;
    '%Float32Array.BYTES_PER_ELEMENT%': typeof Float32Array.BYTES_PER_ELEMENT;
    '%Float64Array.prototype%': Float64Array;
    '%Float64Array.prototype.BYTES_PER_ELEMENT%': typeof Float64Array.prototype.BYTES_PER_ELEMENT;
    '%Float64Array.BYTES_PER_ELEMENT%': typeof Float64Array.BYTES_PER_ELEMENT;
    '%Function.prototype%': typeof Function.prototype;
    '%Function.prototype.apply%': typeof Function.prototype.apply;
    '%Function.prototype.bind%': typeof Function.prototype.bind;
    '%Function.prototype.call%': typeof Function.prototype.call;
    '%Function.prototype.toString%': typeof Function.prototype.toString;
    '%GeneratorFunction.prototype%': GeneratorFunction;
    '%GeneratorFunction.prototype.prototype%': Generator<any>;
    '%GeneratorFunction.prototype.prototype.next%': Generator<any>['next'];
    '%GeneratorFunction.prototype.prototype.return%': Generator<any>['return'];
    '%GeneratorFunction.prototype.prototype.throw%': Generator<any>['throw'];
    '%Int8Array.prototype%': Int8Array;
    '%Int8Array.prototype.BYTES_PER_ELEMENT%': typeof Int8Array.prototype.BYTES_PER_ELEMENT;
    '%Int8Array.BYTES_PER_ELEMENT%': typeof Int8Array.BYTES_PER_ELEMENT;
    '%Int16Array.prototype%': Int16Array;
    '%Int16Array.prototype.BYTES_PER_ELEMENT%': typeof Int16Array.prototype.BYTES_PER_ELEMENT;
    '%Int16Array.BYTES_PER_ELEMENT%': typeof Int16Array.BYTES_PER_ELEMENT;
    '%Int32Array.prototype%': Int32Array;
    '%Int32Array.prototype.BYTES_PER_ELEMENT%': typeof Int32Array.prototype.BYTES_PER_ELEMENT;
    '%Int32Array.BYTES_PER_ELEMENT%': typeof Int32Array.BYTES_PER_ELEMENT;
    '%JSON.parse%': typeof JSON.parse;
    '%JSON.stringify%': typeof JSON.stringify;
    '%Map.prototype%': typeof Map.prototype;
    '%Map.prototype.get%': typeof Map.prototype.get;
    '%Map.prototype.set%': typeof Map.prototype.set;
    '%Map.prototype.has%': typeof Map.prototype.has;
    '%Map.prototype.delete%': typeof Map.prototype.delete;
    '%Map.prototype.clear%': typeof Map.prototype.clear;
    '%Map.prototype.entries%': typeof Map.prototype.entries;
    '%Map.prototype.forEach%': typeof Map.prototype.forEach;
    '%Map.prototype.keys%': typeof Map.prototype.keys;
    '%Map.prototype.size%': (this: Map<any, any>) => typeof Map.prototype.size;
    '%Map.prototype.values%': typeof Map.prototype.values;
    '%MapIteratorPrototype.next%': IterableIterator<any>['next'];
    '%Math.abs%': typeof Math.abs;
    '%Math.acos%': typeof Math.acos;
    '%Math.acosh%': typeof Math.acosh;
    '%Math.asin%': typeof Math.asin;
    '%Math.asinh%': typeof Math.asinh;
    '%Math.atan%': typeof Math.atan;
    '%Math.atanh%': typeof Math.atanh;
    '%Math.atan2%': typeof Math.atan2;
    '%Math.ceil%': typeof Math.ceil;
    '%Math.cbrt%': typeof Math.cbrt;
    '%Math.expm1%': typeof Math.expm1;
    '%Math.clz32%': typeof Math.clz32;
    '%Math.cos%': typeof Math.cos;
    '%Math.cosh%': typeof Math.cosh;
    '%Math.exp%': typeof Math.exp;
    '%Math.floor%': typeof Math.floor;
    '%Math.fround%': typeof Math.fround;
    '%Math.hypot%': typeof Math.hypot;
    '%Math.imul%': typeof Math.imul;
    '%Math.log%': typeof Math.log;
    '%Math.log1p%': typeof Math.log1p;
    '%Math.log2%': typeof Math.log2;
    '%Math.log10%': typeof Math.log10;
    '%Math.max%': typeof Math.max;
    '%Math.min%': typeof Math.min;
    '%Math.pow%': typeof Math.pow;
    '%Math.random%': typeof Math.random;
    '%Math.round%': typeof Math.round;
    '%Math.sign%': typeof Math.sign;
    '%Math.sin%': typeof Math.sin;
    '%Math.sinh%': typeof Math.sinh;
    '%Math.sqrt%': typeof Math.sqrt;
    '%Math.tan%': typeof Math.tan;
    '%Math.tanh%': typeof Math.tanh;
    '%Math.trunc%': typeof Math.trunc;
    '%Math.E%': typeof Math.E;
    '%Math.LN10%': typeof Math.LN10;
    '%Math.LN2%': typeof Math.LN2;
    '%Math.LOG10E%': typeof Math.LOG10E;
    '%Math.LOG2E%': typeof Math.LOG2E;
    '%Math.PI%': typeof Math.PI;
    '%Math.SQRT1_2%': typeof Math.SQRT1_2;
    '%Math.SQRT2%': typeof Math.SQRT2;
    '%Number.prototype%': typeof Number.prototype;
    '%Number.prototype.toExponential%': typeof Number.prototype.toExponential;
    '%Number.prototype.toFixed%': typeof Number.prototype.toFixed;
    '%Number.prototype.toPrecision%': typeof Number.prototype.toPrecision;
    '%Number.prototype.toString%': typeof Number.prototype.toString;
    '%Number.prototype.valueOf%': typeof Number.prototype.valueOf;
    '%Number.prototype.toLocaleString%': typeof Number.prototype.toLocaleString;
    '%Number.isFinite%': typeof Number.isFinite;
    '%Number.isInteger%': typeof Number.isInteger;
    '%Number.isNaN%': typeof Number.isNaN;
    '%Number.isSafeInteger%': typeof Number.isSafeInteger;
    '%Number.parseFloat%': typeof Number.parseFloat;
    '%Number.parseInt%': typeof Number.parseInt;
    '%Number.MAX_VALUE%': typeof Number.MAX_VALUE;
    '%Number.MIN_VALUE%': typeof Number.MIN_VALUE;
    '%Number.NaN%': typeof Number.NaN;
    '%Number.NEGATIVE_INFINITY%': typeof Number.NEGATIVE_INFINITY;
    '%Number.POSITIVE_INFINITY%': typeof Number.POSITIVE_INFINITY;
    '%Number.MAX_SAFE_INTEGER%': typeof Number.MAX_SAFE_INTEGER;
    '%Number.MIN_SAFE_INTEGER%': typeof Number.MIN_SAFE_INTEGER;
    '%Number.EPSILON%': typeof Number.EPSILON;
    '%Object.prototype%': typeof Object.prototype;
    '%Object.prototype.hasOwnProperty%': typeof Object.prototype.hasOwnProperty;
    '%Object.prototype.isPrototypeOf%': typeof Object.prototype.isPrototypeOf;
    '%Object.prototype.propertyIsEnumerable%': typeof Object.prototype.propertyIsEnumerable;
    '%Object.prototype.toString%': typeof Object.prototype.toString;
    '%Object.prototype.valueOf%': typeof Object.prototype.valueOf;
    '%Object.prototype.toLocaleString%': typeof Object.prototype.toLocaleString;
    '%Object.assign%': typeof Object.assign;
    '%Object.getOwnPropertyDescriptor%': typeof Object.getOwnPropertyDescriptor;
    '%Object.getOwnPropertyDescriptors%': typeof Object.getOwnPropertyDescriptors;
    '%Object.getOwnPropertyNames%': typeof Object.getOwnPropertyNames;
    '%Object.getOwnPropertySymbols%': typeof Object.getOwnPropertySymbols;
    '%Object.is%': typeof Object.is;
    '%Object.preventExtensions%': typeof Object.preventExtensions;
    '%Object.seal%': typeof Object.seal;
    '%Object.create%': typeof Object.create;
    '%Object.defineProperties%': typeof Object.defineProperties;
    '%Object.defineProperty%': typeof Object.defineProperty;
    '%Object.freeze%': typeof Object.freeze;
    '%Object.getPrototypeOf%': typeof Object.getPrototypeOf;
    '%Object.setPrototypeOf%': typeof Object.setPrototypeOf;
    '%Object.isExtensible%': typeof Object.isExtensible;
    '%Object.isFrozen%': typeof Object.isFrozen;
    '%Object.isSealed%': typeof Object.isSealed;
    '%Object.keys%': typeof Object.keys;
    '%Object.entries%': typeof Object.entries;
    '%Object.fromEntries%': typeof Object.fromEntries;
    '%Object.values%': typeof Object.values;
    '%Promise.prototype%': typeof Promise.prototype;
    '%Promise.prototype.then%': typeof Promise.prototype.then;
    '%Promise.prototype.catch%': typeof Promise.prototype.catch;
    '%Promise.prototype.finally%': typeof Promise.prototype.finally;
    '%Promise.all%': typeof Promise.all;
    '%Promise.race%': typeof Promise.race;
    '%Promise.resolve%': typeof Promise.resolve;
    '%Promise.reject%': typeof Promise.reject;
    '%Promise.allSettled%': typeof Promise.allSettled;
    '%Promise.any%': typeof Promise.any;
    '%Proxy.revocable%': typeof Proxy.revocable;
    '%RangeError.prototype%': RangeError;
    '%RangeError.prototype.name%': typeof RangeError.prototype.name;
    '%RangeError.prototype.message%': typeof RangeError.prototype.message;
    '%ReferenceError.prototype%': ReferenceError;
    '%ReferenceError.prototype.name%': typeof ReferenceError.prototype.name;
    '%ReferenceError.prototype.message%': typeof ReferenceError.prototype.message;
    '%Reflect.defineProperty%': typeof Reflect.defineProperty;
    '%Reflect.deleteProperty%': typeof Reflect.deleteProperty;
    '%Reflect.apply%': typeof Reflect.apply;
    '%Reflect.construct%': typeof Reflect.construct;
    '%Reflect.get%': typeof Reflect.get;
    '%Reflect.getOwnPropertyDescriptor%': typeof Reflect.getOwnPropertyDescriptor;
    '%Reflect.getPrototypeOf%': typeof Reflect.getPrototypeOf;
    '%Reflect.has%': typeof Reflect.has;
    '%Reflect.isExtensible%': typeof Reflect.isExtensible;
    '%Reflect.ownKeys%': typeof Reflect.ownKeys;
    '%Reflect.preventExtensions%': typeof Reflect.preventExtensions;
    '%Reflect.set%': typeof Reflect.set;
    '%Reflect.setPrototypeOf%': typeof Reflect.setPrototypeOf;
    '%RegExp.prototype%': RegExp;
    '%RegExp.prototype.exec%': typeof RegExp.prototype.exec;
    '%RegExp.prototype.dotAll%': (this: RegExp) => typeof RegExp.prototype.dotAll;
    '%RegExp.prototype.flags%': (this: RegExp) => typeof RegExp.prototype.flags;
    '%RegExp.prototype.global%': (this: RegExp) => typeof RegExp.prototype.global;
    '%RegExp.prototype.ignoreCase%': (this: RegExp) => typeof RegExp.prototype.ignoreCase;
    '%RegExp.prototype.multiline%': (this: RegExp) => typeof RegExp.prototype.multiline;
    '%RegExp.prototype.source%': (this: RegExp) => typeof RegExp.prototype.source;
    '%RegExp.prototype.sticky%': (this: RegExp) => typeof RegExp.prototype.sticky;
    '%RegExp.prototype.unicode%': (this: RegExp) => typeof RegExp.prototype.unicode;
    '%RegExp.prototype.compile%': typeof RegExp.prototype.compile;
    '%RegExp.prototype.toString%': typeof RegExp.prototype.toString;
    '%RegExp.prototype.test%': typeof RegExp.prototype.test;
    '%Set.prototype%': typeof Set.prototype;
    '%Set.prototype.has%': typeof Set.prototype.has;
    '%Set.prototype.add%': typeof Set.prototype.add;
    '%Set.prototype.delete%': typeof Set.prototype.delete;
    '%Set.prototype.clear%': typeof Set.prototype.clear;
    '%Set.prototype.entries%': typeof Set.prototype.entries;
    '%Set.prototype.forEach%': typeof Set.prototype.forEach;
    '%Set.prototype.size%': (this: Set<any>) => typeof Set.prototype.size;
    '%Set.prototype.values%': typeof Set.prototype.values;
    '%Set.prototype.keys%': typeof Set.prototype.keys;
    '%SetIteratorPrototype.next%': IterableIterator<any>['next'];
    '%SharedArrayBuffer.prototype%': SharedArrayBuffer;
    '%SharedArrayBuffer.prototype.byteLength%': (this: SharedArrayBuffer) => typeof SharedArrayBuffer.prototype.byteLength;
    '%SharedArrayBuffer.prototype.slice%': typeof SharedArrayBuffer.prototype.slice;
    '%String.prototype%': typeof String.prototype;
    '%String.prototype.length%': typeof String.prototype.length;
    '%String.prototype.anchor%': typeof String.prototype.anchor;
    '%String.prototype.big%': typeof String.prototype.big;
    '%String.prototype.blink%': typeof String.prototype.blink;
    '%String.prototype.bold%': typeof String.prototype.bold;
    '%String.prototype.charAt%': typeof String.prototype.charAt;
    '%String.prototype.charCodeAt%': typeof String.prototype.charCodeAt;
    '%String.prototype.codePointAt%': typeof String.prototype.codePointAt;
    '%String.prototype.concat%': typeof String.prototype.concat;
    '%String.prototype.endsWith%': typeof String.prototype.endsWith;
    '%String.prototype.fontcolor%': typeof String.prototype.fontcolor;
    '%String.prototype.fontsize%': typeof String.prototype.fontsize;
    '%String.prototype.fixed%': typeof String.prototype.fixed;
    '%String.prototype.includes%': typeof String.prototype.includes;
    '%String.prototype.indexOf%': typeof String.prototype.indexOf;
    '%String.prototype.italics%': typeof String.prototype.italics;
    '%String.prototype.lastIndexOf%': typeof String.prototype.lastIndexOf;
    '%String.prototype.link%': typeof String.prototype.link;
    '%String.prototype.localeCompare%': typeof String.prototype.localeCompare;
    '%String.prototype.match%': typeof String.prototype.match;
    '%String.prototype.matchAll%': typeof String.prototype.matchAll;
    '%String.prototype.normalize%': typeof String.prototype.normalize;
    '%String.prototype.padEnd%': typeof String.prototype.padEnd;
    '%String.prototype.padStart%': typeof String.prototype.padStart;
    '%String.prototype.repeat%': typeof String.prototype.repeat;
    '%String.prototype.replace%': typeof String.prototype.replace;
    '%String.prototype.search%': typeof String.prototype.search;
    '%String.prototype.slice%': typeof String.prototype.slice;
    '%String.prototype.small%': typeof String.prototype.small;
    '%String.prototype.split%': typeof String.prototype.split;
    '%String.prototype.strike%': typeof String.prototype.strike;
    '%String.prototype.sub%': typeof String.prototype.sub;
    '%String.prototype.substr%': typeof String.prototype.substr;
    '%String.prototype.substring%': typeof String.prototype.substring;
    '%String.prototype.sup%': typeof String.prototype.sup;
    '%String.prototype.startsWith%': typeof String.prototype.startsWith;
    '%String.prototype.toString%': typeof String.prototype.toString;
    '%String.prototype.trim%': typeof String.prototype.trim;
    '%String.prototype.trimStart%': typeof String.prototype.trimStart;
    '%String.prototype.trimLeft%': typeof String.prototype.trimLeft;
    '%String.prototype.trimEnd%': typeof String.prototype.trimEnd;
    '%String.prototype.trimRight%': typeof String.prototype.trimRight;
    '%String.prototype.toLocaleLowerCase%': typeof String.prototype.toLocaleLowerCase;
    '%String.prototype.toLocaleUpperCase%': typeof String.prototype.toLocaleUpperCase;
    '%String.prototype.toLowerCase%': typeof String.prototype.toLowerCase;
    '%String.prototype.toUpperCase%': typeof String.prototype.toUpperCase;
    '%String.prototype.valueOf%': typeof String.prototype.valueOf;
    '%String.prototype.replaceAll%': typeof String.prototype.replaceAll;
    '%String.fromCharCode%': typeof String.fromCharCode;
    '%String.fromCodePoint%': typeof String.fromCodePoint;
    '%String.raw%': typeof String.raw;
    '%StringIteratorPrototype.next%': IterableIterator<string>['next'];
    '%Symbol.prototype%': typeof Symbol.prototype;
    '%Symbol.prototype.toString%': typeof Symbol.prototype.toString;
    '%Symbol.prototype.valueOf%': typeof Symbol.prototype.valueOf;
    '%Symbol.prototype.description%': (this: symbol | Symbol) => typeof Symbol.prototype.description;
    '%Symbol.for%': typeof Symbol.for;
    '%Symbol.keyFor%': typeof Symbol.keyFor;
    '%Symbol.asyncIterator%': typeof Symbol.asyncIterator;
    '%Symbol.hasInstance%': typeof Symbol.hasInstance;
    '%Symbol.isConcatSpreadable%': typeof Symbol.isConcatSpreadable;
    '%Symbol.iterator%': typeof Symbol.iterator;
    '%Symbol.match%': typeof Symbol.match;
    '%Symbol.matchAll%': typeof Symbol.matchAll;
    '%Symbol.replace%': typeof Symbol.replace;
    '%Symbol.search%': typeof Symbol.search;
    '%Symbol.species%': typeof Symbol.species;
    '%Symbol.split%': typeof Symbol.split;
    '%Symbol.toPrimitive%': typeof Symbol.toPrimitive;
    '%Symbol.toStringTag%': typeof Symbol.toStringTag;
    '%Symbol.unscopables%': typeof Symbol.unscopables;
    '%SyntaxError.prototype%': SyntaxError;
    '%SyntaxError.prototype.name%': typeof SyntaxError.prototype.name;
    '%SyntaxError.prototype.message%': typeof SyntaxError.prototype.message;
    '%TypedArray.prototype%': TypedArrayPrototype;
    '%TypedArray.prototype.buffer%': (this: TypedArrayLike) => TypedArrayPrototype['buffer'];
    '%TypedArray.prototype.byteLength%': (this: TypedArrayLike) => TypedArrayPrototype['byteLength'];
    '%TypedArray.prototype.byteOffset%': (this: TypedArrayLike) => TypedArrayPrototype['byteOffset'];
    '%TypedArray.prototype.length%': (this: TypedArrayLike) => TypedArrayPrototype['length'];
    '%TypedArray.prototype.entries%': TypedArrayPrototype['entries'];
    '%TypedArray.prototype.keys%': TypedArrayPrototype['keys'];
    '%TypedArray.prototype.values%': TypedArrayPrototype['values'];
    '%TypedArray.prototype.copyWithin%': TypedArrayPrototype['copyWithin'];
    '%TypedArray.prototype.every%': TypedArrayPrototype['every'];
    '%TypedArray.prototype.fill%': TypedArrayPrototype['fill'];
    '%TypedArray.prototype.filter%': TypedArrayPrototype['filter'];
    '%TypedArray.prototype.find%': TypedArrayPrototype['find'];
    '%TypedArray.prototype.findIndex%': TypedArrayPrototype['findIndex'];
    '%TypedArray.prototype.forEach%': TypedArrayPrototype['forEach'];
    '%TypedArray.prototype.includes%': TypedArrayPrototype['includes'];
    '%TypedArray.prototype.indexOf%': TypedArrayPrototype['indexOf'];
    '%TypedArray.prototype.join%': TypedArrayPrototype['join'];
    '%TypedArray.prototype.lastIndexOf%': TypedArrayPrototype['lastIndexOf'];
    '%TypedArray.prototype.map%': TypedArrayPrototype['map'];
    '%TypedArray.prototype.reverse%': TypedArrayPrototype['reverse'];
    '%TypedArray.prototype.reduce%': TypedArrayPrototype['reduce'];
    '%TypedArray.prototype.reduceRight%': TypedArrayPrototype['reduceRight'];
    '%TypedArray.prototype.set%': TypedArrayPrototype['set'];
    '%TypedArray.prototype.slice%': TypedArrayPrototype['slice'];
    '%TypedArray.prototype.some%': TypedArrayPrototype['some'];
    '%TypedArray.prototype.sort%': TypedArrayPrototype['sort'];
    '%TypedArray.prototype.subarray%': TypedArrayPrototype['subarray'];
    '%TypedArray.prototype.toLocaleString%': TypedArrayPrototype['toLocaleString'];
    '%TypedArray.prototype.toString%': TypedArrayPrototype['toString'];
    '%TypedArray.of%': TypedArrayConstructor['of'];
    '%TypedArray.from%': TypedArrayConstructor['from'];
    '%TypeError.prototype%': TypeError;
    '%TypeError.prototype.name%': typeof TypeError.prototype.name;
    '%TypeError.prototype.message%': typeof TypeError.prototype.message;
    '%Uint8Array.prototype%': Uint8Array;
    '%Uint8Array.prototype.BYTES_PER_ELEMENT%': typeof Uint8Array.prototype.BYTES_PER_ELEMENT;
    '%Uint8Array.BYTES_PER_ELEMENT%': typeof Uint8Array.BYTES_PER_ELEMENT;
    '%Uint8ClampedArray.prototype%': Uint8ClampedArray;
    '%Uint8ClampedArray.prototype.BYTES_PER_ELEMENT%': typeof Uint8ClampedArray.prototype.BYTES_PER_ELEMENT;
    '%Uint8ClampedArray.BYTES_PER_ELEMENT%': typeof Uint8ClampedArray.BYTES_PER_ELEMENT;
    '%Uint16Array.prototype%': Uint16Array;
    '%Uint16Array.prototype.BYTES_PER_ELEMENT%': typeof Uint16Array.prototype.BYTES_PER_ELEMENT;
    '%Uint16Array.BYTES_PER_ELEMENT%': typeof Uint16Array.BYTES_PER_ELEMENT;
    '%Uint32Array.prototype%': Uint32Array;
    '%Uint32Array.prototype.BYTES_PER_ELEMENT%': typeof Uint32Array.prototype.BYTES_PER_ELEMENT;
    '%Uint32Array.BYTES_PER_ELEMENT%': typeof Uint32Array.BYTES_PER_ELEMENT;
    '%URIError.prototype%': URIError;
    '%URIError.prototype.name%': typeof URIError.prototype.name;
    '%URIError.prototype.message%': typeof URIError.prototype.message;
    '%WeakMap.prototype%': typeof WeakMap.prototype;
    '%WeakMap.prototype.delete%': typeof WeakMap.prototype.delete;
    '%WeakMap.prototype.get%': typeof WeakMap.prototype.get;
    '%WeakMap.prototype.set%': typeof WeakMap.prototype.set;
    '%WeakMap.prototype.has%': typeof WeakMap.prototype.has;
    '%WeakSet.prototype%': typeof WeakSet.prototype;
    '%WeakSet.prototype.delete%': typeof WeakSet.prototype.delete;
    '%WeakSet.prototype.has%': typeof WeakSet.prototype.has;
    '%WeakSet.prototype.add%': typeof WeakSet.prototype.add;
}
