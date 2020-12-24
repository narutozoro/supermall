<template>
  <div id="app">

    <router-view></router-view>

    <button @click="addClick">添加学生列表</button>
    <p>{{lists}}</p>
    
    <nav class="nav-list">
      <router-link 
        class="item-link"
        v-for="(item, index) in items" :key="index"
        :to="item.path"
      >
        {{item.title}}
      </router-link>
    </nav>

  </div>
</template>

<script>
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:3000'

export default {
  name: "App",
  data() {
    return {
      lists:[],
      items: [
        { path: "/", title: "首页" },
        { path: "/friends", title: "好友" },
        { path: "/setting", title: "设置" }
      ]
    };
  },
  methods:{
    
    addClick(){
      let params = {
        username:'鑫鑫123456',
        age: 18
      }
  }
  },
  created(){
    axios.get('/stu/list',{
      params:{
        page:1,
        count:2
      }
      
    }).then(res=>{
      console.log(res.data);
      this.lists = res.data.data
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>

<style scoped>
.nav-list{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
}
.nav-list .item-link{
  text-align: center;
  flex-grow: 1;
  line-height: 50px;
}
</style>
