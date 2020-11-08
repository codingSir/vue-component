// import Vue from 'vue'
import router from "@/router";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
function filterAsyncRouter(router){
    router.filter((item) => {

    })
}

// console.log(store.state.global.allParties)

// router.addRoutes(store.state.global.allParties);

router.beforeEach(async (to, from, next) => {
    Nprogress.start()
    // console.log(store.state.global.allParties)
    // if(window.sessionStorage.getItem('hasRouter')){
    //     next()
    // }else{
    //     router.addRoutes(store.state.global.allParties);
    //     window.sessionStorage.setItem('hasRouter',true);
    //     next()
    // }
    next()
});

router.afterEach(() =>{
    Nprogress.done()
})