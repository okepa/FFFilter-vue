import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { EventBus } from '../../main';

@Component
export default class Navmenu extends Vue {
    drawer = null;
    loadingBar = false;
    value = 0;
    show = false;
    
    navigation = [
        { title: 'Home', route: '/home' },
        { title: 'Fanfiction', route: '/fanfiction' },
        { title: 'Crossovers', route: '/crossovers' },
        { title: 'Favorites', route: '/favorites' },
      ];

      created(){
        EventBus.$on('loadingBar', (payload) => {
            this.loadingBarControl(payload);
        });
      }

      loadingBarControl(control) {
        switch (control) {
            case "on":
                this.show = true;
                this.value = 0;
                this.loadingBar = true;
                break;
            case "off":
                this.value = 100;
                this.loadingBar = false;
                this.show = false;
                break;
        }
    }

}