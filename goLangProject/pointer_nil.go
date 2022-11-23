package main

import "fmt"

func main() {
	var ptr *int  //declared a pointer
	fmt.Println("value of pointer is : ", ptr)
	if ptr == nil {
		fmt.Println("ptr is nil")
	} else {
		fmt.Println("ptr is not nil")
	}

	fmt.Println("\n\nassigning value to ptr ")
	var i int = 10
	ptr = &i
	if ptr == nil {
		fmt.Println("ptr is nil")
	} else {
		fmt.Println("ptr is not nil")
	}
	fmt.Println("value of pointer is : ", ptr)
	fmt.Println("ptr is pointing to value : ", *ptr)

	ptr = nil
	fmt.Println("value of pointer is : ", ptr)
}
