package main

import "fmt"

func main() {
	var countryCapitalMap map[string]string
	countryCapitalMap = make(map[string]string)

	var key, value string
	for i := 0; i < 2; i++ {
		fmt.Print("Enter country name :")
		fmt.Scanf("%s", &key)
		fmt.Print("Enter capital name :")
		fmt.Scanf("%s", &value)
		countryCapitalMap[key] = value
	}

	fmt.Println("\n", countryCapitalMap)
}
