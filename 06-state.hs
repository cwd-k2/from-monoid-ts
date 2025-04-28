import           Control.Monad.State (State (..), get, put, state)
import           Text.Printf         (printf)

increment :: State Int ()
increment = do
  i <- get
  put (i + 1)

splitString :: String -> State Int [String]
splitString s = do
  increment
  return $ words s

arrayLength :: [String] -> State Int Int
arrayLength a = do
  increment
  return $ length a

toHexString :: Int -> State Int String
toHexString n = do
  increment
  return $ printf "%x" n

func :: String -> State Int String
func = \s -> do
  a <- splitString s
  n <- arrayLength a
  r <- toHexString n
  return r
