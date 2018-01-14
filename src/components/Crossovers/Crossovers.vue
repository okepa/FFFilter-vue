<template>
    <div>
        <v-alert color="error" icon="error" dismissible v-model="alert">
            {{message}}
        </v-alert>
        <v-layout row>
            <v-flex md6 lg6 class="ml-5 mt-5 mb-5">
                <v-card>
                    <v-toolbar dark>
                        <v-toolbar-title>Fanfiction</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>
                        <div v-for="fiction in fanfiction" v-bind:key="fiction.fanfiction" dark>
                                <v-list-tile @click="fanfiction1 = fiction.fanfiction">
                                    <v-list-tile-content>
                                        <v-list-tile-title v-text="fiction.fanfiction"></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-card>
            </v-flex>

            <v-flex md6 lg6 class="ml-5 mt-5 mb-5 mr-5">
                <v-card>
                    <v-toolbar dark>
                        <v-toolbar-title>Fanfiction</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile @click="fanfiction2 = 'All'">
                            <v-list-tile-content>
                                <v-list-tile-title>All</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <div v-for="fiction in fanfiction" v-bind:key="fiction.fanfiction" dark>
                            <v-list-tile @click="fanfiction2 = fiction.fanfiction">
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
    </div>
</template>

<script src="./Crossovers.js"></script>