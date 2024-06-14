let array1 = [77, 45, 102, true, "banana", 'ball'];
console.log(array1)

//Add and remove in array
array1.push('orange')
console.log(array1)

array1.pop();
console.log(array1)

//add element to the top/start
array1.unshift('mango')
console.log(array1)

//remove top/first element
array1.shift();
console.log(array1)

//loops inn array
for(i=0; i<array1.length; i++){
    console.log(array1[i])
}

//Inbuild loop methods
const newArray = array1.map((element) => {return element + 5})
console.log("\n",newArray)

//filter in javascript returns the element according to condition
const newArray2 = array1.filter((element) => {return element > 67})
console.log(newArray2)

//reduce in javascript, reduces means sums all the element in one single value
const newArray3 = array1.reduce((prev, item) => {
    return prev + item
}, 0)
console.log(newArray3)

//some in javascript, means returns true or false according to condition
const newArray4 = array1.some((element) => {return element > 67})
console.log("\n",newArray4)

//every in javascript, checks weather the every element satisfies the condition
const newArray5 = array1.every((element) => {return element > 67})
console.log("\n",newArray5)

//find element in javascript, finds an element
const newArray6 = array1.find((element) => {return element > 67})
console.log("\n",newArray6)

//spread operator
let num1 = [1,2,3]
let num2 = [4,5,6]

let finalNum = [...num1, ...num2]; //spread operator

function sum(...numbers){ //spread operator
    return numbers;
}
console.log(sum(num1, num2, 5, "hello"))

//More array method
//concat
let concatArray = num1.concat(num2, array1)
console.log("\nconcat \n",concatArray)

//slie - take start and end index
let sliceArray = array1.slice(0, 3)
console.log(sliceArray)

let sliceArray2 = array1.slice(-2) //returns last 2 element
console.log(sliceArray2)

//splice, it takes index, how many elements, replacing element
array1.splice(4, 2, 'orange')
console.log(array1)

//fill - replace every single element with element inside the bracket
let dummy = [1, 2, 3, 4, 5, 6]
dummy.fill(0, 2)
console.log(dummy)

//find
let index = dummy.findIndex((item) => item == 1)
console.log(index)

//flat - removes array - it flats on first level if you want to go deep us 2
let numbers = [1, [2, 3], [[4, 5], 6]]
let flatArray = numbers.flat(2)
console.log(flatArray)

//reverse
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.reverse())

//sort
let arr2 = [55, 106, 45 , 65 ,97 , 102]
console.log(arr2.sort((a,b) => a -b))

console.log(arr2.sort((a,b) => b - a))