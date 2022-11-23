package main

import "fmt"

type Student struct {
	rollno  int
	name    string
	percent float32
}

func main() {
	var s1 Student //create a variable of type Student

	//checking default values of struct members
	fmt.Println("Roll number :", s1.rollno)
	fmt.Println("Name :", s1.name)
	fmt.Println("Percent :", s1.percent)

	//setting the values for struct members
	s1.rollno = 1
	s1.name = "Amit"
	s1.percent = 90.90

	//printing the values for struct members
	fmt.Println("Roll number :", s1.rollno)
	fmt.Println("Name :", s1.name)
	fmt.Println("Percent :", s1.percent)

	//declaring variable and initializing
	s2 := Student{2, "Vijay", 95.5}
	fmt.Println("Roll number :", s2.rollno)
	fmt.Println("Name :", s2.name)
	fmt.Println("Percent :", s2.percent)
}
