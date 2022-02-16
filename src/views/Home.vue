<template>
  <div class="kv " id="main-kv">
        <a class="scroll-down color-yen-yellow">
            Scroll
        </a>
        <div class="slider_container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="kv-content flex flex-center">
            <div class="kv-title">
                <h1 class="color-white titleh1">You need,<br> We create</h1>
                <h4 class="color-white">Bringing Creative interiors into life</h4>
                <div class="flex flex-center m-kv-btn">
                    <a href="https://forms.gle/1YTZGZya2bgHCJPi6" class="nav-btn pc-hidden">Contact Now!</a>
                </div>
            </div>
        </div>
    </div>

   <section class="about" id="main-section">
        <div class="content ">
            <div class="row no-gutters">
                <div class="about-content col-md-6 col-12">
                    <h2 class="index-title color-yen-yellow">關於我們</h2>
                    <p class="index-p">我們認為 <br>
空間場所都是由使用者的需求、特質及情感所交織衍生而成 <br>
那 我們來談談關於你的空間如何衍生吧！

                    </p>
                    <div class="m-hidden">
                      <router-link class="btn-y" to="/about">More</router-link>
                    </div>
                </div>
                <div class="about-pic col-md-6 col-12">
                    <img src="@/assets/index/index_about_img.jpg" alt="">
                    <div class="flex flex-center">
                        <router-link to="/about" class="btn-y  pc-hidden">More</router-link>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="work">
        <div class="row flex flex-stretch work-row no-gutters ">
            <div class="work-pic col-md-7 col-12 order-2 order-md-1">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner carousel-inner-work">
                        <div class="carousel-item active">
                        </div>
                        <!--<div class="carousel-item">
                        </div>
                        <div class="carousel-item">
                        </div>
                         <div class="carousel-item">
                        </div>
                        <div class="carousel-item">
                        </div>-->
                    </div>
                    <!--<div class="cc-arrow">
                        <a class="cc-arrow-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <img src="@/assets/default/arrow-prev.svg" alt="prev">
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="cc-arrow-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <img src="@/assets/default/arrow-next.svg" alt="next">
                            <span class="sr-only">Next</span>
                        </a>
                    </div>-->
                </div>
                <div class="flow-btn flex flex-center">
                  <router-link to="/work" class="btn-y  pc-hidden">More</router-link>
                  </div>

            </div>
            <div class="work-content col-md-5 col-12 order-1 order-md-2">
                <div class="wc-con">
                    <div class="wc-word">
                        <h2 class="index-title color-yen-yellow">案例分享</h2>
                     <p class="index-p">居家室內設計<br>商用空間設計<br><br><br></p>
                      
                        <a href="work.html" class="btn-y m-hidden"  >
                            More
                        </a>
                        <div>
                        </div>

                    </div>
                </div>
              </div>

        </div>
    </section>
    <div id="flow"> </div>
    <!--work-end-->
        <section class="flow" >
        <div class="f-gray-bg"></div>
        <div class="flow-content">
            <div class="flow-con">
                <h2 class="index-title color-white">案件流程</h2>
            </div>
        </div>
        <div class="flow-pic">  

            <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow01.svg">
                </div>
                <div class="flow-wordh">
                    <h5>初步洽談</h5>
                    <p>初步與屋主接洽，了解需求與房屋概況</p>
                </div>
            </div>
            <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow02.svg">
                </div>
                <div class="flow-wordh">
                    <h5>場勘丈量</h5>
                    <p>至現場場勘丈量與紀錄現況</p>
                </div>
            </div>
             <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow03.svg">
                </div>
                <div class="flow-wordh">
                    <h5>平面提案</h5>
                    <p>平面圖提案並討論至設計案平面配置確認<br>(一次性提案費用,可於後續折抵)</p>
                </div>
            </div>
             <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow04.svg">
                </div>
                <div class="flow-wordh">
                    <h5>設計約簽訂</h5>
                    <p>確認設計合約細目與合約簽訂</p>
                </div>
            </div>
            <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow05.svg">
                </div>
                <div class="flow-wordh">
                    <h5>圖說繪製</h5>
                    <p>3D圖與施工圖面繪製，並與業主討論確認</p>
                </div>
            </div>

            <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow06.svg">
                </div>
                <div class="flow-wordh">
                    <h5>施工圖說</h5>
                    <p>完成施工圖說並提出工程預算書</p>
                </div>
            </div>


             <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow07.svg">
                </div>
                <div class="flow-wordh">
                    <h5>工程約簽訂</h5>
                    <p>確認工程合約細目與合約簽訂</p>
                </div>
            </div>
             <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow08.svg">
                </div>
                <div class="flow-wordh">
                    <h5>監工回報</h5>
                    <p>裝修工程期間，彙整進度及照片於共同平台
</p>
                </div>
            </div>
            
             <div class=" fp ">
                <div class="flow-step">
                   <img src="@/assets/index/flow09.svg">
                </div>
                <div class="flow-wordh">
                    <h5>完工驗屋</h5>
                    <p>工程完成，業主驗收交屋</p>
                </div>
            </div>
     
        </div>
    <!--    <div class="flow-btn flex flex-center">
            <a href="" class="btn-y">
                More
            </a>
        </div>-->
    </section>
</template>

<style>

</style>