export type Func<A, B> = (_: A) => B;
export type BiOp<T> = (_: T) => (_: T) => T;
