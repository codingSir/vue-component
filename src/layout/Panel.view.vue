<template>
  <div class="template-content">
     <p class="template-title">{{comp ? comp.title:' '}}&nbsp; <span>@:{{comp ? comp.author : ''}}</span></p>
    <el-divider content-position="left"><i class="el-icon-document"></i></el-divider>
     <p class="template-desc">{{comp ? comp.desc :'这个人很懒'}}</p>
    <el-divider content-position="left"><i class="el-icon-guide"></i></el-divider>
    <slot>

    </slot>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
     ...mapState('global',{
        comp:state => state.currentComp
     })
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.template-content{
  padding: 15px;
}
.template-title{
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 20px;
  padding-left: 14px;
  font-weight: bold;
  line-height: 28px;
  &:before{
    position: absolute;
    content: '';
    width: 4px;
    height: 14px;
    background: #2F70FF;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
  }
}
.template-desc{
  font-size: 14px;
  color: grey;
  text-align: left;
}
</style>