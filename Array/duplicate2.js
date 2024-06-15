/**Check if the given input contains Duplicates
Last Updated : 13 May, 2024
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Examples:

Input: nums[] = [4, 5, 6, 4]
Output: true
Explanation: 4 appears twice.

Input: nums[] = [1, 2, 3, 4]
Output: false
Explanation: all are distinct. */

var duplicate = (nums) => {
    let setElement = new Set(nums)
    if(setElement.size < nums.length){
        return true
    } else {
        return false
    }
}

console.log(duplicate([1, 2, 3, 4]))