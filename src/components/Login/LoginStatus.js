import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'
import auth from '../../auth'

@Component
export default class LoginStatus extends Vue {
    loggedIn = auth.loggedIn();
    loginStatus = false;

    changeLoginStatus(){
        this.loginStatus = !this.loginStatus;
        if(this.loginStatus){
            this.$router.push("/login");
        }else{
            this.$router.push("/logout");
        }    
    }
}