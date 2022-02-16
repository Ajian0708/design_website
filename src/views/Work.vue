<template>
  <div class="page-kv kv">
        <a class="scroll-down color-yen-yellow">
            Scroll
        </a>
        <div class="work-banner page-banner">


        </div>
        <div class="kv-content flex flex-center">
            <div class="kv-title about-titles">
                <div class="about-kv-title">
                    <img src="@/assets/Works.svg" alt="關於言衍">
                </div>
               <!-- <p class="color-white about-kv-p">內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補
內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補
</p>-->
                <div class="works-kv-btn flex flex-center">
                    <a class="nav-btn" id="wb-in">居家室內設計</a>
                    <a class="nav-btn" id="wb-com">商用空間設計 </a>
                </div>
            </div>
        </div>
    </div>
    <section class="home" id="wb-in-con">
        <div class="flow-content home-content">
            <div class="flow-con">
                <h2 class="index-title color-white">居家室內設計</h2>
            </div>
        </div>
        <div class="home-pic">
        <div class="row work-list" id="project1">
          
            <div class="col-12 col-md-4 work-item" v-for="item in mode1.arr" :key="item.idx">
            <a @click="goToCourses(item.idx)">
               <h4 class="wi-h4">{{item.name}}</h4>
               <div class="wi-img"> 
               <img :src="item.url" alt="">
               </div>
               </a>
            </div>
            
        </div>
        </div>
    </section>
    <section class="conmercial" id="wb-com-con">
        <div class="flow-content conmercial-content">
            <div class="flow-con">
                <h2 class="index-title color-white">商用空間設計</h2>
               <!-- <p class="index-p">內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補內文待補</p>
               -->
            </div>
        </div>
        <div class="home-pic">
        <div class="row work-list" id="project2">
            <div class="col-12 col-md-4 work-item"  v-for="item in mode2.arr" :key="item.idx">
                <a  @click="goToCourses(item.idx)">
                    <h4 class="wi-h4">{{item.name}}</h4>
                    <div class="wi-img">
                     <img :src="item.url" alt="">
                    </div>
                </a>
            </div>
        </div>
        </div>
     
    </section>
</template>

<script>
import axios from "axios";
import { onMounted,reactive,computed } from "vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router"
export default {
    setup(){
         const usestore=useStore();
         const datas = reactive({
            arr: [],
          });
        const router=useRouter();
        const goToCourses=(id)=>{
            router.push(`/courses/${id}`)
        }
             const mode1=reactive({arr:[]})
             const mode2=reactive({arr:[]})
        onMounted(()=>{
              datas.arr=usestore.getters["project"]
              datas.arr.forEach((el, idx) => {
                if (el.type === 1) {
                  mode1.arr.push(el)
                }
                 if (el.type === 2) {
                   mode2.arr.push(el)
                }
                });
               window.scrollTo({ 
                      top: 0, 
                      behavior: "smooth" 
                  });
           
        })
         return {mode1,mode2,goToCourses};
    }
}
</script>

<style>
/* Welcome to Compass.
 * In this file you should write your main styles. (or centralize your imports)
 * Import this file using the following HTML or equivalent:
 * <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" /> */
/*@import "_mixin.sass" */
/* line 7, ../sass/_standard.scss */
strong {
  font-weight: bolder;
}

/* line 10, ../sass/_standard.scss */
table, tr, td {
  border: gray solid 1px;
}

/* line 28, ../sass/_standard.scss */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: ease 0.3s;
  position: relative;
  letter-spacing: 1px;
}

/* line 37, ../sass/_standard.scss */
img {
  width: 100%;
  height: auto;
}

/* line 41, ../sass/_standard.scss */
body, html {
  overflow-x: hidden !important;
  font-family: Arial, "Heiti TC", 'Microsoft JhengHei', Helvetica, sans-serif;
}

/* line 45, ../sass/_standard.scss */
a {
  cursor: pointer;
  color: #243B45;
  text-decoration: none;
}
/* line 49, ../sass/_standard.scss */
a:hover {
  color: #C9BC9C;
  text-decoration: none;
}

