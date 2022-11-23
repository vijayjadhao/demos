package main

import "fmt"

func main() {
	var (
		a int = 10
		b int = 20
	)
	fmt.Println("Before swap in main:  a=", a, "    b=", b)
	swap(a, b)
	fmt.Println("After swap in main:   a=", a, "    b=", b)
}

func swap(p int, q int) {
	fmt.Println("Before swap in swap:  p=", p, "    q=", q)
	var temp int
	temp = p
	p = q
	q = temp
	fmt.Println("After swap in swap:   p=", p, "    q=", q)
}
