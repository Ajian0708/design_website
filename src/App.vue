<script>
import gmap from "@/components/map.vue"
import {ref,onMounted,Vue,watch} from 'vue'
import {useRoute} from "vue-router";

export default{
  components:{
    gmap
  },
  setup(){

    const route = useRoute();
    const reuteArr = ["", "about", "work"];
    const idx = ref(0);

    watch(
      () => route.path,
      () => {
        reuteArr.forEach((item, index) => {
          const rp = route.path.substr(1).split("/")[0];
          if (rp === item) {
            idx.value = index;
          }
        });
      }
    );

const $ = require('jquery');
// We declare it globally
window.$ = $;


    const isopen=ref(true)
     const HandListShow = () => {
            isopen.value = !isopen.value;
          };
    
    onMounted(() => {
      
       const header = $("#main-kv").height();
       const nav = document.querySelector("#main-nav")
      
        window.addEventListener('scroll', ()=>{
        if (window.scrollY > header) {
        nav.classList.add('change');
       } else {
         nav.classList.remove('change');
         }
        });
      
         /*  $('.single-item').slick({
        dots: false,
        arrow: true,
        //draggable: false
       });*/
          });

    return{idx,HandListShow}
  }
}

</script>


<template>
  <nav id="main-nav">
        <div class="logo">
            <div class="logo-pic">
                <router-link to='/'><img src="https://www.yenyencross.com/images/yen-logo.svg" alt=""></router-link>
            </div>
        </div>
        <div class="menu">
            <ul class="menu-ul">
                <li><router-link to="/about" :class="{ actives: idx === 1 }">About</router-link></li>
                <li><router-link to="/work" :class="{actives:idx===2}">Works</router-link></li>
                 <li class="nav-icon m-hidden">
                    <a href="https://forms.gle/1YTZGZya2bgHCJPi6" target="_blank" class="nav-btn">Contact Now!</a>
                </li>
              <li class="nav-icon">
                    <a href="https://www.facebook.com/yenyencross" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" width="13.51" height="23.902" viewBox="0 0 13.51 23.902">
                            <path id="icon_fb" d="M22.392,6.677h2.6a.52.52,0,0,0,.52-.52v-3.5a.518.518,0,0,0-.481-.518C24.2,2.08,22.588,2,21.426,2c-3.191,0-5.269,1.912-5.269,5.387v3.446H12.52a.52.52,0,0,0-.52.52V14.99a.52.52,0,0,0,.52.52h3.637v9.873a.52.52,0,0,0,.52.52h3.637a.52.52,0,0,0,.52-.52V15.51h3.753a.519.519,0,0,0,.516-.463l.4-3.637a.52.52,0,0,0-.517-.577H20.833v-2.6A1.559,1.559,0,0,1,22.392,6.677Z" transform="translate(-12 -2)"></path>
                        </svg>
                    </a>
                </li>
                <li class="nav-icon">
                    <a href="https://www.instagram.com/yenyencross/?hl=zh-tw" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" width="21.988" height="21.988" viewBox="0 0 21.988 21.988">
                            <path id="icon_ig" d="M9.5,3A6.5,6.5,0,0,0,3,9.5v9a6.5,6.5,0,0,0,6.5,6.5h9a6.5,6.5,0,0,0,6.5-6.5v-9a6.5,6.5,0,0,0-6.5-6.5ZM19.991,7a1,1,0,1,1-1,1A1,1,0,0,1,19.991,7Zm-6,1.5a5.5,5.5,0,1,1-5.5,5.5A5.5,5.5,0,0,1,13.994,8.5Zm0,1a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,13.994,9.5Z" transform="translate(-3 -3)"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <router-view />
    <gmap/>
</template>

<style >
.actives{ color:#c7bca0 !important;}
  /* line 157, ../sass/_layout_style.scss */
  .slider_container div:nth-child(1) {
    background-image: url(~@/assets/case/kv01.webp);
  }
  /* line 161, ../sass/_layout_style.scss */
  .slider_container div:nth-child(2) {
    background-image: url(~@/assets/index/kv02.jpg);
  }
  /* line 164, ../sass/_layout_style.scss */
  .slider_container div:nth-child(3) {
    background-image: url(~@/assets/index/kv03.jpg);
  }
  /* line 167, ../sass/_layout_style.scss */
  .slider_container div:nth-child(4) {
    background-image: url(~@/assets/index/kv02.jpg);
  }
  /* line 170, ../sass/_layout_style.scss */
  .slider_container div:nth-child(5) {
    background-image: url(~@/assets/index/kv03.jpg);
  }
    /* line 355, ../sass/_layout_style.scss */
  .carousel-inner-work .carousel-item:nth-child(1) {
    background-image: url(~@/assets/index/w-tt01.jpg);
  }
  /* line 358, ../sass/_layout_style.scss */
  .carousel-inner-work .carousel-item:nth-child(2) {
    background-image: url(~@/assets/index/w-tc01.jpg);
  }
  /* line 361, ../sass/_layout_style.scss */
  .carousel-inner-work .carousel-item:nth-child(3) {
    background-image: url(~@/assets/index/w-tc02.jpg);
  }
  /* line 364, ../sass/_layout_style.scss */
  .carousel-inner-work .carousel-item:nth-child(4) {
    background-image: url(~@/assets/index/w-yi01.jpg);
  }
  /* line 367, ../sass/_layout_style.scss */
  .carousel-inner-work .carousel-item:nth-child(5) {
    background-image: url(~@/assets/index/w-tc03.jpg);
  }
  .carousel-item{}
    /* line 493, ../sass/_layout_style.scss */
  .flow-pic .flow-step:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 40px;
    right: -30px;
    top: 0;
    margin-top: 40%;
    background-image: url(~@/assets/default/arrow-next.svg);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .carousel-item{ position:;}
</style>
