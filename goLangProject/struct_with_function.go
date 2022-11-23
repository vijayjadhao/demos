package main
import "fmt"
type student struct {
	rollno int
	name   string
}
func main() {
	s1 := student{1, "Vijay"}
	print1(s1)  // passing struct variable, pass by value
	print2(&s1) // passing address of struct variable , pass by reference
}
func print1(s student) { //parameter is variable
	fmt.Println("Rollno:", s.rollno, "  Name:", s.name)
}
func print2(s *student) { //parameter is pointer
	fmt.Println("Rollno:", s.rollno, "  Name:", s.name)
}
