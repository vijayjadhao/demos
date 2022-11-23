package main

import "fmt"

type str_aa struct {
	name_a string
}

func (a str_aa) print_str_a() {
	fmt.Println("In print_str_a method and name_a is ", a.name_a)
}

type str_bb struct {
	name_b string
	str_aa
}

func (b str_bb) print_str_b() {
	fmt.Println("In print_str_b method and name_b is ", b.name_b)
}
func main() {
	var_b := str_bb{
		name_b: "B's name",
		str_aa:  str_aa{name_a: "A's name"},
	}
	var_b.print_str_b()
	var_b.print_str_a()
}
