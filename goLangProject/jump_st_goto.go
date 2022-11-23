package main

import "fmt"

func main() {
	fmt.Println("A")
	goto D
	fmt.Println("B")
	fmt.Println("C")
	D:
		fmt.Println("D")
		fmt.Println("E")
}
