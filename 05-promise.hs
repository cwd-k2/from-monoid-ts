import           Text.Printf (printf)

splitString :: String -> IO [String]
splitString s = return $ words s

arrayLength :: [String] -> IO Int
arrayLength a = return $ length a

toHexString :: Int -> IO String
toHexString n = return $ printf "%x" n

func :: String -> IO String
func = \s -> do
  a <- splitString s
  n <- arrayLength a
  r <- toHexString n
  return r

