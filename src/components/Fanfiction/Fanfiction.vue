<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="cyan" dark>
          <v-toolbar-title>Fanfiction</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="fanfiction in fanfictions">

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script src="./Fanfiction.js"></script>