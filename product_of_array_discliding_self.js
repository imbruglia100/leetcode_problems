// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

//medium

// pre post way
const productExceptSelf = nums => {
    const n = nums.length;
        const pref = [];
        const post = [];
        const res = [];

        pref[0] = 1;
        post[n - 1] = 1;

        for (let i = 1; i < n; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            post[i] = nums[i + 1] * post[i + 1];
        }
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * post[i];
        }
        return res;
}


console.log(productExceptSelf([1,2,4,6]))
