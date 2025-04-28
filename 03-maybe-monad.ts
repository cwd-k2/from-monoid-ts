import type { Func, BiOp } from "./types.ts";
import { unitLaw, associativityLaw } from "./laws.ts";
import type { Maybe } from "./maybe.ts";
import { just, nothing, isJust } from "./maybe.ts";

const compareMaybe = <A>(x: Maybe<A>, y: Maybe<A>): boolean =>
  isJust(x) ? isJust(y) && x.value === y.value : y.maybe === "Nothing";

type C = number;
type T = Func<C, Maybe<C>>;
let eta: T;
let mu: BiOp<T>;

eta = just;
mu = (a) => (b) => (x) => {
  const result = a(x);
  return isJust(result) ? b(result.value) : nothing();
};

unitLaw({
  eta,
  mu,
  t: ((x) => just(x + 2)) as T,
  compare: (x, y) => compareMaybe(x(0), y(0)),
});

associativityLaw({
  mu,
  a: ((x) => just(x + 2)) as T,
  b: ((x) => just(x + 3)) as T,
  c: ((x) => just(x + 4)) as T,
  compare: (x, y) => compareMaybe(x(0), y(0)),
});

function testMaybe() {
  console.log("Testing Maybe.");

  const add: Func<C, T> = (a) => (b) => just(a + b);
  const sub: Func<C, T> = (a) => (b) => just(a - b);
  const div: Func<C, T> = (n) => (d) =>
    d === 0 ? nothing() : just(n / d);
  const mul: Func<C, T> = (a) => (b) => just(a * b);

  // prettier-ignore
  const func = mu(x =>
    add(1)(x))(mu(y =>
    sub(2)(y))(mu(z =>
    mul(3)(z))(mu(w =>
    div(3)(w))(mu(v =>
    add(1)(v))(eta))))
  );

  console.log(func(1));
  console.log(func(2));
}

testMaybe();
