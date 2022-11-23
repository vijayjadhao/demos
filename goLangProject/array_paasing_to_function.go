package main

import "fmt"

func main() {
	var num = []int{10, 20, 30}
	display(num)
}

func display(num []int) { //in formal paramter, array size can not be specified else compile error
	fmt.Println(num)
}

