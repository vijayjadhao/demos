package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

//this function belongs to struct Vertex. THis is imformed using special receiver argument (v Vertex)
func (v Vertex) sqrt() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}

	//note that method is only invocable on struct type variable, try removing v
	fmt.Println(v.sqrt())
}
