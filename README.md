# Leetcode

# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Output: Because nums[0] + nums[1] == 9, we return [0, 1].

```javascript
var twoSum = function (nums, target) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
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
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
```

# Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Input: [1,2,3,1]

Output: true

```javascript
var containsDuplicate = function (nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else {
      map.set(nums[i]);
    }
  }
  return false;
};
```

# Product of array except self

Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Input: [1,2,3,4]
Output: [24,12,8,6]

```javascript
var productExceptSelf = function (nums) {
  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }
  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  return result;
};
```

# Maximum subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]

Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //Keep track of current local sum
  let currentSum = 0;
  // Keep track of overall maximum sum
  let maxSum = 0;

  // iterate through array
  for (i = 0; i < nums.length; i++) {
    //see if current number is bigger than the sum plus the number so that
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    //see if maxSum is updated
    maxSum = Math.max(currentSum, maxSœum);
  }
  return maxSum;
};
```

# Reverse a linked list

Reverse a singly linked list.

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL

```javascript
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let nextTemp = null;

  while (curr != null) {
    nextTemp = curr.next; // As I explained earlier, I save the next pointer in the temp variable.
    curr.next = prev; // Then I reverse the pointer of the current node to its previous node.
    prev = curr; //  The previous node becomes the node we are currently at.
    curr = nextTemp; // And the current nodes becomes the next node we saved earlier. And we keep iterating.
  }
  return prev; // At the end, our previous node will be the head node of the new list.
};
```

# Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

```javascript
var hasCycle = function (head) {
  let map = new Map();
  while (head != null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head);
      head = head.next;
    }
  }
  return false;
};
```

# Trapping Rain Water

https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]

Output: 6

Explanation: The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let leftMax = 0;
  let right = height.length - 1;
  let rightMax = 0;
  let cum = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (leftMax < height[left]) {
        leftMax = height[left];
      } else {
        cum += leftMax - height[left];
      }
      left++;
    } else {
      if (rightMax < height[right]) {
        rightMax = height[right];
      } else {
        cum += rightMax - height[right];
      }
      right--;
    }
  }
  return cum;
};
```

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



```javascript
let addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let current = dummyHead;
    let carry = 0;
    
    while (p1 !== null || p2 !== null) {
        let x = (p1 !== null) ? p1.val : 0;
        let y = (p2 !== null) ? p2.val : 0;
        let sum = x + y + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (p1 !== null) {
            p1 = p1.next;
        }
        if (p2 !== null) {
            p2 = p2.next;
        }
    }
    
    if (carry > 0) {
        current.next = new ListNode(1);
    }
    
    return dummyHead.next;
};
```
# Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.



```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if(s.length <1 || s === null){
        return ''
    }
    
    let longest = ''
    
    for (i=0;i<s.length;i++){
        // In an odd lettered palindrome you have only one character as the center
        let odd = expandFromCenter(s,i,i)
        // in an even lettered palindrome you have 2 characters as the center so we will pass the current character and the one right before
        let even = expandFromCenter(s,i-1,i)
        
        longest = (odd.length>longest.length) ? odd : longest
        longest = (even.length>longest.length) ? even : longest
    }
    return longest
    
};
    
expandFromCenter = (string, left, right) => {
    let adjuster = 0
    
    while (string[left-adjuster] && string[right+adjuster] && string[left-adjuster] == string[right+adjuster] ){
        adjuster++
    }
    adjuster--
    //include the +1 because slice goes up to but doesn't include the second argument
    return string.slice(left-adjuster,right+adjuster+1)
}
```
