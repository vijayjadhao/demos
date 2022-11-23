package main

import "fmt"

func main() {
	var grade string = "B"
	var marks int = 90

	switch marks {              // switcn with expression
	case 90:
		grade = "A"
	case 80:
		grade = "B"
	case 50, 60, 70:           //multiple values in a case
		grade = "C"
	default:
		grade = "D"
	}
	switch {                   // switch w/o expression
	case grade == "A":
		fmt.Printf("Excellent!\n")
	case grade == "B", grade == "C":
		fmt.Printf("Well done\n")
	case grade == "D":
		fmt.Printf("You passed\n")
	case grade == "F":
		fmt.Printf("Better try again\n")
	default:
		fmt.Printf("Invalid grade\n")
	}
	fmt.Printf("Your grade is  %s\n", grade)
}
