'use strict'
import axios from "axios"
const  rest_api = {

api_instance : function(){
  return axios.create({
    baseURL: "http://localhost:8080/",
    responseType: 'json',
    headers: {
      'Accept': 'application/json',
      }
    })
  }
}

export default rest_api