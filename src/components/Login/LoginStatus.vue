<template>
    <div>
        <v-layout row>
            <v-flex md5 lg5 class="ma-5 text-lg-right text-md-right" v-if="loginStatus">
                <v-btn @click="changeLoginStatus">Log Out</v-btn>
            </v-flex>
            <v-flex md5 lg5 class="ma-5 text-lg-right text-md-right" v-if="!loginStatus">
                <v-btn @click="changeLoginStatus">Log In</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./LoginStatus.js"></script>