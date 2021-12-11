import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.ceylonpickup.com"
})

export default instance;