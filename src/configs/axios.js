import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true
});

instance.interceptors.response.use(
    response => {
        return response.data
    }
)

export default instance