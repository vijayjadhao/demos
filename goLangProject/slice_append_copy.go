package main

import "fmt"

func main() {
	s1 := []int{10, 20, 30, 40, 50}
	fmt.Println("s1 :", s1)

	s1 = append(s1, 60) // add 60 as next element
	fmt.Println("s1 :", s1)

	s1 = append(s1, 70, 80, 90) // add 3 more elements
	fmt.Println("s1 :", s1)

	//var s2 []int   only declaration wont copy elements
	var s2 = make ([]int, len(s1), cap(s1)) // creating s2 of same size & cap of s1
	copy(s2, s1)
	fmt.Println("s2 :", s2)
}
