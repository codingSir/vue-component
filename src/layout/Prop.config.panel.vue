<template>
      <div class="config-panel">
            <el-form>
                  <el-form-item v-for="(item, index) in partyConfig" :key="index"  :label="item.label">
                        <el-input size="small" v-model="item.value" @blur="changeValue(item)"></el-input>
                  </el-form-item>
            </el-form>
      </div>
</template>
<script>
      import { mapState } from 'vuex'
      export default {
          computed:{
              ...mapState('global',{
                  comId: state => state.comId,
                  partiesStore: state => state.partiesStore
              })
          },
          data(){
              return {
                  partyConfig:[]
              }
          },
          methods:{
              changeValue(currentItem){
                  let party = this.partyConfig.find(item =>  item.prop === currentItem.prop )

                  party.value = currentItem.value

                  this.$store.dispatch('global/setPartiesStore',{comId: this.comId, party})

              }
          },
          watch:{
              comId:{
                  handler(newId, oldId){
                      let part = this.partiesStore.find(item =>  item.id === newId);
                      this.partyConfig = part ? part.config : []
                      console.log(this.partyConfig)
                  },
                  immediate:true
              }
          }
      }
</script>
<style scoped lang="scss">
      .config-panel{
            padding: 10px;
            height: 100%;
            overflow: auto;
      }
</style>