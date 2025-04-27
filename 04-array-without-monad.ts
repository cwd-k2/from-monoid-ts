function testArray() {
  const f1 = (x: number) => [x - 1, x, x + 1];
  const f2 = (x: number) => [x - 2, x, x + 2];
  const f3 = (x: number) => [x - 3, x, x + 3];

  const func = (x: number) => {
    const arr = [];

    for (const a of f1(x)) {
      for (const b of f2(a)) {
        for (const c of f3(b)) {
          arr.push(c);
        }
      }
    }

    return arr;
  }

  console.log(func(1));
}

testArray();
