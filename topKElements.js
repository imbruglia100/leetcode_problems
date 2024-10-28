// Medium

const res = require("express/lib/response")

 // Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

 // You may return the output in any order.

const topKFrequent = ( nums, k) => {
    const c = {}

    for(let i in nums){
        c[nums[i]] = (c[nums[i]] || 0) + 1
    }

    const res = Object.entries(c).sort((a, b) => a[1] - b[1])

    return res.map(el => el[0]).slice(res.length - k, res.length)

}


console.log(topKFrequent([1,2,2,4,4,4,4,3,3,3,3,3], 2))
