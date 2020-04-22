function twoSum (nums, target) {
  let dict = {}
  for (let i = 0; i < nums.length; i++) {
    if ((target - nums[i]) in dict) {
      return [dict[target - nums[i]], i]
    } else {
      dict[nums[i]] = i
    }
  }
}
