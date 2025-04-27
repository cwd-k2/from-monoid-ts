import type { Func, BiOp } from "./types.ts";
import { unitLaw, associativityLaw } from "./laws.ts";

const compareArray = <A>(x: Array<A>, y: Array<A>): boolean =>
  x.length === y.length && x.every((v, i) => v === y[i]);

type C = number;
type T = Func<C, Array<C>>;
let eta: T;
let mu: BiOp<T>;

eta = (x) => [x];
mu = (a) => (b) => (x) => a(x).flatMap(b);

unitLaw({
  mu,
  eta,
  t: ((x) => [x + 2]) as T,
  compare: (x, y) => compareArray(x(0), y(0)),
});

associativityLaw({
  mu,
  a: ((x) => [x + 2]) as T,
  b: ((x) => [x + 3]) as T,
  c: ((x) => [x + 4]) as T,
  compare: (x, y) => compareArray(x(0), y(0)),
});

function testArray() {
  console.log("Testing Array.");

  const f1: T = (x) => [x - 1, x, x + 1];
  const f2: T = (x) => [x - 2, x, x + 2];
  const f3: T = (x) => [x - 3, x, x + 3];

  // prettier-ignore
  const func = mu(x =>
        f1(x))(mu(y =>
        f2(y))(mu(z =>
        f3(z))(eta)));

  console.log(func(1));
}

testArray();
