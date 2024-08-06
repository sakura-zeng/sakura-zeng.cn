// 定义变量 类型只有标识 var let
var a, b, c, d, e, f
// 变量定义的时候无类型，给它赋什么类型，它就是什么类型
//数字（整数、小数) 字符串（双引号） 数组（[]） 对象（{}） 布尔（true、false）
a = 'hello'
b = false
c = 'false'
d = 1000 + 5.0405445 + 54.63463
e = [a, 67, 'html+css', '?']
f = ' '
// 打印显示
console.log(d)
console.log(c + f + a + e[3] + f + b)


for (var i = 0; i <= 10; i++) {
    if (i < 5) {
        console.log(i + '是小于5的数')
    } else {
        console.log(i + '是大于等于5的数')
    }
}
for (var a = 0; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log(a)
    }
    a % 3 == 0 ? console.log(a + '是能被3整除的数') : a + '不能被3整除'
}
sum = 0
for (var i = 0; i >= 0, i <= 20; i++) {
    sum += a[i]
}
console.error(sum)

// 遍历数组 .length 属性可以获取数组的长度
for (var b = 0; b < e.length; b++) {
    console.warn(e[b])
}

// 字符串 .length 属性获取字符串的长度
g = 'hello world!'
console.log(g.length)

// 对象类型
var stu = {
    'name': '瘤痿',
    'age': 44,
    'num': '100000000',
    'passed': 'none',
    'educated': ['study', 'play', 'die', { 'work': 'slave' }],
    'score': {
        'chinese': '120',
        'math': '40',
        'english': '120'
    }
}
// 获取对象的属性使用 .
console.log(stu.name)
console.log(stu.educated[3].work)
console.log(stu.score.math)

// 方法的定义 方式一
function add1(a, b) {
    return a + b
}
console.log(add1(99, 36))
// 方法的定义 方式二
var add2 = function (a, b) {
    return a * b
}
console.log(add2(26, 84))
// 方法的定义 方式三
var add3 = (a, b) => {
    return a ** b
}
console.log(add3(39, 8))



var a = [
    {
        'name': 'zhansan',
        'gender': 'M',
        'age': '32'
    },
    {
        'name': 'lisi',
        'gender': 'F',
        'age': '45'
    },
    {
        'name': 'wangwu',
        'gender': 'M',
        'age': '15'
    }
]
// 求所有男性的最大年龄
var max_age = 0
for (var i = 0; i <= a.length; i++) {
    if (a[i].gender == "M") {
        max_age = a[i].age > max_age ? a[i].age : max_age
    }
}
console.log(max_age)

a.forEach(function(name,gender,age){
    console.log(name,gender,age)
})
a.forEach(name=>{
    console.log(name)
})