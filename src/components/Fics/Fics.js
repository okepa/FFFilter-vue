import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Fanfiction extends Vue {
    fics = null;

    created(){
        this.getFics();
    }

  getFics(){
      HttpRequestsService.getRequest("fics").then((response) => {
        this.fics = response;
        console.log(this.fics);
     }).catch((error) => {

     })
  }
}