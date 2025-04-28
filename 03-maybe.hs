import           Prelude hiding (div)
import qualified Prelude as P (div)

add :: Int -> Int -> Maybe Int
add x y = return $ x + y

sub :: Int -> Int -> Maybe Int
sub x y = return $ x - y

mul :: Int -> Int -> Maybe Int
mul x y = return $ x * y

div :: Int -> Int -> Maybe Int
div x 0 = Nothing
div x y = Just $ x `P.div` y

func :: Int -> Maybe Int
func = \x -> do
  y <- add 1 x
  z <- sub 2 y
  w <- mul 3 z
  v <- div 3 w
  u <- add 1 v
  return u
