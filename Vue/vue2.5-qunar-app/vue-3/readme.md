# Vue 中的动画特效

1. [Vue中CSS动画原理](index.1.html)
    * .fade-leave-to
    * .fade-leave-active
    * .fade-enter
    * .fade-enter-active
2. [在Vue中使用Animate.css库](index.2.html)
    * 使用`enter-active-class`和`leave-active-class`自定义class名称
3. [在Vue中同时使用过渡和动画](index.3.html)
    * 使用appear和appear-active-class属性定义transition过渡
    * 定义播放时长，可以使用type="animation/transition"，或者:duration="1000", 或者:duration="{enter: 5000, leave: 1000}"
4. [Vue中的Js动画与Velocity.js的结合](index.4.html)
    * 使用`@before-enter/@enter/@after-enter`这些回调钩子执行一些Js动画
5. [Vue中多个元素或组件的过渡](index.5.html)
    * 要对多个元素使用过渡，需要给每个元素加上key，如果使用了组件，就不需要加key
    * 可以使用mode语句定义过渡方式，in-out/out-in