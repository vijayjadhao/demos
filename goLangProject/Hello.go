package main

import "fmt"

func main() {
	var raw string = `Hello \n \t \r vijay`
	var interpreted string = "Hello \n \t \r 	vijay"
	fmt.Println("raw :  " +  raw);
	fmt.Println("interpreted : " + interpreted);
}
