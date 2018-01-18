/* globals localStorage */
import HttpRequestsService from './services/HttpRequestsService'

export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    HttpRequestsService.postRequest("authenticate", { username: email, password: pass }).then(response => {
      if (response.data.success) {
        localStorage.token = response.data.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    }).catch(err => {

    });
  },
  getToken() {
    return localStorage.token
  },
  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },
  loggedIn() {
    return !!localStorage.token
  },
  onChange() { }
}