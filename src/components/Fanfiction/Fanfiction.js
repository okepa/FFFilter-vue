import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Fanfiction extends Vue {
    fanfiction = null;

    created() {
        this.getFanfiction();
    }

    getFanfiction() {
        HttpRequestsService.getRequest("fanfiction").then((response) => {
            this.fanfiction = response.data.success;
        }).catch((error) => {
        })
    }

    ficChosen(fics) {
        this.$router.push(`/fics?f=${fics}`)
    }
}