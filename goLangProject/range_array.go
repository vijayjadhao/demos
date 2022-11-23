package main

import "fmt"

func main() {
	var arr = [5]int{10, 20, 30, 40, 50}

	//Using only first return i.e. index
	for index := range arr {
		fmt.Println(arr[index])
	}

	//Using only first return i.e. index and ignoring second return using blank identifier
	for index, _ := range arr {
		fmt.Println(arr[index])
	}

	//Using both the return values. index and value
	for index, value := range arr {
		fmt.Println("Value at", index, " is ", value)
	}

	//Ignoring first return using blank identifier & using second return i.e. value
	for _, value := range arr {
		fmt.Println(value)
	}
}
