package main

import "fmt"

func main() {
	var arr = []int{10, 20, 30, 40, 50}
	var total = addElements(arr)
	fmt.Println("Sum of array elements ", arr, " is ", total)
}
func addElements(a []int) int {
	var total = 0
	for i := 0; i < len(a); i++ {
		total += a[i]
	}
	return total
}
