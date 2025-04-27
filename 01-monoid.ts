import type { Func, BiOp } from "./types.ts";
import { unitLaw, associativityLaw } from "./laws.ts";

type C = number;
type T = Func<void, C>;
let eta: T;
let mu: BiOp<T>;

eta = () => 1;
mu = (a) => (b) => () => a() * b();

unitLaw({
  mu,
  eta,
  t: () => 2,
  compare: (x, y) => x() === y(),
});

associativityLaw({
  mu,
  a: () => 2,
  b: () => 3,
  c: () => 4,
  compare: (x, y) => x() === y(),
});
