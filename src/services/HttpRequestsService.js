import axios from 'axios';

export default {

    getRequest(route){
        return new Promise ((resolve, reject) => {
            var headers = {
                headers: {'Access-Control-Allow-Origin': '*'}
            }
            axios.get("http://localhost:3000/" + route, headers)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
}