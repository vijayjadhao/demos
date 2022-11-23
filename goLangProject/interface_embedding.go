package main

import "fmt"

type A interface {
	printA()
}
type B interface {
	A
	printB()
}
type D struct {
	name string
}

func (d D) printB() {
	fmt.Println("In printB method for variable ", d.name)
}
func (d D) printA() {
	fmt.Println("In printA method for variable ", d.name)
}

func main() {
	d1 := D{name: "d1"}
	d1.printB()
	d1.printA()
}
