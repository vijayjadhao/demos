package main

import "fmt"

func main() {
	var n int
	n = 5
	result := factorial(n)
	fmt.Print("factorial of ", n, " is ", result)
}

func factorial(n int) int {
	var res = 0
	if n == 1 {
		return 1  // base condition/exit condition
	} else {
		res = n * factorial(n-1)
		return res
	}
}
