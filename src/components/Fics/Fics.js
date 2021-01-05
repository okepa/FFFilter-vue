import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Fics extends Vue {
  $refs = {
    tipTop: HTMLFormElement
  }
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

  sort = [{ name: "Favorites", id: 4 }, { name: "Follows", id: 5 }, { name: "Reviews", id: 3 }, { name: "Update Date", id: 1 }];
  time = [{ name: "Updated within 6 months", id: 4 }, { name: "All", id: 99 }, { name: "Published within 6 months", id: 14 }, { name: "Published within 1 year", id: 15 }];
  sortChosen = { name: "Favorites", id: 4 };
  timeChosen = { name: "Updated within 6 months", id: 4 };
  fics = [];
  page = 1;
  url = null;
  first = true;

  created() {
    if (location.href.indexOf("&") == -1) this.url = location.href.substring(location.href.indexOf("?")) + `&s=${this.sortChosen.id}&t=${this.timeChosen.id}&p=${this.page}`;
    else {
      this.url = location.href.substring(location.href.indexOf("?"));
      for (var i = 0; i < this.sort.length; i++) {
        if (this.url.substring(this.url.indexOf("s=") + 2, this.url.indexOf("&t=")) == this.sort[i].id) {
          this.sortChosen = this.sort[i];
        }
      }

      for (var i = 0; i < this.time.length; i++) {
        if (this.url.substring(this.url.indexOf("t=") + 2, this.url.indexOf("&p=")) == this.time[i].id) {
          this.timeChosen = this.time[i];
        }
      }
    }
    this.getFics();
  }

  @Watch('page')
  onPageChange(val) {
    this.url = this.url.substring(0, this.url.indexOf("p=") + 2) + this.page;
    this.getFics();
  }

  getFics(search = false) {
    if (search) {
      this.page = 1;
      this.url = location.href.substring(location.href.indexOf("?"), location.href.indexOf("&")) + `&s=${this.sortChosen.id}&t=${this.timeChosen.id}&p=${this.page}`;
    } else {
      this.page = parseInt(this.url.substring(this.url.indexOf("p=") + 2));
    }
    HttpRequestsService.getRequest(`fics${this.url}`).then((response) => {
      this.fics = response.data.success;
      for (var i = 0; i < this.fics.length; i++) {
        this.fics[i].titleUrl = "https://www.fanfiction.net/" + this.fics[i].titleUrl;
        this.fics[i].authorUrl = "https://www.fanfiction.net/" + this.fics[i].authorUrl;
      }
      if (this.first) {
        this.$router.replace(`/fics${this.url}`);
        this.first = false;
      }
      else this.$router.push(`/fics${this.url}`);
    }).catch((error) => {

    });
  }
}