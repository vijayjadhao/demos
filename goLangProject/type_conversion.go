package main

import "fmt"

func main() {

	//implicit conversion or wider converison
	var i int8 = 10
	var j int16
	// j = i    compilation error
	j = int16(i)   // even for wider conversion, type casting is must. THis is first syntax
	j = (int16)(i) //THis is second syntax
	fmt.Println("i=", i, "   j=", j)

	//explicit conversion/narrowing conversion
	var p int16 = 10
	var q int8
	//q = p     // compilation error in narrowing conversion
	q = int8(p)   // narrowing conversion, type casting is must. THis is first syntax
	q = (int8)(p) //THis is second syntax
	fmt.Println("p=", p, "   q=", q)

	var m float32 = 4.5
	var n int
	n = int(m)
	fmt.Println("m=", m, "   n=", n)
}
