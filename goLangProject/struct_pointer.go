package main

import "fmt"

type Student struct {
	rollno  int
	name    string
	percent float32
}
func main() {
	s1 := Student{1, "Vijay", 95.5}
	fmt.Println("Roll number :", s1.rollno)
	fmt.Println("Name :", s1.name)
	fmt.Println("Percent :", s1.percent)

	//creating pointer to struct
	var ptr *Student //pointer declaration
	ptr = &s1        // initializing pointer
	fmt.Println("Roll number :", ptr.rollno)
	fmt.Println("Name :", ptr.name)
	fmt.Println("Percent :", ptr.percent)
}
