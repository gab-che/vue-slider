import {slides} from "/js/data.js";

const { createApp } = Vue;

createApp({
    data(){
        return{
            slides,
            currentIndex : 0,
            timerId: undefined
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
        },

        onClick(clickedImg){
            this.currentIndex = clickedImg;
        },

        startTimer(){
            this.timerId = setInterval(()=>{
            this.nextImg()
            }, 3000)
        },

        stopTimer(){
            clearInterval(this.timerId)
        }

    },
    
    mounted(){
        this.startTimer()
    }
}).mount("#app");