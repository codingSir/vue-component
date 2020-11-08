import { mapState } from 'vuex'
export default {
    ...mapState('global',{
        partiesStore: state => state.partiesStore
    }),
    watch:{
        partiesStore:{
            handler(newId, oldId){
                this.getProps()
            }
        }
    },
    data(){
        return {
            comProps:{
                maxLines:2
            }
        }
    },
    created(){
        console.log(this.partiesStore)
        this.setComId()
    },
    methods:{
        setComId(){
            this.$store.commit('global/SET_COM_ID',this.comId)
        },
        getProps(){
            console.log(this.partiesStore)
            if(!this.partiesStore) return ;
            let party = this.partiesStore.find(item => item.id === this.comId);

            _.map(party.config,item => {
                 this.comProps = {
                     [item.prop]: item.value
                 }
            })
            console.log(this.comProps)
        }
    }
}