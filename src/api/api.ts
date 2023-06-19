import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/characters?";

const publicKey = "ecdd95aeb3238ca0daa9f5ff961cee2d";
const privateKey = "fb8b94adfba32d4646da16455897a86372279f01";
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);


const api = axios.create({
  baseURL:"http://gateway.marvel.com/v1/public/",
  params:{
    ts,
    apikey:publicKey,
    hash,
  }
})

export default api