/* line 54, ../sass/_standard.scss */
::-moz-selection {
  background: #243B45;
  color: white;
}

/* line 58, ../sass/_standard.scss */
::selection {
  background: #243B45;
  color: white;
}

/**color**/
/* line 68, ../sass/_standard.scss */
.color-yen-bgreen {
  color: #243B45;
}

/* line 71, ../sass/_standard.scss */
.bg-yen-bgreen {
  background-color: #243B45;
}

/* line 74, ../sass/_standard.scss */
.color-yen-yellow {
  color: #C9BC9C;
}

/* line 77, ../sass/_standard.scss */
.bg-yen-yellow {
  background-color: #C9BC9C;
}

/* line 80, ../sass/_standard.scss */
.color-gray {
  color: #707070;
}

/* line 83, ../sass/_standard.scss */
.color-white {
  color: white;
}

/* line 86, ../sass/_standard.scss */
.bg-lighty {
  background-color: rgba(239, 233, 223, 0.3);
}

/* line 89, ../sass/_standard.scss */
.bg-lightg {
  background-color: rgba(36, 59, 69, 0.15);
}

/**font-size**/
/* line 96, ../sass/_standard.scss */
h1 {
  font-size: 84px;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: 4px;
}

/* line 103, ../sass/_standard.scss */
h1.titleh1 {
  font-family: Segoe Script !important;
}

/* line 106, ../sass/_standard.scss */
h2 {
  font-size: 42px;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: 4px;
}

/* line 112, ../sass/_standard.scss */
h3 {
  font-size: 31.5px;
  line-height: 1.5;
}

/* line 116, ../sass/_standard.scss */
h4 {
  font-size: 26.25px;
  line-height: 1.5;
}

/* line 121, ../sass/_standard.scss */
h5 {
  font-size: 21px;
  line-height: 1.5;
}

/* line 126, ../sass/_standard.scss */
h6 {
  font-size: 15.75px;
  line-height: 1.5;
}

/* line 131, ../sass/_standard.scss */
p {
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0px;
}

/* line 136, ../sass/_standard.scss */
.smaller {
  font-size: 75%;
}
.page-banner {
    width: 100vw;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
}
.page-banner:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
}
/* line 139, ../sass/_standard.scss */
.bigger {
  font-size: 125%;
}

