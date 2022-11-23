package main

import "fmt"

func main() {
	var (
		i, j, k int
	)
	fmt.Println("Enter 3 integers ")
	fmt.Scanf("%d%d%d", &i, &j, &k)
	if i > j && i > k {
		fmt.Printf("%d is greatest", i)
	} else if j > k && j > i {
		fmt.Printf("%d is greatest", j)
	} else {
		fmt.Printf("%d is greatest", k)
	}
}
