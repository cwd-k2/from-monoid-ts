import { just, nothing, isJust } from "./maybe.ts";

function testMaybe() {
  console.log("Testing Maybe.");

  const add = (a: number) => (b: number) => just(a + b);
  const sub = (a: number) => (b: number) => just(a - b);
  const div = (n: number) => (d: number) => (d === 0 ? nothing() : just(n / d));
  const mul = (a: number) => (b: number) => just(a * b);

  const func = (x: number) => {
    const r1 = add(1)(x);

    if (isJust(r1)) {
      const r2 = sub(2)(r1.value);
      if (isJust(r2)) {
        const r3 = mul(3)(r2.value);
        if (isJust(r3)) {
          const r4 = div(3)(r3.value);
          if (isJust(r4)) {
            return add(1)(r4.value);
          } else {
            return nothing();
          }
        } else {
          return nothing();
        }
      } else {
        return nothing();
      }
    } else {
      return nothing();
    }
  };

  console.log(func(1));
  console.log(func(2));
}

testMaybe();
