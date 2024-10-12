// Easy

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

const hasDuplicate = arr => {
    const c = {}

    for(let i = 0; i < arr.length; i++){
        if(c[arr[i]]){
            return true
        }else{
            c[arr[i]] = 1
        }
    }
    return false
}
