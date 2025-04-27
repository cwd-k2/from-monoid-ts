import type { Func, BiOp } from "./types.ts";

type C = number;
type T = Func<C, Promise<C>>;
let eta: T;
let mu: BiOp<T>;

eta = (x) => Promise.resolve(x);
mu = (a) => (b) => (x) => a(x).then(b);

function testPromise() {
  console.log("Testing Promise.");

  const f1: T = (x) => Promise.resolve(x + 1);
  const f2: T = (x) => Promise.resolve(x + 2);
  const f3: T = (x) => Promise.resolve(x * 3);

  // prettier-ignore
  const func = mu(x =>
        f1(x))(mu(y =>
        f2(y))(mu(z =>
        f3(z))(eta)));

  // prettier-ignore
  func(0).then((v) => console.log(v));
}

testPromise();
