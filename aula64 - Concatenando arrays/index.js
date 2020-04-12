//Concatenando arrays com .concat()
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
const nums3 = nums1.concat(nums2, [7, 8, 9], 'Daniel')
console.log(nums3);


//Concatenando arrays com operador spread(...)
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
const nums3 = [...nums1, ...nums2]
console.log(nums3);