function testPromise() {
  console.log("Testing Promise.");

  const splitString = (s: string) => Promise.resolve(s.split(" "));
  const arrayLength = (a: string[]) => Promise.resolve(a.length);
  const toHexString = (n: number) => Promise.resolve(n.toString(16));

  const func = async (s: string) => {
    const a = await splitString(s);
    const n = await arrayLength(a);
    const r = await toHexString(n);
    return r;
  };

  const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

  func(alphabets).then((r) => console.log(r));
}

testPromise();
