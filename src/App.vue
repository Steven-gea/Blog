<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  
  <!-- <div> -->
      <header id="" class="fixed w-full h-20 z-20 text-center bg-gradient-to-b from-blue-300 to-transparent">
        <!-- <div class="container mx-auto"> -->
        <!-- <input type="checkbox" class="hidden" id="navi-toggle"> -->

      <!-- <label for="navi-toggle" class="bg-blue-300 w-16 h-16 z-30 top-12 right-12 rounded-full fixed">
        <span class="absolute my-6 mx-4 w-8 h-0.5 bg-black inline-block "></span>
        <span class="absolute my-8 mx-4 w-8 h-0.5 bg-black inline-block "></span>
        <span class="absolute my-10 mx-4 w-8 h-0.5 bg-black inline-block "></span>
      MENU</label> -->

      <!-- <div class="w-12 h-12 z-10 top-14 right-14 rounded-full fixed
         bg-gradient-to-b from-blue-400 to-indigo-700
         transition delay-700 ease-in-out">&nbsp;</div> -->
        <nav id="" class="">
          <div class="sm:visible">
            <router-link to="/Language" class="inline-block px-2 mt-0.5 mx-2.5 md:px-4 py-4 rounded-full text-xs md:text-sm leading-6 
            hover:bg-green-500 hover:bg-opacity-30">術語</router-link>
            <router-link to="/Type" class="inline-block px-2 mt-0.5 mx-2.5 md:px-4 py-4 rounded-full text-xs md:text-sm leading-6 
            hover:bg-green-500 hover:bg-opacity-30">照相機分類</router-link>
            <router-link to="/Brand" class="inline-block px-2 mt-0.5 mx-2.5 md:px-4 py-4 rounded-full text-xs md:text-sm leading-6 
            hover:bg-green-500 hover:bg-opacity-30">照相機品牌</router-link>
            <router-link to="/" class="inline-block px-2 mt-0.5 mx-2.5 md:px-4 py-4 rounded-full text-xs md:text-sm leading-6 
            hover:bg-green-500 hover:bg-opacity-30">返回</router-link>
          </div>
        </nav>

        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-4">
          <div @click="hideMenu()">
            <router-link class="nav-item nav-link mr-2" to="/">Home</router-link>
            </div>
            <div @click="hideMenu()">
              <router-link class="nav-item nav-link mr-2" to="/faq">FAQ</router-link>
              </div>
              <div @click="hideMenu()">
                <a href="https://steven-gea.github.io/Blog/" class="nav-item nav-link mr-2">Blog</a>
                </div>
                </div>
        </div>
        </nav> -->
        
        <!-- </div> -->
        <!-- </div>  -->
         <!-- <div class="flex flex-col py-20 justify-end md:justify-center items-center w-full h-full ">
          <div class="w-4/5 md:text-left">
           <h1 class="md:mb-8 text-2xl md:text-4xl font-bold text-gray-200">只要有了它<br>就能收藏你的一瞬間</h1>
           <a class="hover:bg-opacity-70 hidden md:inline-flex rounded-full left-0 px-5 py-3 bg-blue-500 text-gray-900 text-xl font-bold leading-6" href="">立即了解</a>
          </div>
          </div> -->
      </header>



      
      <router-view></router-view>
      <!-- <section class="">
          <picture class="">
            <img src="./assets/lenses-gbd375ddfd_1920.jpg" class="absolute w-full h-screen filter brightness-150 object-cover object-center">
          </picture>
       <div class="text-center py-20 relative">
         <h2 class="font-bold md:text-4xl text-xl pb-20">結構和元件</h2>
         <div class="pb-20 font-medium md:text-base text-xs ">
         <h3>通常，照相機主要元件包括：成像元件、暗室、成像介質與成像控制結構。</h3><br>
             <h3>感光元件可以進行成像。通常是由光學玻璃製成的透鏡組，稱之為鏡頭。</h3><br>
             <h3>對於一些特定的設備，小孔、電磁閥等亦可起到「鏡頭」的作用。</h3><br>
             <h3>成像介質則負責捕捉和記錄影像。包括底片、CCD、CMOS等。</h3><br>
             <h3>暗室負責連接鏡頭與成像介質，用以保護成像介質並確保在成像的過程中成像介質不會受到外界的光的干擾。</h3><br>
             <h3>控制結構可以改變成像或記錄影像的方式以及影像最終的成像效果。並對光圈、快門、對焦等進行控制。</h3>
       </div></div>
      </section> -->
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

 .navbar {
    position: relative;
    padding: .5rem 1rem
}
/*.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat 50%;
    background-size: 100% 100%
}
.navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center
}
.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem
} */
/* @media (max-width:991.98px) {

    .navbar-expand-lg>.container,
    .navbar-expand-lg>.container-fluid {
        padding-right: 0;
        padding-left: 0
    }
}

@media (min-width:992px) {
    .navbar-expand-lg {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-lg>.container,
    .navbar-expand-lg>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-lg .navbar-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }
} */
/* .navbar-light .navbar-brand,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
    color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0, 0, 0, .7)
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, .3)
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show>.nav-link {
    color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, .5);
    border-color: rgba(0, 0, 0, .1)
}

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.navbar-light .navbar-text {
    color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-text a,
.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
    color: rgba(0, 0, 0, .9)
} */
/* .bg-light {
    background-color: #f8f9fa !important
} */
/* .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}
.navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0
}

.navbar-nav .dropdown-menu {
    position: static;
    float: none
} */

</style>

