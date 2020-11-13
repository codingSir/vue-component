<template>
      <div class="config-panel">
            <el-form>
                  <el-form-item v-for="(item, index) in partyConfig" :key="index"  :label="item.label">
                        <el-input size="small" v-if="item.type==='number'" v-model="item.value" type="number" @blur="changeValue(item,'number')"></el-input>
                        <el-input size="small" v-if="item.type==='text'" v-model="item.value"  @blur="changeValue(item,'text')"></el-input>
                        <el-switch size="small" v-if="item.type==='switch'" v-model="item.value" @change="changeValue(item,'boolean')"></el-switch>
                        <el-color-picker size="small" v-if="item.type === 'color'" v-model="item.value" @change="changeValue(item, 'color')" show-alpha></el-color-picker>
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
              changeValue(currentItem,type){
                  let party = this.partyConfig.find(item =>  item.props === currentItem.props )

                  party.value = this[type] ? this[type](currentItem.value) : currentItem.value

                  this.$store.dispatch('global/setPartiesStore',{comId: this.comId, party})

              },
            number(value){
                return parseInt(value)
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