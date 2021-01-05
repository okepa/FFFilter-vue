<template>
  <v-layout row>
    <v-flex xs6 offset-xs3 class="mt-5">
      <v-card>
        <v-toolbar dark class="indigo darken-4">
          <v-toolbar-title>Fanfiction</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list class="pb-0 pt-0">
          <div v-for="fiction in fanfiction" v-bind:key="fiction.fanfiction" dark>
            <v-list-tile  @click="ficChosen(fiction.fanfiction)">
              <v-list-tile-content>
                <v-list-tile-title v-text="fiction.fanfiction"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script src="./Fanfiction.js"></script>