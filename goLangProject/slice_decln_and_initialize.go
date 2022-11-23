package main

import "fmt"

func main() {
	s1 := []int{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}
	fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))
	fmt.Println("s1 :", s1)
}
