<template>
<div>
<div class="leftBox">
    <h1 class="projTitle">{{item.Title}}</h1>
    <h5>{{item.Date}}</h5>
    <p>{{item.Description}}</p>
  </div>
  <div class="rightBox">
    <div class="ProjectGraphWrapper">
      <chart :chart-data="datacollection"></chart>
    </div>
  </div>
  </div> 
</template>

<script>
import Chart from './DoughnutChart'
export default {
  data: function()  {
    return {
      projects: [{
        Title: 'LUDUM Dare 44',
        Description: 'Another 72 hour challenge to develop a video game. This one was developed using the SFML C++ library with two fellow university students. I mainly handled creating the graphics and importing them as sprites and menus for the game. Ultimately thhe game ranked 489th of 2538 entries. More information can be found here: https://ldjam.com/events/ludum-dare/44/dadiator',
        Date: '27/04/2019',
        Languages: {'C++':70, 'something': 30},
      },{
        Title: 'Augmented Machine Learning',
        Description: "This was my disseration I created at the end of my fourth year at university, completed by late May 2019. The project focussed on advancing the usability of recommendation engines by providing a greater degree of user control in what they're recommended. The project is being built using the Django python framework to allow for easy web intergration.",
        Date: '25/03/2019',
        Languages:{'Python': 53.3, 'HTML': 40, 'CSS': 6.7},
      }],
      datacollection: null
    }
  },
  components:{
    Chart
  }
}
</script>
