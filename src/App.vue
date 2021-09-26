<template>
  <div id="app">
    <div>
      <md-tabs>
      <md-tab @click="onTabClick('Rio de Janeiro')" id="tab-Rio" md-label="Rio De Janeiro"></md-tab>
      <md-tab @click="onTabClick('Beijing')" id="tab-Bejing" md-label="Bejing"></md-tab>
      <md-tab @click="onTabClick('Los Angeles')" id="tab-Los" md-label="Los Angeles"></md-tab>
    </md-tabs>
<ul>
    <li v-for="(item, index) in info" :key="index">
      <div>
      <div>
        <li class="small"><strong>{{ item.main.temp }}°C</strong></li>
        <li class="small"><strong>{{ item.main.humidity }}%</strong></li>
        <li class="mb-0"><strong>{{ item.dt_txt }}</strong></li>
      </div>
      </div>
    </li>
</ul>
  </div>
  </div>
</template>

<script>

import axios from 'axios';
let cityName= 'Rio de Janeiro';
export default {
  name: 'App',
  components: {
  },
  methods: {
    onTabClick(city){
      axios
     .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d5d858268d73c414338280b0a5415f1&cnt=4`)
     .then(response => (this.info = response && response.data && response.data.list ? response.data.list : []))
  }
  },
  data() {
    return {
      info: null
    }
  },
  mounted () {
    axios
     .get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3d5d858268d73c414338280b0a5415f1&cnt=4`)
     .then(response => (this.info = response && response.data && response.data.list ? response.data.list : []))
  }
}

</script>


<style>
.viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }
</style>
