import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Fics extends Vue {
    //fics = new Object({title:"", titleUrl:"", author:"", authorUrl:"", description:""});
    headers =  [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Author', value: 'author', sortable: false, align: 'left', },
        { text: 'Description', value: 'description', sortable: false, align: 'left', },

      ];

      fics = [];

    created(){
        this.getFics();
    }

  getFics(){
    var url = location.href.substring(location.href.indexOf("?"));
      HttpRequestsService.getRequest(`fics${url}`).then((response) => {
          console.log(response.data.success);
        this.fics = response.data.success;
        for (var i = 0; i < this.fics.length; i++) { 
            this.fics[i].titleUrl = "https://www.fanfiction.net/" + this.fics[i].titleUrl;
            this.fics[i].authorUrl = "https://www.fanfiction.net/" + this.fics[i].authorUrl;
        }
     }).catch((error) => {

     })
  }
}