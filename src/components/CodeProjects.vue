<template>
  <div>
    <ul id="codeList">
      <li v-bind:key='projects[item]' v-for="item in projects" class="projectItem">
        <div class="leftBox">
            <h1 class="projTitle">{{item.Title}}</h1>
            <h5>{{item.Date}}</h5>
            <p>{{item.Description}}</p>
        </div>
        <div class="rightBox">
          <div class="ProjectGraphWrapper">
            <projectData :languages='item.Languages'></projectData>
           </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import projectData from './ProjectGraph.vue'
export default {
  name: 'CodeProjects',
  components:{
    projectData
  },
  data: function()  {
    return {
      projects: [{
        Title: 'This Website',
        Description: "The portfolio site you're on right now! This was developed during august prior to beginning my course at NorthCoders, however developed for the course. The site uses VueJS as it's the framework used in-house at AHC and I wanted the practise.",
        Date: '08/08/2019',
        Languages: {'Vue':67.3, 'CSS': 24.8, 'JavaScript': 4.5, 'HTML': 3.4},
      },{
        Title: 'LUDUM Dare 44 - Dadiator',
        Description: 'Another 72 hour challenge to develop a video game. This one was developed using the SFML C++ library with two fellow university students. I mainly handled creating the graphics and importing them as sprites and menus for the game. Ultimately thhe game ranked 489th of 2538 entries. More information can be found here: https://ldjam.com/events/ludum-dare/44/dadiator',
        Date: '27/04/2019',
        Languages: {'C++':100},
      },{
        Title: 'Personal Portfolio',
        Description: "My orginal portfolio, The site was made completely independantly, and uses: HTML/CSS/Javascript, PHP, Jquery, and MySQL for hosting all of its data. The site can be reached at: Cameronthornton.dev",
        Date: '09/04/2019',
        Languages: {'PHP': 60, 'CSS': 22.5, 'JavaScript': 11.5}
      },{
        Title: 'Augmented Machine Learning',
        Description: "This was my disseration I created at the end of my fourth year at university, completed by late May 2019. The project focussed on advancing the usability of recommendation engines by providing a greater degree of user control in what they're recommended. The project is being built using the Django python framework to allow for easy web intergration.",
        Date: '25/03/2019',
        Languages:{'Python': 53.3, 'HTML': 40, 'CSS': 6.7},
      },{
        Title: 'Booking Platform',
        Description: "Unfortunately, at the request of the company I was working for I can't say much. By the end of my 10 week deadline the platform allowed users to register, search for, pay for, and book a service. The company had only 3 member (including myself) and so I developed the entire platform independantly, recieving no technical advice. The platform was developed using HTML/CSS/Javascript, PHP, and MySQL. The client was especially pleased with the result as were university staff.",
        Date: '14/01/2019',
        Languages: {'PHP': 84.7, 'CSS': 9.9, 'JavaScript': 5.4},
      },{
        Title: 'LUDUM Dare 43 - The Cost of Defence',
        Description: "A friend and I developed a tower-defence style game under a strict 72-hour timespan. The game was made entirely using C++ and the SFML library",
        Date: '01/12/2018',
        Languages: {'C++': 100}
      },{
        Title: 'Mobile Augmented Reality App',
        Description: "This was a group project undertaken during the first term of my masters year. The mobile app was a way to digitally reconstruct ancient buildings using an overlay of a 3D model that the user could interact with in a number of ways. The focus of the application was to explore human interaction techniques in a learning environment. The application had a digital assistant that verbally instructed and conversed with users to give information.",
        Date: '09/10/2018',
        Languages: {'ShaderLab': 58.4, 'C#': 38.4, 'HLSL': 3.2}
      },{
        Title: 'LUDUM Dare 42 - NEK.O.',
        Description: "A top-down sumo-style arcade game, developed by two friends and I within a 72-hour timespan. The game went on to rank in the overall LUDUM Dare 42 rankings placing in the top 50% of over 2000 games. The game was developed in C++ using the SFML library",
        Date: '10/08/2018',
        Languages: {'C++': 100},
      },{
        Title: 'LUDUM Dare 40 - Metro Management',
        Description: "Me and two friends developed a small city-building game over a strict 72-hour timespan. The game was made using Java and the LibGDX library",
        Date: '02/11/2017',
        Languages:{'Java': 100}
      },{
        Title: 'Mobile Songket App',
        Description: "This was made as part of my third-year final project. This was an application designed to help Malaysian Songket weavers design their patterns much easier. The implementation took inspiration from pixel-art, due to the similarities songket shared with cross-stitch (which bares a similar appearance to pixel-art). The application was developed using Java and Android Studio over the span of around 20 weeks.",
        Date: '09/10/2017',
        Languages:{'Java': 100}
      }],
    }
  }
}
</script>