/**BTN**/
/* line 155, ../sass/_standard.scss */
.btn-gb, .btn-y {
  text-align: center;
  border: 2px solid;
  position: relative;
  display: block;
  overflow: hidden;
}
/* line 161, ../sass/_standard.scss */
.btn-gb:before, .btn-y:before {
  content: '';
  transform: translateX(-100%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: 0.3s ease;
}
/* line 169, ../sass/_standard.scss */
.btn-gb:hover, .btn-y:hover {
  color: white;
}
/* line 171, ../sass/_standard.scss */
.btn-gb:hover:before, .btn-y:hover:before {
  transform: translateX(0%);
}

/* line 177, ../sass/_standard.scss */
.btn-gb {
  width: 250px;
  height: 55px;
  font-size: 17.5px;
  line-height: 56px;
  margin: 30px 0;
  color: #243B45;
  border-color: #243B45;
}
/* line 185, ../sass/_standard.scss */
.btn-gb:before {
  width: 280px;
  height: 60px;
  background-color: #243B45;
}

/* line 190, ../sass/_standard.scss */
.btn-y {
  z-index: 15;
  width: 250px;
  height: 55px;
  font-size: 17.5px;
  line-height: 56px;
  margin: 30px 0;
  color: #C9BC9C;
  border-color: #C9BC9C;
}
/* line 199, ../sass/_standard.scss */
.btn-y:before {
  width: 280px;
  height: 60px;
  background-color: #C9BC9C;
}

/**LAYOUT**/
/* line 208, ../sass/_standard.scss */
.flex {
  display: flex;
  flex-wrap: wrap;
}

/* line 212, ../sass/_standard.scss */
.flex-nowrap {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

/* line 217, ../sass/_standard.scss */
.flex-center {
  justify-content: center;
  align-items: center;
}

/* line 221, ../sass/_standard.scss */
.flex-sb {
  justify-content: space-between;
  align-items: center;
}

/* line 225, ../sass/_standard.scss */
.flex-stretch {
  align-items: stretch;
}

/* line 229, ../sass/_standard.scss */
.pc-hidden {
  display: none;
}

/* line 233, ../sass/_standard.scss */
.content {
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 84px;
  position: relative;
}

/* line 249, ../sass/_standard.scss */
footer {
  background-color: white;
  position: relative;
  z-index: 50;
}
/* line 253, ../sass/_standard.scss */
footer p {
  text-align: center;
  padding: 25px;
  font-size: 11px;
}

/* line 260, ../sass/_standard.scss */
.backtop {
  cursor: pointer;
  display: none;
  width: 50px;
  background-color: #243B45;
  padding: 11px;
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 0;
  margin-bottom: 4%;
}
/* line 271, ../sass/_standard.scss */
.backtop:hover {
  opacity: 0.6;
}

/****burger********/
/* line 281, ../sass/_standard.scss */
.burger, .burger:after, .burger:before {
  position: relative;
  display: block;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  width: 40px;
  height: 4px;
}

/* line 288, ../sass/_standard.scss */
.burger-container {
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 50;
  position: relative;
}
/* line 294, ../sass/_standard.scss */
.burger-container:hover {
  opacity: 0.8;
}

/* line 299, ../sass/_standard.scss */
.burger {
  top: 18px;
  background-color: #C9BC9C;
  -moz-transition: ease-out 0.3s;
  -o-transition: ease-out 0.3s;
  -webkit-transition: ease-out 0.3s;
  transition: ease-out 0.3s;
}
/* line 305, ../sass/_standard.scss */
.burger:after {
  content: ' ';
  top: 8px;
  left: 0;
  background-color: #C9BC9C;
  -webkit-transition-property: transform, top;
  transition-property: transform, top;
  -webkit-transition-duration: 0.2s, 0.2s;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}
/* line 319, ../sass/_standard.scss */
.burger:before {
  content: ' ';
  bottom: 12px;
  left: 0;
  background-color: #C9BC9C;
  -webkit-transition-property: transform, bottom;
  transition-property: transform, bottom;
  -webkit-transition-duration: 0.2s, 0.2s;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}

/* line 335, ../sass/_standard.scss */
.burger-active {
  background-color: transparent;
}
/* line 338, ../sass/_standard.scss */
.burger-active:before {
  bottom: 0;
  background-color: #C9BC9C;
  transform: rotate(45deg);
  -webkit-transition-property: bottom, transform;
  transition-property: bottom, transform;
  -webkit-transition-duration: 0.2s, 0.2s;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}
/* line 350, ../sass/_standard.scss */
.burger-active:after {
  top: -5px;
  background-color: #C9BC9C;
  transform: rotate(-45deg);
  -webkit-transition-duration: 0.2s, 0.2s;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-property: top, transform;
  transition-property: top, transform;
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}

@media (max-width: 580px) {
  /* line 365, ../sass/_standard.scss */
  h2 {
    letter-spacing: 1px;
  }

  /* line 368, ../sass/_standard.scss */
  .btn-gb {
    width: 50vw;
    height: 12vw;
    font-size: 4.2vw;
    line-height: 11vw;
    margin: 5vw 0;
    color: #243B45;
    border-color: #243B45;
  }
  /* line 375, ../sass/_standard.scss */
  .btn-gb:before {
    width: 65vw;
    height: 8vw;
    background-color: #243B45;
  }

  /* line 380, ../sass/_standard.scss */
  .btn-y {
    width: 50vw;
    height: 12vw;
    font-size: 4.2vw;
    line-height: 11vw;
    margin: 5vw 0;
    color: #C9BC9C;
    border-color: #C9BC9C;
  }
  /* line 387, ../sass/_standard.scss */
  .btn-y:before {
    width: 65vw;
    background-color: #C9BC9C;
  }

  /* line 396, ../sass/_standard.scss */
  footer p {
    padding: 6vw 0;
    font-size: 2.8vw;
  }
}
@media (max-width: 767px) {
  /* line 409, ../sass/_standard.scss */
  img {
    width: 100% !important;
    height: auto !important;
  }
}
/* line 4, ../sass/_work_style.scss */
.about-kv-title {
  width: 36%;
  max-width: 400px;
  margin: 0 auto;
}

/* line 10, ../sass/_work_style.scss */
.work-banner {
  background-image: url(~@/assets/work-cover.jpg);
}

/* line 13, ../sass/_work_style.scss */
.works-kv-btn {
  margin-top: 10px;
}
/* line 15, ../sass/_work_style.scss */
.works-kv-btn a {
  width: 280px;
}

/* line 21, ../sass/_work_style.scss */
.home {
  padding: 100px 0;
}
/* line 23, ../sass/_work_style.scss */
.home .flow-con {
  max-width: 1000px;
}

/* line 27, ../sass/_work_style.scss */
.home-pic {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: -150px;
}

/* line 34, ../sass/_work_style.scss */
.work-list .work-item {
  padding: 30px;
}
/* line 37, ../sass/_work_style.scss */
.work-list .work-item a {
  overflow: hidden;
  position: relative;
  display: block;
}
/* line 41, ../sass/_work_style.scss */
.work-list .work-item a:before {
  content: '';
  width: 100%;
  height: 600px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  z-index: 2;
}
/* line 50, ../sass/_work_style.scss */
.work-list .work-item a .wi-h4 {
  width: 100%;
  z-index: 10;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  color: white;
  font-weight: bold;
  transform: translate(-50%, -50%);
}
/* line 62, ../sass/_work_style.scss */
.work-list .work-item a:hover .wi-img {
  transform: scale(1.1);
}
/* line 66, ../sass/_work_style.scss */
.work-list .work-item a:hover:before {
  background-color: rgba(0, 0, 0, 0.2);
}

/* line 76, ../sass/_work_style.scss */
.home-content .index-title:before {
  content: "Home space";
  z-index: 0;
  margin-top: -60px;
  white-space: nowrap;
}

/* line 84, ../sass/_work_style.scss */
.conmercial {
  margin-bottom: 150px;
}

/* line 87, ../sass/_work_style.scss */
.conmercial-content {
  margin-top: 100px;
  width: 77%;
  margin-left: 15%;
  background-color: #243B45;
}
/* line 92, ../sass/_work_style.scss */
.conmercial-content .index-title {
  color: white;
  position: relative;
}
/* line 95, ../sass/_work_style.scss */
.conmercial-content .index-title:before {
  content: "Commercial space";
  z-index: 0;
  color: rgba(36, 59, 69, 0.2);
  margin-top: -60px;
  width: 100%;
  margin-left: 20%;
  white-space: nowrap;
}

/* line 107, ../sass/_work_style.scss */
.work-list-hidden {
  display: none;
}

/* line 115, ../sass/_work_style.scss */
.flow-content .flow-con {
  padding: 20px 0 150px 0;
  width: 79%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
/* line 122, ../sass/_work_style.scss */
.flow-content .flow-con .index-p {
  color: white;
}

@media (max-width: 580px) {
  /* line 16, ../sass/_work_media.scss */
  .flow-con h2 {
    font-size: 7vw;
    letter-spacing: 1px;
  }

  /* line 24, ../sass/_work_media.scss */
  .conmercial .conmercial-content .index-title:before {
    content: "Commercial";
    margin-top: -30px;
  }

  /* line 36, ../sass/_work_media.scss */
  .home .home-content .index-title:before {
    content: "Home";
    margin-top: -30px;
  }
}

</style>