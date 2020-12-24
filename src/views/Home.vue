<template>
    <div class="home">

        <h2>首页</h2>
        <hello-world></hello-world>
    </div>
</template>

<script>
// 导入组件，一定不要忘记注册组件
import HelloWorld from '../components/HelloWorld';
export default {
    name:'Home',
    components:{
        HelloWorld
    }
}
</script>

<style>
.home h2{
    color: red;
}
</style>

