//Q1 - second largest number
//given an array on size N print thesecond largest
//distinct element from an array

//input: [12, 35, 1, 10, 34, 1] --> output: 34
//input: [10, 5, 10] --> output: 5

function secondLargest(arr) {
    const uniqueArr= Array.from(new Set(arr)) //o(n)
    
    uniqueArr.sort((a,b) => { //o(nlogn)
        return a -b
    })
    console.log(uniqueArr)
    
    if(uniqueArr.length >= 2){
        console.log(uniqueArr[uniqueArr.length-2])
    } else {
        console.log(uniqueArr[uniqueArr.length-1])
    }
}

secondLargest([10, 5, 34, 35, 35, 33])

//time complexity -> o(nlogn)

// function secondLargestOptimized(arr) {
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY

//     for(let i=0; arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//             secondLargest = largest
//         } else if(arr[i] != largest && arr[i] > secondLargest){
//             secondLargest = arr[i]
//         }
//     }

//     return secondLargest;
// }

// console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1]))