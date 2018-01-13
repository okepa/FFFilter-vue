<template>
  <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/home">Home</v-btn>
      <v-btn flat to="fanfiction">Fanfiction</v-btn>
      <v-btn flat to="">Crossovers</v-btn>
      <v-btn flat to="">Favorites</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>