import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import auth from '../../auth'

@Component
export default class Login extends Vue {
    email = null;
    pass = null;
    error = false;
    loggedIn = auth.loggedIn()

    created() {
        auth.onChange = loggedIn => {
            this.loggedIn = loggedIn
        }
    }

    login() {
        auth.login(this.email, this.pass, loggedIn => {
            if (!loggedIn) {
                this.error = true
            } else {
                this.$router.replace(this.$route.query.redirect || '/home')
            }
        })
    }
}
