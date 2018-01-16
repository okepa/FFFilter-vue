<template>
  <div>
  <v-toolbar dark class="indigo darken-4">
    <v-toolbar-title>FFFilter-vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="home">Home</v-btn>
      <v-btn flat to="fanfiction">Fanfiction</v-btn>
      <v-btn flat to="crossovers">Crossovers</v-btn>
      <v-btn flat to="favorites">Favorites</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-layout wrap>
    <v-navigation-drawer temporary v-model="drawer" absolute>
      <v-list class="pa-1 indigo darken-4" dark >
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>FFFilter</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="nav in navigation" :key="nav.title" :to="nav.route" exact>
          <v-list-tile-content>
            <v-list-tile-title >{{ nav.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</div>
</template>

<script src="./Navmenu.js"></script>