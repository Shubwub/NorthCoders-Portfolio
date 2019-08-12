<template>
  <div>
    <ul id="artList">
      <li v-bind:key='art[x]' v-for="x in art" class="artProjectItem">
        <div class="leftSide">
            <div class="imgWrap">
            <img :src="x.imgsrc" :alt="x.Title" class="artImg">
           </div>
        </div>
        <div class="rightSide">
          <h1 class="artTitle">{{x.Title}}</h1>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArtProjects',
  data: function()  {
    return {
      art: [{
        Title: 'ONI',
        Description: 'This was really made as a way to try out clip studio paint. I drew clear heavy inspiration from my interest in japanese culture.',
        Date: '11/01/2019',
        imgsrc: require('../assets/img/ONI.jpg')
      },{
        Title: 'LUAC 2018',
        Description: 'This was the design I was commisioned to make after leaving the Lancaster university archery club. This design was printed and showcased throughout the university campus to promote the club to new members.',
        Date: '24/08/2018',
        imgsrc: require('../assets/img/7aa57071070723.5bb89cd9ae6a8.png')
      }],
    }
  }
}
</script>