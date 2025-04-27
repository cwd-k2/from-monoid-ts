export type Just<A> = { maybe: "Just"; value: A };
export type Nothing = { maybe: "Nothing" };
export type Maybe<A> = Just<A> | Nothing;

export const just: <A>(x: A) => Just<A> = (x) => ({ maybe: "Just", value: x });
export const nothing: () => Nothing = () => ({ maybe: "Nothing" });

export const isJust: <A>(x: Maybe<A>) => x is Just<A> = (x) =>
  x.maybe === "Just";
