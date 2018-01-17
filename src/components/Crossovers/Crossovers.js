import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'
import { Watch } from 'vue-property-decorator'

@Component
export default class Crossovers extends Vue {
    fanfictionSelection1 = new Object();
    fanfictionSelection2 = new Object();
    fanfiction1 = null;
    fanfiction2 = null;
    alert = false;
    message = "Cannot choose two of the same fanfiction";
    allActive = false;

    created() {
        this.getFanfiction1();
        this.getFanfiction2();
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

    getFanfiction1() {
        HttpRequestsService.getRequest("fanfiction").then((response) => {
            this.fanfictionSelection1 = response.data.success;
        }).catch((error) => {
        })
    }

    getFanfiction2() {
        HttpRequestsService.getRequest("fanfiction").then((response) => {          
            this.fanfictionSelection2 = response.data.success;
        }).catch((error) => {
        })
    }

    setActive1(f, index) {
        this.fanfictionSelection1[index].active = !this.fanfictionSelection1[index].active;
        if (this.fanfictionSelection1[index].active) {
            this.fanfiction1 = f;
        } else {
            this.fanfiction1 = null;
        }
    }

    setActive2(f, index) {
        if (f == 'All') {
            this.allActive = !this.allActive
            if (this.allActive) {
                this.fanfiction2 = f;
            } else {
                this.fanfiction2 = null;
            }
        } else {
            this.fanfictionSelection2[index].active = !this.fanfictionSelection2[index].active;
            if (this.fanfictionSelection2[index].active) {
                this.fanfiction2 = f;
            } else {
                this.fanfiction2 = null;
            }
        }
    }
}