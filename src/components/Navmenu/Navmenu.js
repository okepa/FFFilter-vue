import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component
export default class Navmenu extends Vue {
    drawer = null;
    
    navigation = [
        { title: 'Home', route: '/home' },
        { title: 'Fanfiction', route: '/fanfiction' },
        { title: 'Crossovers', route: '/crossovers' },
        { title: 'Favorites', route: '/favorites' },
      ];


}