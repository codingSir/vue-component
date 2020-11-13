<template>
      <div>
        <v-clamp v-bind="{...comProps}">
          我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”来达到这个效果：
          我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”来达到这个效果
        </v-clamp>
      </div>
</template>
<script>
      import vClamp from './vue-clamp'
      import mixins from '@/utils/mixins'
      export default {
          name:'clamp',
          mixins:[mixins],
          computed:{
          },
          components:{
              vClamp
          },
          data(){
              return {
              }
          },
          methods:{

          }
      }
</script>
<style scoped>
</style>