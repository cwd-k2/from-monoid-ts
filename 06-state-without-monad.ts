function testState() {
  const splitString = (s: string) => s.split(" ");
  const countArray = (a: unknown[]) => a.length;
  const toStrHex = (n: number) => n.toString(16);

  const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  let i = 0;

  const s = alphabets;

  i = i + 1;
  const a = splitString(s)
  i = i + 1;
  const n = countArray(a);
  i = i + 1;
  const h = toStrHex(n);

  console.log([h, i])
}

testState();
