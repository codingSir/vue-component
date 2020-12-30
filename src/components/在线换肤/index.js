import BaseComponent from "@/BaseClass/BaseComponent";
import Vue from 'vue'
import component from './theme'
import {v1 as uuid} from 'uuid'

export default class Theme extends BaseComponent {

    name = 'theme';

    title = '在线换肤';

    desc = '换肤解决方案组件支持颜色配置，可使用右侧的配置项查看属性配置效果,注意：（换肤需要css-var-ponyfill插件支持）在css上配置变量var(--js对象的属性名)';

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
        {
            label: '背景色',
            props: 'theme-bg',
            value: '#fff',
            type: 'color'
        },
        {
            label: '字体色',
            props: 'theme-color',
            value: '#DDDDDD',
            type: 'color'
        }
    ]
}