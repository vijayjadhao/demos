package main

import "fmt"

func main() {
	// declaration
	var (
		i int
		a [5]int
	)

	fmt.Println("lenght of array a is ", len(a))
	//initialization
	for i = 0; i < len(a); i++ {
		fmt.Printf("Enter an integer :")
		fmt.Scanf("%d", &a[i])
	}
	fmt.Println("Array a elements are ", a)

	// Declaration with initialization with size
	var b = [3]int{10, 20, 30}
	fmt.Println("Array b elements are ", b)

	// Declaration with initialization without size
	var c = []int{110, 120, 130, 140, 150}
	fmt.Println("Array c elements are ", c)
}
