import {mapState} from "vuex";

export default {
    computed:{
        ...mapState('global',{
            partiesStore: state => state.partiesStore
        }),
    },
    watch:{
        partiesStore:{
            handler(newStore){
                this.getProps()
            },
            immediate:true
        }
    },
    data(){
        return {
            comProps:{}
        }
    },
    created(){
        this.setComId()
    },
    methods:{
        setComId(){
            this.$store.commit('global/SET_COM_ID',this.comId);
            let comp = _.find(this.partiesStore,item => item.id === this.comId);
            this.$store.commit('global/SET_CURRENT_COM', comp)
        },
        getProps(){
            if(!this.partiesStore || !this.comId) return ;
            let party = this.partiesStore.find(item => item.id === this.comId);

            _.map(party.config,item => {
                 this.comProps =_.assign({},this.comProps,{
                     [item.props]: item.value
                 })
            })
            console.log(this.comProps)
        }
    }
}