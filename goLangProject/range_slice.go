package main

import "fmt"

func main() {
	var slice = []int{10, 20, 30, 40, 50}

	//Using only first return i.e. index
	for index := range slice {
		fmt.Println(slice[index])
	}

	//Using only first return i.e. index and ignoring second return using blank identifier
	for index, _ := range slice {
		fmt.Println(slice[index])
	}

	//Using both the return values. index and value
	for index, value := range slice {
		fmt.Println("Value at", index, " is ", value)
	}

	//Ignoring first return using blank identifier & using second return i.e. value
	for _, value := range slice {
		fmt.Println(value)
	}
}
