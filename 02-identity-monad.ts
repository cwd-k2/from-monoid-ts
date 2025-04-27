import type { Func, BiOp } from "./types.ts";
import { unitLaw, associativityLaw } from "./laws.ts";

type C = number;
type T = Func<C, C>;
let eta: T;
let mu: BiOp<T>;

eta = (x) => x;
mu = (a) => (b) => (x) => b(a(x));

unitLaw({
  mu,
  eta,
  t: ((x) => x + 2) as T,
  compare: (x, y) => x(0) === y(0),
});

associativityLaw({
  mu,
  a: ((x) => x + 2) as T,
  b: ((x) => x + 3) as T,
  c: ((x) => x + 4) as T,
  compare: (x, y) => x(0) === y(0),
});
