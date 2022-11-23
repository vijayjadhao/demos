package main

import "fmt"

const Pi = 3.14   //global constant

func main() {
	const World = "世界"   // local constant
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true    //local constant
	fmt.Println("Go rules?", Truth)

	// Pi = Pi * 2  compilation error
	//World = "World"  compilation error
	//const V := 10;   compilation error due to dynamic type decln
}