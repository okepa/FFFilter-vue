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

  sort = [{ name: "Favorites", id: 4 },{name: "Follows", id:5},{name: "Reviews", id:3},{name: "Update Date", id:1}];
  time = [{ name: "Updated within 6 months", id: 4 },{name: "All", id:99},{name: "Published within 6 months", id:14},{name: "Published within 1 year", id:15}];
  sortChosen = null;
  timeChosen = null;
  fics = [];
  page = 1;
  url = null;

  created() {
    this.url = location.href.substring(location.href.indexOf("?"));
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

    });
  }

  search(){
    console.log(`fics${this.url}&s=${this.sortChosen}&t=${this.timeChosen}`)
    HttpRequestsService.getRequest(`fics${this.url}&s=${this.sortChosen}&t=${this.timeChosen}`).then((response) => {
      this.fics = response.data.success;
      for (var i = 0; i < this.fics.length; i++) {
        this.fics[i].titleUrl = "https://www.fanfiction.net/" + this.fics[i].titleUrl;
        this.fics[i].authorUrl = "https://www.fanfiction.net/" + this.fics[i].authorUrl;
      }
    }).catch((error) => {

    });
  }

}