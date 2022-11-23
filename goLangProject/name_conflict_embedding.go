package main

import "fmt"

type i1 interface {
	print() // it contain one function print()
}

type i2 interface {
	i1      // i1 is embedded in i2 so it means print() of i1 is now member of i2
	print() // same function name as that of i1. Here print() of i2 is hiding print() of i1
}
type s1 struct {
}

func (s s1) print() { // you need to define print() once only
	fmt.Println("in print")
}
func main() {
	var i1var i1 //RTP: using reference of interface i1
	i1var = s1{}
	i1var.print()

	var i2var i2 //RTP: using reference of interface i2
	i2var = s1{}
	i2var.print()
}
