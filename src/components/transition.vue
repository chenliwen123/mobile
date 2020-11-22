<template>
  <div>
    <transition-group
      appear
      v-bind:css="false"
      v-on:before-enter="beforeEnter" 
      v-on:enter="enter"
      v-on:after-enter="afterEnter">
        <div v-for="(n,index) in num" :key="n" :data-delay="index*100">{{n}}</div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name:"transitionte",
  data(){
    return {
      num:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{
    beforeEnter(dom) {
      dom.classList.add('list-enter', 'list-enter-active');
    },
    enter(dom,done) {
      let delay = dom.dataset.delay;
      setTimeout(function () {
        dom.classList.remove('list-enter');
        dom.classList.add('list-enter-to');
        //监听 transitionend 事件
        var transitionend = window.ontransitionend ? "transitionend" : "webkitTransitionEnd";
        dom.addEventListener(transitionend, function onEnd() {
          dom.removeEventListener(transitionend, onEnd);
          done(); //调用done() 告诉vue动画已完成，以触发 afterEnter 钩子
        });
      }, delay)
    },
    afterEnter(dom) {
      dom.classList.remove('list-enter-to', 'list-enter-active');
    }
  }
}
</script>

<style scoped>
.list-enter {
    opacity: 0;
    transform: translateY(100%);
}
.list-enter-active {
    transition: .3s;
}

</style>