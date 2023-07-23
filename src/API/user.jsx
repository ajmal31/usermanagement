import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { BASE_URL } from "../URLS/urls";


export const  userSignup=(payload)=>{


  axios.post(BASE_URL+'signup',payload).then((response)=>{

        console.log('axios response',response)

       
    })

}