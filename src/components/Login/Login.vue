<template>
    <div>
        <v-layout row>
            <v-flex md5 lg5 class="ma-5">
                <p v-if="$route.query.redirect">
                    Please Login
                </p>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex md5 lg5 class="ma-5">
                <v-text-field name="Email" label="Email" class="input-group--focused" v-model="email" ></v-text-field>
            </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex md5 lg5 class="ma-5">
                <v-text-field name="Password" label="Password" class="input-group--focused" v-model="pass" ></v-text-field>
            </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex md2 lg2 class="ma-5">
                <v-btn @click="login" class="indigo darken-4" dark>Login</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import auth from '../../auth'

export default {
  data () {
    return {
      email: 'okepa@yahoo.co.uk',
      pass: '',
      error: false,
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/home') 
        }
      })
    }
  }
}
</script>