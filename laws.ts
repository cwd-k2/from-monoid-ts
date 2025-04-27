import type { BiOp } from "./types.ts";

export function unitLaw<T>(args: {
  mu: BiOp<T>;
  eta: T;
  t: T;
  compare?: (x: T, y: T) => boolean;
}) {
  const { mu, eta, t, compare = (x: T, y: T) => x === y } = args;

  const r1 = mu(eta)(t);
  const r2 = mu(t)(eta);

  if (!compare(r1, r2)) throw new Error("μ(η・t) ≠ μ(t・η)");
  if (!compare(r1, t)) throw new Error("μ(η・t) ≠ t");
  if (!compare(r2, t)) throw new Error("μ(t・η) ≠ t");

  console.log("Unit Law is satisfied.");
}

export function associativityLaw<T>(args: {
  mu: BiOp<T>;
  a: T;
  b: T;
  c: T;
  compare?: (x: T, y: T) => boolean;
}) {
  const { mu, a, b, c, compare = (x: T, y: T) => x === y } = args;

  const r1 = mu(mu(a)(b))(c);
  const r2 = mu(a)(mu(b)(c));

  if (!compare(r1, r2)) throw new Error("μ(μ(a・b)・c) ≠ μ(a・μ(b・c))");

  console.log("Associativity Law is satisfied.");
}
