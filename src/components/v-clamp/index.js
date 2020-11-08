import BaseComponent from "@/BaseClass/BaseComponent";
import Vue from 'vue'
import component from './clamp'
import {v1 as uuid} from 'uuid'

export default class Clamp extends BaseComponent {

    name = 'clamp';

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
        }
    ]
}