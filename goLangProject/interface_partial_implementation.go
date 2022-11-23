package main

import "fmt"

type itf interface {
	print1()
	print2()
}

type str struct {
	name string
}

func (s str) print1()  {
	fmt.Println("In print1 for object ", s.name)
}

func main() {
	s1 := str{name: "s1"}
	s1.print1()
	//s1.print2()  //compilation error because print2() not implemented by struct
}
