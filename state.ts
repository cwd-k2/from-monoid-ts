import type { Func } from "./types.ts";

export type State<S, A> = {
  runState: Func<S, [A, S]>;
};

export const state = <S, A>(f: Func<S, [A, S]>) =>
  ({ runState: f }) as State<S, A>;
export const get = state(<S>(s: S) => [s, s]);
export const put = <S>(s: S) => state((_: S) => [, s]);
