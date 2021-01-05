import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Favorites extends Vue {
    headers = [
        {
            text: 'Title',
            align: 'center',
            sortable: false,
            value: 'title'
        },
        { text: 'Fanfiction', value: 'fanfiction', sortable: false, align: 'center' }
    ];
    favorites = [];
    fanfiction = [];
    favorite = {};
    error = false;
    success = false;
    message = null;

    created() {
        this.getFavorites();
    }

    getFavorites() {
        HttpRequestsService.getRequest(`favorites`).then((response) => {
            this.favorites = response.data.favorites;
            this.fanfiction = response.data.fanfiction;
        }).catch((error) => {

        })
    }

    addToFavorites(){
        this.$validator.validateAll().then((result) => {
            if(result){
                HttpRequestsService.postRequest(`favorites`, this.favorite).then((response) => {
                    this.message = "Fic added to favorites"
                    this.success = true;
                    this.favorite.title = null;
                    this.favorite.fanfiction = null;
                    this.getFavorites();
                    setTimeout(() => { 
                        this.success = false;
                    }, 3000);
                }).catch((error) => {
                    this.message = "This fic already exists in your favorites"
                    this.error = true;
                    this.favorite.title = null;
                    this.favorite.fanfiction = null;
                    setTimeout(() => { 
                        this.error = false;
                    }, 3000);
                });
            }else{
                this.message = "Please fill in all fields";
                this.error = true;
                setTimeout(() => { 
                    this.error = false;
                }, 3000);
            }
        
    });
    }

}