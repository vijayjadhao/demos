package main

import "fmt"

func main() {
	var i interface{}  // i is of type "empty interface"
	describe(i)

	i = 42  // assigning integer value to i
	describe(i)

	i = "hello" // assigning string value to i
	describe(i)
}

func describe(i interface{}) {  //parameter is also of "empty interface" type
	fmt.Printf("(%v, %T)\n", i, i)
}
