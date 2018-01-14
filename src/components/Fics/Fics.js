import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Fics extends Vue {
  headers = [
    {
      text: 'Title',
      align: 'left',
      sortable: false,
      value: 'title'
    },
    { text: 'Author', value: 'author', sortable: false, align: 'left' },
    { text: 'Description', value: 'description', sortable: false, align: 'left' }
  ];

  fics = [];
  page = 1;
  url = null;

  created() {
    this.url = location.href.substring(location.href.indexOf("?"));
    console.log(this.url)
    this.getFics(this.url);
  }

  @Watch('page')
  onPageChange(val) {
    if (this.url.indexOf('&') == -1) this.url = this.url + "&p=" + this.page
    else this.url = this.url.substr(0, this.url.indexOf('&')) + "&p=" + this.page;
    this.getFics(this.url)
  }

  getFics(url) {
    HttpRequestsService.getRequest(`fics${this.url}`).then((response) => {
      this.fics = response.data.success;
      for (var i = 0; i < this.fics.length; i++) {
        this.fics[i].titleUrl = "https://www.fanfiction.net/" + this.fics[i].titleUrl;
        this.fics[i].authorUrl = "https://www.fanfiction.net/" + this.fics[i].authorUrl;
      }
    }).catch((error) => {

    })
  }

}