package main

import "fmt"

type str_a struct {
	name_a string
}

func (a str_a) print_str_a() {
	fmt.Println("In print_str_a method and name_a is ", a.name_a)
}

type str_b struct {
	name_b string
	var_a  str_a
}

func (b str_b) print_str_b() {
	fmt.Println("In print_str_b method and name_b is ", b.name_b)
}
func main() {
	var_b := str_b{
		name_b: "B's name",
		var_a:  str_a{name_a: "A's name"},
	}
	var_b.print_str_b()
	var_b.var_a.print_str_a()
}
