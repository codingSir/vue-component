<template>
      <div>
            <a>
                  这是一个文本截断的vue组件，非常好用兼容性比较高，操作使用方便
            </a>
            <div style="width: 100px;margin: 0 auto;margin-top: 100px">
                  <v-clamp v-bind="{...comProps}">
                        我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”来达到这个效果：
                  </v-clamp>
            </div>
      </div>

</template>
<script>
      import vClamp from './vue-clamp'
      import mixins from '@/utils/mixins'
      import { mapState } from 'vuex'
      export default {
          name:'clamp',
          mixins:[mixins],
          computed:{
              ...mapState('global',{
                  partiesStore: state => state.partiesStore
              }),
          },
          components:{
              vClamp
          },
          data(){
              return {
              }
          },
          created(){
              console.log(this.partiesStore)
          },
          methods:{

          }
      }
</script>
<style scoped>
      a {
            color: #42b983;
      }
</style>