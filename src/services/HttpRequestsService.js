import axios from 'axios';

export default {

    getRequest(route) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            axios.get("http://localhost:3000/" + route, headers)
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
            axios.post("http://localhost:3000/" + route, item, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}