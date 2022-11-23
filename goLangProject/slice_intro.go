package main

import "fmt"

func main() {
	var s1 [] int;
	if s1 == nil {
		fmt.Println("s1 :", s1)
		fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))
	}

	s1 = make([]int, 5)
	fmt.Println("s1 :", s1)
	fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))

	s1 = make([]int, 8, 10)
	fmt.Println("s1 :", s1)
	fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))
	s1[0] = 10
	s1[1] = 20
	s1[2] = 30
	s1[3] = 40
	s1[4] = 50
	fmt.Println("s1 :", s1)
	fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))

	s1 = []int{ 11, 12, 13, 14, 15}
	fmt.Println("s1 :", s1)
	fmt.Println("size : ", len(s1), "   and capacity : ", cap(s1))
}
