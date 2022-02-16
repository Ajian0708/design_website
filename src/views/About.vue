<template>
<navebar />
<div class="page-kv kv">
        <a class="scroll-down color-yen-yellow">
            Scroll
        </a>
        <div class="about-banner page-banner">
            
            
        </div>
        <div class="kv-content flex flex-center">
            <div class="kv-title about-titles">
                <div class="about-kv-title ">
                    <img src="@/assets/About.svg" alt="">
                </div>
                <h6 class="color-white about-kv-p">我們認為<br>空間場所都是由使用者的需求、 <br class="pc-hidden">特質及情感所交織衍生而成<br>
                那 我們來談談關於你的空間如何衍生吧!
</h6>



            <!--    <div class="flex flex-center m-kv-btn">
                    <a href="" class="nav-btn m-hidden">Contact Now!</a>
                </div>
            -->
            </div>
        </div>
    </div>
    <section class="about" id="main-section">
        <div class="content ">
            <div class="row no-gutters">
                <div class="about-content col-md-6 col-12 about-con">
                    <div>   
                    <h2 class="color-yen-yellow"><span>主持設計師</span>嚴挺軒 Ryan</h2>
                     <ul>
                                    <li>
                                        <p>建築物室內設計技術證</p>
                                    </li>
                                     <li>
                                        <p>建築物室內裝修工程管理技術證</p>
                                    </li>
                                    <li>
                                        <p>內政部建築物室內裝修業登記證字號 : 40E2011061</p>
                                    </li>

                      </ul>
                       </div>
                       <div>    
                       <h3 class="color-yen-yellow"><span>設計師</span>吳培瑄 </h3>
                <p>建築物室內裝修工程管理技術證 </p>
                <p>丙種職業安全衛生業務主管</p>
                 </div>
                 <div>  

                <h3 class="color-yen-yellow"><span>監造設計師</span>林勝達 Sean</h3>
                <p>建築物室內裝修工程管理技術證</p>
                </div>

<!--
                    <h2 class="index-title color-yen-yellow">得獎紀錄</h2>
                   <div class="award-con"> 
                            <div class="award-year">
                                <h4>2019</h4>
                                <ul>
                                    <li>
                                        <p> 台灣金點設計獎  入圍  Golden Pin Design Award (Starburst House)</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="award-year">
                                <h4>2019</h4>
                                <ul>
                                    <li>
                                        <p> 台灣金點設計獎  入圍  Golden Pin Design Award (Starburst House)</p>
                                    </li>
                                    <li>
                                        <p> 台灣金點設計獎  入圍  Golden Pin Design Award (Starburst House)</p>
                                    </li>
                                </ul>
                            </div>

                   </div>   
            -->
                   <div class=" ">
                       <router-link to="/work" class="btn-y">案例分享</router-link>
                
                    </div>


           
                </div>
              <div class="about-pic col-md-6 col-12">
                    <img src="@/assets/index-about-intro-img.jpg" alt="">
                </div>
       
            </div>
        </div>
    </section>
    <gmap/>
</template>



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
/*div,span,img,nav,section{
  border:1px solid black;
}*/
/* line 9, ../sass/_about_style.scss */
.about-kv-title {
  width: 36%;
  max-width: 400px;
  margin: 0 auto;
}

/* line 14, ../sass/_about_style.scss */
.about-kv-p {
  max-width: 900px;
  width: 100%;
  margin: 5px;
}

/* line 20, ../sass/_about_style.scss */
.about-titles {
  padding-bottom: 100px;
}

/* line 26, ../sass/_about_style.scss */
.about-con .index-title:before {
  content: "Award";
}

/* line 33, ../sass/_about_style.scss */
.award-year h4 {
  color: #C9BC9C;
  letter-spacing: 0px;
  font-weight: bold;
  margin: 5px 0;
}
/* line 40, ../sass/_about_style.scss */
.award-year ul li {
  margin-left: 25px;
  letter-spacing: 0px;
  line-height: 1.5;
  border-left: #C9BC9C 1px solid;
  padding: 10px;
  padding-left: 20px;
}

/* line 54, ../sass/_about_style.scss */
.page-banner {
  width: 100vw;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
}
/* line 60, ../sass/_about_style.scss */
.page-banner:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

/* line 71, ../sass/_about_style.scss */
.about-banner {
  background-image: url(~@/assets/about-cover.jpg);
}

/* line 76, ../sass/_about_style.scss */
.about-con h2 {
  line-height: 1.3;
}
/* line 78, ../sass/_about_style.scss */
.about-con h2 span {
  font-size: 70%;
  display: block;
}
/* line 83, ../sass/_about_style.scss */
.about-con div {
  margin-bottom: 40px;
}
/* line 86, ../sass/_about_style.scss */
.about-con h3 {
  line-height: 1.3;
  font-weight: bold;
}
/* line 89, ../sass/_about_style.scss */
.about-con h3 span {
  font-size: 70%;
  display: block;
}

@media (max-width: 767px) {
  /* line 12, ../sass/_about_media.scss */
  .pc-hidden {
    display: block;
  }

  /* line 16, ../sass/_about_media.scss */
  .m-btn {
    display: none;
  }
}
@media (max-width: 580px) {
  /* line 21, ../sass/_about_media.scss */
  .about {
    margin-bottom: 6vw;
  }
  /* line 23, ../sass/_about_media.scss */
  .about .content {
    padding: 10vw;
  }
  /* line 26, ../sass/_about_media.scss */
  .about .award-con {
    margin-bottom: 6vw;
  }

  /* line 30, ../sass/_about_media.scss */
  .about-kv-title {
    width: 60%;
    margin-bottom: 1vw;
  }

  /* line 34, ../sass/_about_media.scss */
  .about-kv-p {
    width: 80%;
    margin: 0 auto;
  }
}

</style>