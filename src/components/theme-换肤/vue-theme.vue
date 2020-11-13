<template>
  <div>
    <div>
      <el-menu  class="el-menu-demo theme-bg" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a @click="changeTheme">换肤</a></el-menu-item>
      </el-menu>

      <p class="theme-color">选择右侧配置项后点击换肤，我是可以变化的</p>
    </div>
  </div>
</template>
<script>
import cssVars from "css-vars-ponyfill";
export default {
  data(){
    return{
    }
  },
  methods:{
    changeTheme(){
      // document.documentElement.setAttribute("data-theme", this.$props);
      cssVars({
        exclude: "link",
        watch: false, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
        variables: this.getTheme(), // variables 自定义属性名/值对的集合
        onlyLegacy: false // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
      });
    },
    getTheme(){
      console.log(this.$attrs)
      return this.$attrs
    }
  }
}
</script>
<style lang="scss">
.theme-bg{
  background-color: var(--theme-bg);
}
.theme-color{
  margin-top: 30px;
  color: var(--theme-color);
}
</style>