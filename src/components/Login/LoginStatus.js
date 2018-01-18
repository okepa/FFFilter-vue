import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'
import auth from '../../auth'
import { EventBus } from '../../main';


@Component
export default class LoginStatus extends Vue {
    loggedIn = auth.loggedIn();
    token = null;
    
    created(){
        EventBus.$on('loginStatus', () => {
            this.emitLoginStatus();
        });
        this.emitLoginStatus()
    }

    emitLoginStatus(){
        if(localStorage.token != null){
            this.token = localStorage.token;
        } else {
            this.token = null;
        }

    }
}