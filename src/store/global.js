import Vue from 'vue'
import * as types from './mutations.type'
import getCompTemplate from "@/utils/getTemplate";
import router from '../router'
import { constantRouterMaps } from '../router/router.config'
/* eslint-disable */
export default {
    namespaced: true,
    state: {
        allParties: [],
        partiesStore:[],
        collapseMenu:false,
        baseExtraNode:[],
        comId: window.sessionStorage.getItem('comId') || '',
        currentComp:''
    },
    mutations: {
        [types.COLLASPSEMENU](state, value){
            state.collapseMenu = value
        },
        [types.SET_PARTIES](state, {constantRouterMaps, list}) {

            state.allParties = list;

            router.addRoutes(constantRouterMaps);
        },
        [types.SET_PARTIES_STORE_ITEM](state, value){
              let party = state.partiesStore.find(item => item.id === value.id)
              !party && state.partiesStore.push(value)
        },
        [types.SET_PARTIES_STORE](state, {id, party}){

            let partiesStore = state.partiesStore.map(item => {
                if(id === item.id){
                    item.config = party
                }
                return item
            });
            console.log(partiesStore)
            state.partiesStore = [...partiesStore]
        },
        [types.SET_COM_ID](state,value){
            window.sessionStorage.setItem('comId',value)
            state.comId = value
        },
        [types.SET_CURRENT_COM](state,value){
            state.currentComp = value
        }
    },
    actions: {
        setAllParties({commit}, partList) {
            let list = _.map(partList, function(item) {
                let route = {
                    name: item.key,
                    path: '/'+item.key,
                    component: async () => await import(`@/components/${item.key}`).then(async (partModuleClass) => {

                        let part = new partModuleClass.default();

                        await commit(types.SET_PARTIES_STORE_ITEM, part);

                        return part.component
                    })
                };

                return route
            });
            constantRouterMaps[0].children = [...list];
            commit(types.SET_PARTIES, {constantRouterMaps,list} )
        },
        setPartiesStore({commit}, {id, party}){

            commit(types.SET_PARTIES_STORE, {id, party})
        }
    }
}