var obj = {
  say: function () {
    function _say () {
      console.log(this)
    }

    console.log(obj) // 理解执行函数，此时obj未完成赋值还是，undefined
    return _say.bind(obj) // obj是undefined，绑定了undefined的函数，this是window
  }()
}
obj.say()


/*
// 1、赋值语句是右执行的,此时会先执行右侧的对象
var obj = {
    // 2、say 是立即执行函数
    say: function() {
        function _say() {
            // 5、输出 window
            console.log(this);
        }
        // 3、编译阶段 obj 赋值为 undefined
        console.log(obj);
        // 4、obj是 undefined，bind 本身是 call实现，
        // 【进阶3-3期】：call 接收 undefined 会绑定到 window。
        return _say.bind(obj);
    }(),
};
obj.say();


 */
