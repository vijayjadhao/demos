package main

import "fmt"

const MAX int = 3

func main() {
	a := [MAX]int{10, 20, 30}
	var i int
	var ptr [MAX]*int

	for i = 0; i < MAX; i++ {
		ptr[i] = &a[i] /* assign the address of integer. */
	}

	for i = 0; i < MAX; i++ {
		fmt.Printf("Value of a[%d] = %d\n", i, *ptr[i])
		fmt.Printf("Value of a[%d] = %d\n", i, *ptr[i])
	}
}
