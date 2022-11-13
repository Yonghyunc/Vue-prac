<template>
  <div class="random-view">
    <h1>Random</h1>
    <div class="pick-box">
      <button class="btn-pick" @click="randomMoviePick">Pick</button>
      <div class="random" v-if="randomMovie">
        <h1>Random Pick</h1>
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${randomMovie.poster_path}`" alt="poster">
        <h3>{{ randomMovie?.title }}</h3>
      </div>
    </div>
    <span>|</span>
    <div class="pick-box">
      <button class="btn-pick btn-w" @click="weatherPick">Weather Pick</button>
      <div class="random" v-if="weatherMovie && weather">
        <h1>Today is {{ weather[0].description }}</h1>
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${weatherMovie.poster_path}`" alt="poster">
        <h3>{{ weatherMovie.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_WEATHER_API_KEY

export default {
  name: 'RandomView',
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  data() {
    return {
      randomMovie: null,
      weatherMovie: null,
      weather: null,
    }
  },
  methods: {
    randomMoviePick() {
      this.randomMovie = _.sample(this.movies, 1)
    },
    weatherPick() {
      axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          q: 'Seoul,kor',
          APPID: API_KEY,
        }
      })
        .then((response) => {
          console.log(response.data.weather[0])
          this.weather = response.data.weather
        })
      this.weatherMovie = _.sample(this.movies, 1)
    },
  }
}
</script>

<style>

</style>