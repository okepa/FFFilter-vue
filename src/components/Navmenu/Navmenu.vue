<template>
  <div>
    <v-progress-linear :active="show" v-model="value" v-bind:indeterminate="loadingBar" class="top mt-0 pt-0 mb-0 pb-0" color="accent" background-color="primary" style="position:fixed;top: 0;z-index:1000;"
    ></v-progress-linear>
    <v-toolbar dark class="indigo darken-4 mt-0 pt-0">
      <v-toolbar-title>FFFilter</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down" v-for="nav in navigation" :key="nav.title">
          <v-btn flat :to="nav.route">{{ nav.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout wrap>
      <v-navigation-drawer temporary v-model="drawer" absolute>
        <v-list class="pa-1 indigo darken-4" dark>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>FFFilter</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0">
          <v-divider></v-divider>
          <div v-for="nav in navigation" :key="nav.title">
            <v-list-tile :to="nav.route" exact>
              <v-list-tile-content>
                <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script src="./Navmenu.js"></script>
<style src="./Navmenu.css"></style>