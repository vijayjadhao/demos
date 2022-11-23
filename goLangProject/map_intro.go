package main

import "fmt"

func main() {
	var countryCapitalMap map[string]string //create a map that is nil

	if countryCapitalMap == nil {
		fmt.Println("Map is nil")
	} else {
		fmt.Println("Map is not nil")
	}

	countryCapitalMap = make(map[string]string)
	if countryCapitalMap == nil {
		fmt.Println("Map is nil")
	} else {
		fmt.Println("Map is not nil")
	}

	countryCapitalMap["India"] = "Delhi"
	countryCapitalMap["Nepal"] = "Kathmandu"
	countryCapitalMap["UK"] = "London"
	countryCapitalMap["USA"] = "Washington DC"
	fmt.Println(countryCapitalMap)

	fmt.Println("The capital of India is ", countryCapitalMap["India"])

	country := "USA"
	value, found := countryCapitalMap[country]
	fmt.Println("found = ", found)
	if found {
		fmt.Println("The capital of USA is ", value, " value of found is ", found)
	}

	country = "Ireland"
	value1, found1 := countryCapitalMap[country]
	fmt.Println("found1 = ", found1)
	if found1 {
		fmt.Println("The capital of Ireland is ", value1, " value of found1 is ", found1)
	}

	fmt.Println("Before delete :", countryCapitalMap)
	delete(countryCapitalMap, "USA")
	fmt.Println("After delete :", countryCapitalMap)

}
