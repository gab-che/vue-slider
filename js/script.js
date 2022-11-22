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
        prevImg(){
            if(this.currentIndex === 0){
                this.currentIndex = this.slides.length -1;
            } else{
                this.currentIndex--;
            }
        },

        nextImg(){
            if(this.currentIndex === this.slides.length - 1){
                this.currentIndex = 0;
            } else{
                this.currentIndex++;
            }
        }
    }
}).mount("#app");