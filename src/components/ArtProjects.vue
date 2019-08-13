<template>
  <div>
    <ul id="artList0" class="artList">
      <li v-bind:key='left[x]' :id="x.Title" v-for="x in left" v-on:click="resize(x.Title)" class="artProjectItem">
        <div class="imgWrap">
          <img :src="x.imgsrc" :id="x.idx" :alt="x.Title" class="artImg">
        </div>
        <div class="Info" :id="x.Title + 'Info'">
          <h1 class="projTitle">{{x.Title}}</h1>
          <h5>{{x.Date}}</h5>
          <p>{{x.Description}}</p>
        </div>
      </li>
    </ul>
    <ul id="artList1" class="artList">
      <li v-bind:key='right[y]' :id="y.Title" v-for="y in right" v-on:click="resize(y.Title)" class="artProjectItem">
        <div class="imgWrap">
          <img :src="y.imgsrc" :id="y.idx" :alt="y.Title" class="artImg">
        </div>
        <div class="Info" :id="y.Title + 'Info'">
          <h1 class="projTitle">{{y.Title}}</h1>
          <h5>{{y.Date}}</h5>
          <p>{{y.Description}}</p>
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
      left: [{
        Title: 'ONI',
        Description: 'This was really made as a way to try out clip studio paint. I drew clear heavy inspiration from my interest in japanese culture.',
        Date: '11/01/2019',
        imgsrc: require('../assets/img/ONI.jpg'),
      },{
        Title: 'Memento Photography',
        Description: 'A logo I was commisioned to design for a small photography startup at my university',
        Date: '12/05/2018',
        imgsrc: require('../assets/img/Memento-01.png'),
        idx: 'Mem'
      },{
        Title: 'Tear Design',
        Description: 'This was really just me exploring blending vector art and real-life pictures. This was also designed by Masayoshi Suto and Tomohiro Kumagai for their works on Persona 5.',
        Date: '19/07/2018',
        imgsrc: require('../assets/img/99c86669308187.5b7c7788073d0.png')
      },{
        Title: 'Crystal Horde',
        Description: 'This vector piece was made during my third year of university and was inspired by the "Horde" logo from the popualr MMORPG "World of Warcraft". My original plan was to make a low-poly look, but then as I worked on the project more, this fractured appearance began to manifest',
        Date: '23/11/2017',
        imgsrc: require('../assets/img/4cc8c769308387.5b7c78f02f1a3.png'),
        idx: 'Horde'
      },{
        Title: 'Sore Thumb Retro',
        Description: "This is a logo I designed for a local retro gaming store where I live. The design uses a Power Glove to associate the design with the store's purpose. The design wasn't commisioned, simply for fun",
        Date: '25/05/2017',
        imgsrc: require('../assets/img/cfb46769307591.5b7c72b0e16b9.png')
      },{
        Title: 'What We Were',
        Description: 'This is some album art comissioned by a local musician at Lancaster University for his then upcoming album "What We Were".',
        Date: '15/03/2017',
        imgsrc: require('../assets/img/ea4cc069307691.5b7c738ea9211.png')
      },{
        Title: 'The Otaku.',
        Description: "This is some album art comissioned by a local musician at Lancaster University for his then upcoming sigle 'The Otaku'",
        Date: '12/01/2017',
        imgsrc: require('../assets/img/TheOtaku2.png')
      }],

      right:[{
        Title: 'LUAC 2018',
        Description: 'This was the design I was commisioned to make after leaving the Lancaster university archery club. This design was printed and showcased throughout the university campus to promote the club to new members.',
        Date: '24/08/2018',
        imgsrc: require('../assets/img/7aa57071070723.5bb89cd9ae6a8.png'),
      },{
        Title: 'NEK.O.',
        Description: 'Handled the creation and implementation of the visual assets for the LUDUM Dare 42 - NEK.O.',
        Date: '12/08/2018',
        imgsrc: require('../assets/img/189c3.png'),
      },{
        Title: 'Metro Management',
        Description: 'Created and implemented the visual assets for LUDUM Dare 40 - Metro Managment',
        Date: '03/12/2017',
        imgsrc: require('../assets/img/d255.png.480x384.fit.jpg')
      },{
        Title: 'LUAC 2017',
        Description: 'This was a collection of 3 poster designs (similar to the one shown) that were printed and posted around the campus to promote the club in the new student year. This wave broke the previous years (where I also made the poster) record of new entrants to the society.',
        Date: '19/07/2017',
        imgsrc: require('../assets/img/40e2d669308127.5b7c7702687d9.png')
      },{
        Title: 'Sore Thumb Gold',
        Description: 'This is an slternative design I made for the Sore Thumb retro games shop, referencing the stars found in Super Mario Bros.',
        Date: '25/05/2017',
        imgsrc: require('../assets/img/d3330869307591.5b7c72b0e1e06.png')
      },{
        Title: 'Dude.',
        Description: "This is some album art comissioned by a local musician at Lancaster University for his then upcoming sigle 'Dude.'",
        Date: '05/02/2017',
        imgsrc: require('../assets/img/project 03Test.png')
      },{
        Title: 'LUAC 2016',
        Description: "This was the first set of posters I designed for the Lancaster University Archery Club at the end of my first year at university. These posters were printed and distributed throughout campus and led to the highest number of new entrants the club had seen. These posters took heavy design inspiration from the works of Masayoshi Suto and Tomohiro Kumagai and their work on Persona 5.",
        Date: '21/07/2016',
        imgsrc: require('../assets/img/dde88a69307053.5b7c6e54273b5.png')
      }]
    }
  },
  methods: {
    resize: function(title){
      let el = document.getElementById(title)
      if(screen.width < 1921){
        if(el.classList.contains('Extended')){
          el.style.height="";
          el.classList.remove("Extended");
          document.getElementById(title + 'Info').style.display="none";
        } else {
          document.getElementById(title + 'Info').style.display="block";
          let currHeight = (parseInt(getComputedStyle(el).height));
          el.style.height=String(currHeight + 50) + "px";
          el.classList.add("Extended");
        }
      }
    }
  }
}
</script>