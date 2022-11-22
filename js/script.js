import {slides} from "/js/data.js";

const { createApp } = Vue;

createApp({
    data(){
        return{
            slides,
            currentIndex : 0,
        }
    },

    methods:{

    }
}).mount("#app");