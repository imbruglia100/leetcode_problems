/** @format */

// Medium

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

const groupAnagrams = (strs) => {
  const res = {}

  for(let s in strs){
    const sorted = strs[s].split('').sort().join('')
    
    if(!res[sorted]){
        res[sorted] = []
    }
    res[sorted].push(strs[s])
  }

  return Object.values(res)
};

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

console.log(groupAnagrams(strs));
