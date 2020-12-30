<template>
  <div>
    <v-theme v-bind="{...comProps}"></v-theme>
  </div>
</template>
<script>
import vTheme from './vue-theme'
import mixins from '@/utils/mixins'
export default {
  name:'theme',
  mixins:[mixins],
  computed:{
  },
  components:{
    vTheme
  },
  data(){
    return {
    }
  },
  methods:{

  }
}
</script>