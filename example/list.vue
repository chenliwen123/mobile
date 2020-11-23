<template>
  <div>
    <the-list ref="van-list" @onLoad="onLoad" :loading="loading" :listnum="list.length" :maxlist="maxlist">

      <!-- 插槽内容 start -->

      <div  v-for="item in list" :key="item">{{item}}</div>
      <!-- <van-cell v-for="item in list" :key="item" :title="item"></van-cell> -->

      <!-- 插槽内容 end -->
      
    </the-list>
  </div>
</template>

<script>
import TheList from '../node_modules/clwlist/TheList'
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
  },
  mounted(){
}

}
</script>

<style scoped>

</style>