<template>
  <main id="app" class="container">
    <div class="header">
      <div id="headerLeft" class="imgText">CAMERON</div>
      <div id="headerRight" class="imgText">THORNTON</div>
      <img class="titleImg" alt="Vue logo" src="./assets/img/ONI.jpg">
    </div>
    <ul class="nav">
      <li class="navli" id="firstLink" href="#About">About me</li>
      <li class="navli" href="#Code">Code Projects</li>
      <li class="navli" href="#Art">"Art"</li>
      <li class="navli" href="#GitHub">GitHub</li>
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
      <p>If you're interested in knowing more about the work I've done please feel free to download my resume below.</p>
      <h5 id="Code" class="colHead">Code Projects</h5>
      <CodeProjects/>
    </div>
  </main>
</template>
<script>
import CodeProjects from './components/CodeProjects.vue'

export default {
  name: 'app',
  components: {
    CodeProjects
  }
}
</script>

<style lang="postcss">
  @import "assets/styles/main.css";
</style>

