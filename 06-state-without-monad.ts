function testState() {
  let i = 0;

  const increment = () => i++;

  const splitString = (s: string) => {
    increment();
    return s.split(" ");
  };

  const arrayLength = (a: unknown[]) => {
    increment();
    return a.length;
  };

  const toHexString = (n: number) => {
    increment();
    return n.toString(16);
  };

  const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

  const s = alphabets;

  const a = splitString(s);
  const n = arrayLength(a);
  const h = toHexString(n);

  console.log([h, i]);
}

testState();
