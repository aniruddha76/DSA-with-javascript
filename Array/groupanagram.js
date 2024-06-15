/**Group Anagrams
Medium
Topics
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] */

var groupAnagrams = function(strs) {
    let arrayOfStrings = strs.map((element) => element.split(""));
    let output = []
    let used = new Array(arrayOfStrings.length).fill(false) //created a array of stringlength.length and filled with false value to keep track
    
    for(let i=0; i<arrayOfStrings.length; i++){
        if(used[i]){
            continue;
        }

        let group = [strs[i]]
        let sortedI = [...arrayOfStrings[i]].sort().join('')

        for(let j=i+1; j<arrayOfStrings.length; j++){
            let sortedJ = [...arrayOfStrings[j]].sort().join('')

            if(sortedI == sortedJ){
                group.push(strs[j])
                used[j] = true
            }
        }

        output.push(group)
        used[i] = true
    }
    return output
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))