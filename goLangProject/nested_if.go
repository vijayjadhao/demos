package main

import "fmt"

func main() {
	var (
		i, j, k int
	)
	fmt.Println("Enter 3 integers ")
	fmt.Scanf("%d%d%d", &i, &j, &k)
	if i > j {
		if i > k {
			fmt.Printf("%d is largest", i)
		} else {
			fmt.Printf("%d is largest", k)
		}
	} else {
		if j > k {
			fmt.Printf("%d is greatest", j)
		} else {
			fmt.Printf("%d is greatest", k)
		}
	}
}