let obj1 = "string"
let obj2 = 12234

console.log(typeof obj1)

obj3 = null
console.log(typeof obj3)

let obj4 = true
console.log(typeof obj4)

let obj5 = Symbol("id")
console.log(typeof obj5)

let obj6 = BigInt(12345678901234567890n)
console.log(typeof obj6)

let obj7 = undefined
console.log(typeof obj7)

let obj8 = {name: "harry", age: 22}
console.log(typeof obj8)

let obj9 = [1,2,3,4,5]
console.log(typeof obj9)

let obj10 = function greet() {
    console.log("hello world")
}
console.log(typeof obj10)

console.log("greet")

let obj11 = function() {
    console.log("hello world")  // anonymous function means without name    
}
console.log(typeof obj11)