import * as types from './mutations.type'

export default {
    state: {
        allParties: [],
        menuList: [],
    },
    mutations: {
        [types.SET_PARTIES](state, value) {
            state.allParties = value;
        }
    },
    actions: {
        setAllParties({commit}, partList) {
            let list = _.map(partList, item => {
                return {
                    name: item,
                    path: item,
                    component: item,
                }
            })
            commit(types.SET_PARTIES, list)
        }
    }
}