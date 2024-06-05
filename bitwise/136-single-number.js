/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ret = 0
    nums.forEach(i => {
        ret = ret ^ i;
    })
    return ret;
};

// 任何数和 000 做异或运算，结果仍然是原来的数，即 a⊕0=aa \oplus 0=aa⊕0=a。
// 任何数和其自身做异或运算，结果是 000，即 a⊕a=0a \oplus a=0a⊕a=0。
// 异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=ba \oplus b \oplus a=b \oplus a \oplus a=b \oplus (a \oplus a)=b \oplus0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。