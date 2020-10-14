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
# Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Input: [7,1,5,3,6,4]

Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

```javascript
var maxProfit = function(prices) {
    let minPrice = Infinity
    let maxProfit = 0
    
    for (i=0;i<prices.length;i++){
        if (prices[i]<minPrice){
            minPrice = prices[i]
        } else if (prices[i]-minPrice>maxProfit){
            maxProfit = prices[i]-minPrice
        }
        
    } return maxProfit 
};
```

# Contains Duplicate
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Input: [1,2,3,1]

Output: true

```javascript
var containsDuplicate = function(nums) {
    let map = new Map()
    
    for (i=0;i<nums.length;i++){
        if (map.has(nums[i])) return true
        else {
            map.set(nums[i])
        }
    } return false
    
    };
```

# Product of array except self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].



Input:  [1,2,3,4]
Output: [24,12,8,6]
```javascript
var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};
```