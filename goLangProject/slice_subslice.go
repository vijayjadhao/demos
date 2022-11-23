package main

import "fmt"

func main() {
	s1 := []int{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}
	fmt.Println("subslice 4th(include) to 7th(exclude) element : ", s1[4:7])
	fmt.Println("subslice s1[:5] :", s1[:5]) //missing lower bound means 0
	fmt.Println("subslice s1[3:] :", s1[3:]) //missing upper bound means len(s1)

	s2 := s1[3:8]
	fmt.Println("s2 :", s2)
}
