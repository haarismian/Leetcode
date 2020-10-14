# Leetcode

```
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