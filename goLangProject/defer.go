package main

import "fmt"

func main() {
	fmt.Println("In main")
	defer printHello()
	fmt.Println("Middle of main")
	fmt.Println("Exiting main")
}


func printHello() {
	fmt.Println("Hello")
}
