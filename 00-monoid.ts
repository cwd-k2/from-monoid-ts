import type { BiOp } from './types.ts'
import { unitLaw, associativityLaw } from "./laws.ts";

type T = number;
let eta: T;
let mu: BiOp<T>;

eta = 1;
mu = (a) => (b) => a * b;

unitLaw({
  mu,
  eta,
  t: 2,
});

associativityLaw({
  mu,
  a: 2,
  b: 3,
  c: 4,
});
