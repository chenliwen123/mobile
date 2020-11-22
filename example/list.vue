<template>
  <div>
    <the-list ref="van-list" @onLoad="onLoad" :loading="loading" :listnum="list.length" :maxlist="maxlist">

      <!-- 插槽内容 start -->

      <van-cell class="list-enter-active list-enter" :class="{'list-enter-to':animation[index]}" v-for="(item,index) in list" :key="item" :title="item">{{animationfun(index)}}</van-cell>
      <!-- <van-cell v-for="(item,index) in list" :key="item" :title="item">{{animationfun(index)}}</van-cell> -->

      <!-- 插槽内容 end -->
      
    </the-list>
  </div>
</template>

<script>
import TheList from '@/components/TheList'
export default {
  name:'TheListTest',
  components:{
    TheList
  },
  data(){
    return {
      list:[],
      loading:false,
      maxlist:0, // 数据的总数
      animation:[]
    }
  },
  computed:{
  },
  methods:{
    onLoad({clear = false}){
      if(clear){
        this.list = [];
      }
      this.loading = true;



      // 换成你请求的方法 start
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      setTimeout(() => {
        this.loading = false  // 这句返回数据的后面  //必须有
        this.maxlist = 100    // 数据的总数         //必须有
      }, 1000);
      // 换成你请求的方法 end
    },
    animationfun(index){
        this.animation[index] = true;
    }
    
  },
  mounted(){
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
.list-enter-to {
    opacity: 1;
    transform: translateY(0);
}
.list-enter-active:nth-child(10n+1) {
    transition-delay: .1s;
}
.list-enter-active:nth-child(10n+2) {
    transition-delay: .2s;
}
.list-enter-active:nth-child(10n+3) {
    transition-delay: .3s;
}
.list-enter-active:nth-child(10n+4) {
    transition-delay: .4s;
}
.list-enter-active:nth-child(10n+5) {
    transition-delay: .5s;
}
.list-enter-active:nth-child(10n+6) {
    transition-delay: .6s;
}
.list-enter-active:nth-child(10n+7) {
    transition-delay: .7s;
}
.list-enter-active:nth-child(10n+8) {
    transition-delay: .8s;
}
.list-enter-active:nth-child(10n+9) {
    transition-delay: .9s;
}
.list-enter-active:nth-child(10n+10) {
    transition-delay: 1s;
}
</style>