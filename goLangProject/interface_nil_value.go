package main

import "fmt"

type I interface {
	M()
}

func main() {
	var i I    //variable of I and by default it contains nil
	printTypeValue(i)
	i.M()      //because i is nil & calling M() results in runtime error
}

func printTypeValue(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}
