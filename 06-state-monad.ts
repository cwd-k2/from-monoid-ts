import type { Func } from "./types.ts";
import type { State } from "./state.ts";
import { state, get, put } from "./state.ts";

// 今回は状態として number を持ち，カウンタとするものを考える
type I = number;
type T<A, B> = Func<A, State<I, B>>;

// eta: T<A, A>
const eta = <A>(a: A): State<I, A> => state((s) => [a, s]);

// mu: T<A, B> -> T<B, C> -> T<A, C>
// prettier-ignore
const mu = <A, B, C>(a: T<A, B>) => (b: T<B, C>): T<A, C> =>
  (x: A) =>
    state((s: I) => {
      const [r1, s1] = a(x).runState(s);
      return b(r1).runState(s1);
    });

function testState() {
  console.log("Testing State.");

  // カウンタをインクリメントする (副作用)
  // prettier-ignore
  const increment =
    mu((_) => get as State<I, I>)((s) => put(s + 1)) as T<undefined, undefined>;

  // カウンタをインクリメントしながら値を受け流す
  // 処理の途中に挟みこんで使う
  const incrementP = <V>(v: V) =>
    state((s: I) => [v, increment(undefined).runState(s)[1]]);

  // カウンタをインクリメントしながら文字列を分割
  // prettier-ignore
  const splitString =
    mu(incrementP)((s: string) => eta(s.split(" "))) as T<string, string[]>;
  // カウンタをインクリメントしながら配列の長さを数える
  // prettier-ignore
  const countArray =
    mu(incrementP)((a: unknown[]) => eta(a.length)) as T<unknown[], number>;
  // カウンタをインクリメントしながら数を16進数文字列に変更する
  // prettier-ignore
  const toStrHex =
    mu(incrementP)((n: number) => eta(n.toString(16))) as T<number, string>;

  // prettier-ignore
  const fun2 =      mu((s: string)   =>
    splitString(s))(mu((a: string[]) =>
    countArray(a)) (mu((n: number)   =>
    toStrHex(n))   (eta))) as T<string, string>;

  const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  console.log(fun2(alphabets).runState(0));
}

testState();
