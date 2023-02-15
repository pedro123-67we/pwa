import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://192.168.0.246:8000/api/v1/user',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}