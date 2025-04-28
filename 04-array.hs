f1 :: Int -> [Int]
f1 x = [x - 1, x, x + 1]

f2 :: Int -> [Int]
f2 x = [x - 2, x, x + 2]

f3 :: Int -> [Int]
f3 x = [x - 3, x, x + 3]

func :: Int -> [Int]
func = \x -> do
  y <- f1 x
  z <- f2 y
  w <- f3 z
  return w

