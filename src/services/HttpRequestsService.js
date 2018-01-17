import axios from 'axios';

export default {

    getRequest(route) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            axios.get(process.env.API_URL + route, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    postRequest(route, item) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            axios.post(process.env.API_URL + route, item, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}