import BaseComponent from "@/BaseClass/BaseComponent";
import Vue from 'vue'
import component from './clamp'
import {v1 as uuid} from 'uuid'

export default class Clamp extends BaseComponent {

    name = 'clamp';

    title = '文本截断';

    desc = '可配置型的文本截断组件支持高度和行数配置，可使用右侧的配置项查看属性配置效果';

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
            label: '最大行数',
            props: 'maxLines',
            value: 2,
            type: 'number'
        },
        {
            label: '最大高度',
            props: 'maxHeight',
            value: '',
            type: 'text'
        },
        {
            label: '后缀',
            props: 'ellipsis',
            value: '...',
            type: 'text'
        },
        {
            label: '标签',
            props: 'tag',
            value: 'div',
            type: 'text'
        },
        {
            label: '自动计算',
            props: 'autoresize',
            value: true,
            type: 'switch'
        },
        {
            label: '展开',
            props: 'expanded',
            value: false,
            type: 'switch'
        }
    ]
}