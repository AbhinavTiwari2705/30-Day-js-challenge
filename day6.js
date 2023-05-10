/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let a = init;
    for(const i in nums){
        a=fn(a,nums[i]);
    }
    return a;
    
};
