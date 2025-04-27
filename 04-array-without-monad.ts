function testArray() {
  const f1 = (x: number) => [x - 1, x, x + 1];
  const f2 = (x: number) => [x - 2, x, x + 2];
  const f3 = (x: number) => [x - 3, x, x + 3];

  const func = (x: number) => {
    const arr = [];

    const r1 = f1(x);
    for (const a of r1) {
      const r2 = f2(a);
      for (const b of r2) {
        const r3 = f3(b);
        for (const c of r3) {
          arr.push(c);
        }
      }
    }

    return arr;
  };

  console.log(func(1));
}

testArray();
