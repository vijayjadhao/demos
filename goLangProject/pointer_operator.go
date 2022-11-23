package main

import "fmt"

func main() {
	var i int = 10;  //variable
	var p *int = &i;  //pointer to variable
	var p1 **int = &p; // pointer to pointer to variable
	fmt.Println(i)
	fmt.Println(*(&i))
	fmt.Println(*p)
	fmt.Println(**(&p))
	fmt.Println(**p1)
	fmt.Print(***(&p1))
}
