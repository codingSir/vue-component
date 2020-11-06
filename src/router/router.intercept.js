import router from "@/router/index";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

router.beforeEach(async () => {
    Nprogress.start()
    store.global.allParties
})