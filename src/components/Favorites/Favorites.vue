<template>
    <div>
        <v-alert color="error" icon="error" dismissible v-model="error">
            {{message}}
        </v-alert>
        <v-alert color="success" icon="success" dismissible v-model="success">
            {{message}}
        </v-alert>
        <v-layout row>
            <v-flex xs5 class="ma-5">
                <v-text-field name="title" label="Title" class="input-group--focused" v-model="favorite.title" :error-messages="errors.collect('title')" v-validate="'required'" data-vv-name="title" required></v-text-field>
            </v-flex>
            <v-flex xs5 class="ma-5">
                <v-select name="fanfiction" v-bind:items="fanfiction" v-model="favorite.fanfiction" label="Select Fanfiction" class="input-group--focused" item-text="fanfiction" item-value="fanfiction" :error-messages="errors.collect('fanfiction')" v-validate="'required'" data-vv-name="fanfiction" required></v-select>
            </v-flex>
            <v-flex xs2 class="ma-5">
                <v-btn @click="addToFavorites" class="indigo darken-4" dark>Submit</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 class="ma-5">
                <v-data-table v-bind:headers="headers" :items="favorites" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.title }}</td>
                        <td>{{ props.item.fanfiction }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./Favorites.js"></script>