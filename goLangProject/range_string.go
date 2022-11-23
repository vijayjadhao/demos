package main

import "fmt"

func main() {
	for pos, char := range "VIJAY" {
		fmt.Printf("character %c starts at byte position %d\n", char, pos)
	}

	fmt.Println()

	for pos, char := range "日本\x80語" { // \x80 is an illegal UTF-8 encoding
		fmt.Printf("character %c starts at byte position %d\n", char, pos)
	}

}
