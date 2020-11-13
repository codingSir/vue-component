import Vue from 'vue'

const getTemplate = function () {
    return `<div class="template-content"> 
 <h3 class="template-title">{{title}}</h3>
 <strong class="template-desc">{{desc}}</strong>

</div>`
}

const getCompTemplate = function (obj) {
    return Vue.extend({
        template: getTemplate(),
        data() {
            return {
                title: obj.title,
                desc: obj.desc,
                component: obj.component
            }
        }
    })
}

export default getCompTemplate