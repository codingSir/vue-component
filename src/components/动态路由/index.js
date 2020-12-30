import BaseComponent from "@/BaseClass/BaseComponent";
import Vue from 'vue'
import component from './code'
import {v1 as uuid} from 'uuid'

export default class Router extends BaseComponent {

  name = 'router';

  title = '动态路由';

  desc = '动态路由可参考vue的动态路由，本文的动态路由是根据目录生成动态路由';

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