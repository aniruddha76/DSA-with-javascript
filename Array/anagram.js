/**Valid Anagram
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */

var isAnagram = function(s, t) {
    let sArray = s.split("");
    let tArray = t.split("");

    if(sArray.length != tArray.length){
        return false
    } 
        
    sArray.sort()
    tArray.sort()

    for(let i=0; i<sArray.length; i++){
        if(sArray[i] != tArray[i]){
            return false
        } 
    }
    return true
};

console.log(isAnagram("rat", "tar"))