package main

import "fmt"

// This variadic function takes an arbitrary number of ints as arguments.
func sum(nums ...int) {
	fmt.Print("The addElements of ", nums) // Also a variadic function.
	total := 0
	for _, num := range nums {
		total += num
	}
	fmt.Println(" is", total) // Also a variadic function.
}

func main() {
	// Variadic functions can be called in the usual way with individual
	// arguments.
	sum(1, 2)  // "The addElements of [1 2] is 3"
	sum(1, 2, 3) // "The addElements of [1 2 3] is 6"

	// If you already have multiple args in a slice, apply them to a variadic
	// function using func(slice...) like this.
	nums := []int{1, 2, 3, 4}
	sum(nums...) // "The addElements of [1 2 3 4] is 10"
}
