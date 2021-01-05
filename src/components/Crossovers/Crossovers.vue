<template>
    <div>
        <v-alert color="error" icon="error" dismissible v-model="alert">
            {{message}}
        </v-alert>
        <v-layout row>
            <v-flex xs6 class="ml-5 mt-5 mb-5">
                <v-card>
                    <v-toolbar dark class="indigo darken-4">
                        <v-toolbar-title>Fanfiction</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list class="pb-0 pt-0">
                        <div v-for="(item1, index) in fanfictionSelection1" v-bind:key="item1.fanfiction" dark>
                            <v-list-tile @click="setActive1(item1.fanfiction, index)" v-model="item1.active">
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="item1.fanfiction"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6 class="ml-5 mt-5 mb-5 mr-5">
                <v-card>
                    <v-toolbar dark class="indigo darken-4">
                        <v-toolbar-title>Fanfiction</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list class="pb-0 pt-0">
                        <v-list-tile @click="setActive2('All', null)" v-model="allActive">
                            <v-list-tile-content>
                                <v-list-tile-title>All</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <div v-for="(item2, index) in fanfictionSelection2" v-bind:key="item2.fanfiction" dark>
                            <v-list-tile @click="setActive2(item2.fanfiction, index)" v-model="item2.active">
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="item2.fanfiction"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./Crossovers.js"></script>