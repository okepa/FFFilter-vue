<template>
  <div>
  <v-layout row>
      <v-flex md5 lg5 class="ma-5">
          <v-select name="sort" v-bind:items="sort" v-model="sortChosen" label="Select Sort" class="input-group--focused" item-text="name" item-value="id"></v-select>
      </v-flex>
      <v-flex md5 lg5 class="ma-5">
          <v-select name="time" v-bind:items="time" v-model="timeChosen" label="Select Time" class="input-group--focused" item-text="name" item-value="id"></v-select>
      </v-flex>
      <v-flex md2 lg2 class="ma-5">
          <v-btn @click="search()" dark class="indigo darken-4">Search</v-btn>
      </v-flex>
  </v-layout>

  <v-layout row>
    <v-flex md12 lg12 class="ma-5">
      <v-data-table v-bind:headers="headers" :items="fics" hide-actions class="elevation-1">
        <template slot="items" scope="props">
          <td class="text-xs-right">
            <a v-bind:href="props.item.titleUrl">{{ props.item.title }}</a>
          </td>
          <td class="text-xs-right">
            <a v-bind:href="props.item.authorUrl">{{ props.item.author }}</a>
          </td>
          <td class="text-xs-right">{{ props.item.description }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center">
        <v-pagination :length="15" v-model="page" :total-visible="7"></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</div>
</template>

<script src="./Fics.js"></script>