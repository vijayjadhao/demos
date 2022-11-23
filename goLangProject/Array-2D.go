package main

import "fmt"

func main() {
	var matrix [2][3]int   //declaration
	var r, c int
	for r = 0; r < len(matrix); r++ {
		for c = 0; c < len(matrix[r]); c++ {
			fmt.Print("Enter a number:")
			fmt.Scanf("%d", &matrix[r][c])
		}
	}
	fmt.Println("Elements of matrix are ", matrix)

	//with row column size
	var matrix1 = [2][2]int{{10, 20}, {30, 40}}
	fmt.Println("Elements of matrix3 are ", matrix1)

	// with column size only
	var matrix2 = [][3]int{{10, 20}, {30, 40}, {50, 60}}
	fmt.Println("Elements of matrix3 are ", matrix2)

	var matrix3 = [][]int{
		{10, 20, 30},
		{30, 40, 50},
		{60, 70, 80},   //if closing curly brace is on next line then trailing comma is must
	}
	fmt.Println("Elements of matrix3 are ", matrix3)
}
