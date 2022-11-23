package main

import "fmt"

type geometry interface {
	area() float32
	perimeter() float32
}
type rectangle struct {
	length, breadth float32
	name            string
}

func (r rectangle) area() float32 { //note receiver argument
	return r.length * r.breadth
}
func (r rectangle) perimeter() float32 { //note receiver argument
	return 2 * (r.length + r.breadth)
}
func main() {
	var g1 geometry = rectangle{length: 10, breadth: 20, name: "Rectangle"} //dynamic polymorphism
	print(g1)

	var g2 geometry = rectangle{length: 20, breadth: 20, name: "Square"} //dynamic polymorphism
	print(g2)

	var g3 geometry = &rectangle{length: 20, breadth: 20, name: "Square"} //dynamic polymorphism
	fmt.Println("Area is ", g3.area())
	fmt.Println("Perimeter is ", g3.perimeter())
}
func print(g geometry) {
	fmt.Println("Area is ", g.area())
	fmt.Println("Perimeter is ", g.perimeter())
}
