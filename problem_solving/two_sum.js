/**

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      var sum = 0;
      const number = []
      
      for (var i = 0; i < nums.length; i++) {
          for (var j = i + 1; j < nums.length; j++) {
              sum = nums[i] + nums[j]
              //number.push(sum)
              if (sum === target) {
                 number.push(i, j)
                 break;
              }
          }
      }
      return number
};