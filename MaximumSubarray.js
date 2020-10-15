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
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
