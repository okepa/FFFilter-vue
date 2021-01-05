import Vue from 'vue'
import axios from 'axios';
import { EventBus } from '../main';

export default class HttpRequestService{
    static getRequest(route) {
        EventBus.$emit('loadingBar', "on");
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*', "x-access-token": Vue.cookie.get('FFFilter') }
            }
            axios.get(process.env.API_URL + route, headers)
                .then((response) => {
                    EventBus.$emit('loadingBar', "off");
                    resolve(response);
                })
                .catch((error) => {
                    EventBus.$emit('loadingBar', "off");
                    reject(error);
                });
        });
    }
    static postRequest(route, item) {
        EventBus.$emit('loadingBar', "on");
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*', "x-access-token": Vue.cookie.get('FFFilter') }
            }
            axios.post(process.env.API_URL + route, item, headers)
                .then((response) => {
                    EventBus.$emit('loadingBar', "off");
                    resolve(response);
                })
                .catch((error) => {
                    EventBus.$emit('loadingBar', "off");
                    reject(error);
                });
        });
    }
}