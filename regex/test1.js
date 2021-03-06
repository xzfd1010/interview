// 正则实现千分位分隔， 123456.78 => 12,345,6.78
// (x) 匹配 x 并记住它，后续可通过 $1,$2,... 或者 \1,\2,... 来使用
// x(?=y) 匹配 x 当且仅当 x 后面跟着 y 时，但是 y 不是匹配结果的一部分
// (?:x) 匹配 x, 这里不会被记住, 跟 (x) 做对比记忆
// + 贪婪匹配，匹配一个或多个
// $ 匹配输入结束。如果多行标示被设置为 true，那么也匹配换行符前的位置。例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
//
// 作者：ethan_xu
// 链接：https://juejin.im/post/5d822ac1f265da03d42fdc0f
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var num = 123456789.99

const reg = /(\d)(?=(?:\d{3}|\d\.\d{2}|\d{2}\.\d)+$)/g;
// const reg = /(\d)(?=(?:\d{3})+$)/g;

console.log(num.toString().replace(reg, '$1,'))

