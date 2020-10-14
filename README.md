# Leetcode

# Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

```javascript
var twoSum = function(nums, target) {
    let map = new Map()
    
    for (i=0;i<nums.length;i++){
        let complement = target-nums[i]
        
        if (map.has(complement)){
            return ([map.get(complement), i])
        } else {
            map.set(nums[i],i)
        }
    }
    
};
```