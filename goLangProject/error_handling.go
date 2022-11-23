package main

import (
	"errors"
	"fmt"
)

func main() {
	f, err := divide(10, 2)
	if err == nil {
		fmt.Println("Result is ", f)
	} else {
		fmt.Println(err)
	}

	f1, err1 := divide(10, 0)
	if err1 == nil {
		fmt.Println("Result is ", f1)
	} else {
		fmt.Println(err1)
	}

}

func divide(a float32, b float32) (float32, error) {
	if b == 0 {
		return 0, errors.New("Can not divide by 0")
	} else {
		return (a / b), nil
	}
}
