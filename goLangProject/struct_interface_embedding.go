package main

import "fmt"

type a interface {
	printa()
}

type students struct {
	name string
	a
}
func (s students) showname() {
	fmt.Println("name is ", s.name)
}

func (s students) printa()  {
	fmt.Println(" in method printa of struct student")
}
func main() {
	s := students{
		name: "Vijay",
		a:    nil,
	}
	s.printa()
	s.showname()
}
