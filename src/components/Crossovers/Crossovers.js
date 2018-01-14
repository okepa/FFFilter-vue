import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'
import { Watch } from 'vue-property-decorator'

@Component
export default class Crossovers extends Vue {
    fanfiction = null;
    fanfiction1 = null;
    fanfiction2 = null;
    alert = false;
    message = "Cannot choose two of the same fanfiction";
    active = false;

    created() {
        this.getFanfiction();
    }

    @Watch('fanfiction1')
    onFanfiction1Selection(val) {
        if (this.fanfiction1 != null && this.fanfiction2 != null && this.fanfiction1 != this.fanfiction2) this.$router.push(`/crossoverfics?f=${this.fanfiction1}-and-${this.fanfiction2}`);
        else if (this.fanfiction1 != null && this.fanfiction2 != null && this.fanfiction1 == this.fanfiction2) this.alert = true;
    }

    @Watch('fanfiction2')
    onFanfiction2Selection(val) {
        if (this.fanfiction1 != null && this.fanfiction2 != null && this.fanfiction1 != this.fanfiction2) this.$router.push(`/crossoverfics?f=${this.fanfiction1}-and-${this.fanfiction2}`);
        else if (this.fanfiction1 != null && this.fanfiction2 != null && this.fanfiction1 == this.fanfiction2) this.alert = true;
    }

    getFanfiction() {
        HttpRequestsService.getRequest("fanfiction").then((response) => {
            this.fanfiction = response.data.success;
            for(var i = 0; i < response.data.success.length; i++){
                this.fanfiction[i].active = false;
            }
            console.log(this.fanfiction);
        }).catch((error) => {
        })
    }
    f(active){
        
        console.log(this.fanfiction)
    }
}