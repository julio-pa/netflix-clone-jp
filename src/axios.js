import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers:{
    Accept: "application/json",
  },
  params:{
    api_key:'d524a026440aedc43329a7b537e95eaa'
  }
})

export default instance