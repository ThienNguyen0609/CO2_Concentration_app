import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_LINK,
    withCredentials: true
});

instance.interceptors.response.use(
    response => {
        return response.data
    }
)

export default instance