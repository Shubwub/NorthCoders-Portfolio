<template>
  <main>
    <div id="app" class="container">
      <div class="header">
        <div id="headerLeft" class="imgText">CAMERON</div>
        <div id="headerRight" class="imgText">THORNTON</div>
        <img class="titleImg" alt="Vue logo" src="./assets/img/ONI.jpg" id='headerIMG'>
      </div>
      <nav class="nav">
        <a href="#About" id="firstLink" class = 'navel'> About me</a>
        <a href="#Code" class='navel'>Code Projects</a>
        <a href="#Art" class='navel'>"Art"</a>
      </nav>
      <ul class="linkList">
        <li class="linkEl" style="border-right: 1px solid var(--header-colour)"><a href='https://github.com/shubwub'><h1 class="linkEl">GitHub</h1></a></li>
        <li class="linkEl"><a href='https://www.linkedin.com/in/cameron-thornton-0097b9139/'><h1 class="linkEl">LinkedIn</h1></a></li>
      </ul>
      <div class="content">
        <h5 id="About" class="colHead">About Me</h5>
        <p>I graduated from Lancaster University in July 2019 with an Msci degree in Computer Science and am now employed as a support web developer by AHC.</p>
        <p>Over my four year sojourn at Lancaster University I worked on a wide array of different computer science aspects, from machine learning and natural
        language processing, to human computer interaction and network security.</p>
        <p>Whilst my passion lies in computing and development, I've always held a hobby of graphic design and illustration. My driving motivation to creating this
        website was as a means to be able to show both sides of my interests.</p>
        <p>On a personal note, I have a keen interest in Japanese culture and history. The vector image used in the parallax effect above was created by myself based on a picture
        taken on my trip to 山寺(Yamadera) in September 2018. I am currently learning Japanese as a semi-hobby and can currently read around 1000 kanji and am planning to pass my N4 JLPT
        by december 2019.</p>
        <h5 id="Code" class="colHead">Code Projects</h5>
        <div @click='open' class="displayBox" id="displayCode">
          <h1 class="displayText">Display code projects.</h1>
          <img src="./assets/img/arrow-white.svg" alt="" class="dropArrow" id="codeArrow">
        </div>
        <code-projects id="codeProjEl"/>
        <h5 id="Art" class="colHead">Art Projects</h5>
        <div @click='open' class="displayBox" id="displayArt">
          <h1 class="displayText">Display art projects.</h1>
          <img src="./assets/img/arrow-white.svg" alt="" class="dropArrow" id="artArrow">
        </div>
        <art-projects id="artProjEl"/>
      </div>
    </div>
    <img @click="backToTop" src="./assets/img/arrow.svg" alt="" id="arrow">
  </main>
</template>
<script>
import CodeProjects from './components/CodeProjects.vue'
import ArtProjects from './components/ArtProjects.vue'
import JQuery from 'jquery'

let $ = JQuery;

export default {
  name: 'app',
  components: {
    CodeProjects,
    ArtProjects,
  },
  data: function(){
    return {
      invis: false
    } 
  },
  methods: {
    initToTopButton: function() {
      $(document).bind('scroll', function() {
        if ($(document).scrollTop() > 500) {
          document.getElementById('arrow').style.opacity='1'
          document.getElementById('arrow').style.cursor='pointer'
        } else {
          document.getElementById('arrow').style.opacity='0'
          document.getElementById('arrow').style.cursor=''

        }
      }.bind(this));
    },
    backToTop: function() {
      $('html,body').stop().animate({
        scrollTop: 0
      });
    },
    open: function() {
      if(event.target.id === 'displayCode'){    
        if(document.getElementById('displayCode').classList.contains('extended')){
          document.getElementById('codeProjEl').style.display='none';
          document.getElementById('displayCode').classList.remove('extended');
          document.getElementById('codeArrow').style.transform='rotate(90deg)';
        } else{
          document.getElementById('codeProjEl').style.display='block';
          document.getElementById('displayCode').classList.add('extended');
          document.getElementById('codeArrow').style.transform='rotate(180deg)';
        }
      } else if(event.target.id === 'displayArt'){
        if(document.getElementById('displayArt').classList.contains('extended')){
          document.getElementById('artProjEl').style.display='none';
          document.getElementById('displayArt').classList.remove('extended');
          document.getElementById('artArrow').style.transform='rotate(90deg)';
        } else{
          document.getElementById('artProjEl').style.display='block';
          document.getElementById('displayArt').classList.add('extended');
          document.getElementById('artArrow').style.transform='rotate(180deg)';
        }
      }
    }
  },
  mounted(){
    document.getElementById('headerIMG').style.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    this.$nextTick(function() {
      this.initToTopButton();
    });
  }
}

</script>

<style lang="postcss">
  @import "assets/styles/main.css";
</style>

