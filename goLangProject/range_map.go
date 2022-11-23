package main

import "fmt"

func main() {
	var countryCapitalMap map[string]string //create a map that is nil
	countryCapitalMap = make(map[string]string)
	countryCapitalMap["India"] = "Delhi"
	countryCapitalMap["Nepal"] = "Kathmandu"
	countryCapitalMap["UK"] = "London"
	countryCapitalMap["USA"] = "Washington DC"

	//using both return values
	for key, value := range  countryCapitalMap {
		fmt.Println("The capital ", key , " is ", value)
	}

	//using only key return value
	var countries string
	for key, _ := range  countryCapitalMap {
		countries += key + " "
	}
	fmt.Println("The countries are ", countries)

	// using only value return values
	var capitals string
	for _, value := range  countryCapitalMap {
		capitals += value + " "
	}
	fmt.Println("The capitals are ", capitals)
}
