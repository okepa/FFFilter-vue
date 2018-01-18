<template>
    <div>
        <v-layout row>
            <v-flex md12 lg12 class=" text-lg-right text-md-right" v-if="loginStatus">
                <v-btn @click="changeLoginStatus" class="indigo darken-4" dark flat>Log Out</v-btn>
            </v-flex>
            <v-flex md12 lg12 class="text-lg-right text-md-right" v-if="!loginStatus">
                <v-btn @click="changeLoginStatus" class="indigo darken-4" dark flat>Log In</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./LoginStatus.js"></script>