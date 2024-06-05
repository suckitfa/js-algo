// 组合权限认证
// 一个虚拟DOM有多个属性, 每一个状态标记一个2进制
let STYLE = 1
let CLASS = 1 << 1
let CHILDREN = 1 << 2

//  | 授权
let vnodeType = STYLE | CLASS

// 判断 ， 权限校验
console.log(`vnodeType的类型 STYLE `, !!(vnodeType & STYLE))
console.log(`vnodeType的类型 CLASS `, !!(vnodeType & CLASS))
console.log(`vnodeType的类型 CHILDREN `, !!(vnodeType & CHILDREN))

// 删除权限
console.log('------------->')
vnodeType = STYLE ^ CLASS

console.log(`vnodeType的类型 STYLE `, !!(vnodeType & STYLE))
console.log(`vnodeType的类型 CLASS `, !!(vnodeType & CLASS))
console.log(`vnodeType的类型 CHILDREN `, !!(vnodeType & CHILDREN))
