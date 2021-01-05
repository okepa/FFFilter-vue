<template>
  <div id="tipTop">
    <v-flex xs8 offset-xs2>
      <v-layout row>
        <v-flex xs5 class="ma-5">
          <v-select name="sort" v-bind:items="sort" v-model="sortChosen" label="Select Sort" class="input-group--focused" item-text="name"
            item-value="id" return-object></v-select>
        </v-flex>
        <v-flex xs5 class="ma-5">
          <v-select name="time" v-bind:items="time" v-model="timeChosen" label="Select Time" class="input-group--focused" item-text="name"
            item-value="id" return-object></v-select>
        </v-flex>
        <v-flex xs2 lg2 class="ma-5">
          <v-btn @click="getFics(true)" dark class="indigo darken-4">Search</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 class="ma-5">
          <v-data-table v-bind:headers="headers" :items="fics" hide-actions class="elevation-1">
            <template slot="items" scope="props">
              <td class="text-xs-left">
                <a v-bind:href="props.item.titleUrl">{{ props.item.title }}</a>
              </td>
              <td class="text-xs-left">
                <a v-bind:href="props.item.authorUrl">{{ props.item.author }}</a>
              </td>
              <td class="text-xs-right">{{ props.item.description }}</td>
            </template>
          </v-data-table>
          <div class="text-md-center text-lg-center">
            <v-pagination v-scroll-to="'#tipTop'" :length.number="15" v-model="page" :total-visible="7"></v-pagination>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script src="./Fics.js"></script>