<script src="./Fics.js"></script>
<template>
        <v-layout row>
                 <v-flex md12 lg12 class="ma-5">
                        <v-data-table
                        v-bind:headers="headers"
                        :items="fics"
                        hide-actions
                        class="elevation-1">
                      <template slot="items" scope="props">
                        <td class="text-xs-right"><a v-bind:href="props.item.titleUrl">{{ props.item.title }}</a></td>
                        <td class="text-xs-right"><a v-bind:href="props.item.authorUrl">{{ props.item.author }}</a></td>
                        <td class="text-xs-right">{{ props.item.description }}</td>
                      </template>
                    </v-data-table>
                </v-flex>
              </v-layout>
</template>
