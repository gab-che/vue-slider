import {slides} from "/js/data.js";

const { createApp } = Vue;

createApp({
    data(){
        return{
            slides
        }
    },

    methods:{

    }
}).mount("#app");