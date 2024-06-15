/**Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1] */

var topKFrequent = function(nums, k) {
    let output = []
    let frequentElement = []
    let used = new Array(nums.length).fill(false)

    for(let i=0; i<nums.length; i++){
        if(used[i]){
            continue;
        }

        let group = [nums[i]]
        used[i] = true

        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j]){
                group.push(nums[j])
                used[j] = true
            }
        }

        output.push(group)
    }

    for(let i=0; i<output.length; i++){
    
        if(output[i].length >= k){
            frequentElement.push(output[i][0])
        }
    }
    return frequentElement
}

console.log(topKFrequent([1,1,1,2,2,3,3,4,4,5], 3))