<template>
      <el-container style="height: 100%">
            <el-aside style="width:auto;">
                  <el-menu class="el-menu-vertical-menu" :collapse="collapseMenu">
                        <el-submenu index="1">
                              <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">组件和方案</span>
                              </template>
                              <el-menu-item-group>
                                    <el-menu-item v-for="(item,index) in menuList" :key="index"  @click="routeGo(item)">
                                          {{item.name}}
                                    </el-menu-item>
                              </el-menu-item-group>
                        </el-submenu>
                  </el-menu>
            </el-aside>

            <el-container>
                  <el-header
                          style="box-shadow:0 2px 8px #f0f1f2;display: flex;align-items: center;justify-content: space-between">
                        <i class="el-icon-s-fold" v-if="!collapseMenu" @click="handleCollapse"></i>
                        <i class="el-icon-s-unfold" v-if="collapseMenu" @click="handleCollapse"></i>
                        <span style="">@:961618709qq.com</span>
                  </el-header>

                  <el-main style="position:relative;display: flex;padding: 0px">
                       <div style="flex:1"> <router-view ></router-view></div>
                        <el-aside :width="isShrink? '250px': '0px'" style="box-shadow: rgb(240, 241, 242) 0px 2px 8px;transition: all .3s">
                              <prop-config-panel v-show="isShrink"></prop-config-panel>
                        </el-aside>
                        <div
                                :style="{right:isShrink ? '250px': 0} "
                                class="shrink-arrow"
                                @click="isShrink = !isShrink"
                        >
                              <i v-if="isShrink" class="el-icon-d-arrow-right"></i>
                              <i v-if="!isShrink" class="el-icon-d-arrow-left"></i>
                        </div>
                  </el-main>
            </el-container>
      </el-container>
</template>
<script>
    import {mapState} from 'vuex'
    import propConfigPanel from './Prop.config.panel'

    export default {
        name: "Base.layout",
        components: {
            propConfigPanel
        },
        computed: {
            ...mapState('global', {
                collapseMenu: state => state.collapseMenu,
                menuList: state => state.allParties,
            })
        },
        data() {
            return {
                isShrink:true
            }
        },
        methods: {
            handleCollapse() {
                this.$store.commit('global/COLLASPSEMENU', !this.collapseMenu)
            },
            routeGo(item){
                this.$router.push(item.path)
            }
        }
    }
</script>

<style lang="scss" scoped>
      .shrink-arrow {
            position: absolute;
            top: 50%;
            right: 0px;
            width: 20px;
            height: 60px;
            line-height: 60px;
            background: #e4e7ed;
            text-align: center;
            cursor: pointer;
            z-index: 10;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            box-shadow: 0px 2px 3px 0 rgba(188, 188, 188, 0.35);
            transition: all .3s;
            &:hover {
                  background-color: #00b0ff;
                  color: white;
            }
      }
</style>
<style>
      .el-menu-vertical-menu {
            height: 100%;
      }

      .el-menu-vertical-menu:not(.el-menu--collapse) {
            width: 200px;
      }
</style>