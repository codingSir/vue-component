import BaseComponent from "@/BaseClass/BaseComponent";
import Vue from 'vue'
import component from './core'
import {v1 as uuid} from 'uuid'

export default class Core extends BaseComponent {

  name = 'core';

  title = '可视化搭建';

  desc = 'vue的可视化搭建，存在一定的性能问题，天生的双向绑定，是性能的一大杀手，有利有弊。在数据量大的时候一次的动态更新将是性能损耗很大的时候，' +
    '然而可视化搭建的过程中 需要动用的属性变化更多所以在技术选型上一般不采用vue 但是vue也是可以做小型的可视化搭建，本文主要讲解的是vue的可视搭建的主要技术';

  id = uuid();

  get component() {

    let self = this;

    return Vue.extend({
      ...component,
      data() {
        return {
          ...component.data(),
          comId: self.id
        }
      }
    })
  }

  author = 'zhangmeng';

  config = [
  ]
}