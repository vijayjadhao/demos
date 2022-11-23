package main

import "fmt"

func main() {
	add()
	substract1(20, 10)
	substract2(30, 5)
	fmt.Println("Multiplication of 10 and 20 is ", multiply(10, 20))
	d, m := divideAndModulus(21, 4)
	fmt.Println("Division of 21 and 4 is ", d)
	fmt.Println("Modulus of 21 and 4 is ", m)
}

func add() { // func without parameter and without return value
	var i, j int = 10, 20
	fmt.Println("Sum of ", i, " and ", j, " is ", (i + j))
}
func substract1(i int, j int) { // func with parameters each having its datatype and without return value.
	fmt.Println("Substraction of  ", i, " from ", j, " is ", (i - j))
}

func substract2(i, j int) { // func with two parameters both having same datatype and without return value.
	fmt.Println("Substraction of  ", i, " from ", j, " is ", (i - j))
}

func multiply(i, j int) int { // func with two parameters both having same datatype and with one return value.
	return (i * j)
}
func divideAndModulus(i, j int) (d, m int) {
	d = i / j
	m = i % j
	return //even though result of division & modulus are assigned to d,m still return statement is must
	       // this is called "naked" return
}
