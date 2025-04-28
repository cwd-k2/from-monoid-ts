import type { Func } from "./types.ts";

type T<A, B> = Func<A, Promise<B>>;

// eta: T<A, A>
const eta = <A>(x: A) => Promise.resolve<A>(x);

// mu: T<A, B> -> T<B, C> -> T<A, C>
// prettier-ignore
const mu = <A, B, C>(a: T<A, B>) => (b: T<B, C>): T<A, C> =>
  (x: A) => a(x).then(b);

function testPromise() {
  console.log("Testing Promise.");

  const splitString: T<string, string[]> = (s) => eta(s.split(" "));
  const arrayLength: T<string[], number> = (a) => eta(a.length);
  const toHexString: T<number, string> = (n) => eta(n.toString(16));

  // prettier-ignore
  const func      = mu((s: string)   =>
    splitString(s))(mu((a: string[]) =>
    arrayLength(a))(mu((n: number)   =>
    toHexString(n))(eta)));

  const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  func(alphabets).then((r) => console.log(r));
}

testPromise();
