<template>
  <div id="app">
    <nav>
      <router-link to="/"><font-awesome-icon class="logo-icon" icon="fa-solid fa-video" /></router-link>
      <router-link to="/movies">Home</router-link> |
      <router-link to="/random">Random</router-link> |
      <router-link to="/watch-list">WatchList</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_MOVIE_API_KEY
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'


export default {
  methods: {
    getMovies() {
      axios({
        method: 'get',
        url : API_URL,
        params: {
          api_key: API_KEY,
          region: 'KR',
          language: 'ko',
        }
      })
        .then((response) => {
          this.$store.commit('GET_MOVIES', response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

/* @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@200;300&family=Old+Standard+TT:wght@400;700&display=swap');


#app {
  font-family: 'DM Serif Display', serif;
  /* font-family: 'Hahmlet', serif; */
  /* font-family: 'Old Standard TT', serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e3e0d8;
  color: #2C2b28;
  height: 100%;
  /* border: 2px solid #E7EAEF; */
}

nav {
  padding: 30px;
  margin: 0;
  background-color: #b4aa9e;
}

nav a {
  font-weight: bold;
  color: #5f5146;
  margin-left: 5px;
  margin-right: 5px;
}

nav a.router-link-exact-active {
  color: #2C2b28;
}


.logo-icon {
  margin-right: 20px;
}

.home {
  width: 100%;
  height: 90vh;
}

.home>img {
  margin-top: 5%;
  width: 60%;
}

.home>h1 {
  font-size: 10rem;
  font-weight: 500;
  margin: 0;
}

.movie-card {
  display: inline-block;
  vertical-align: top;
  /* border: 1px solid #b4aa9e; */
  width: 220px;
  height: 530px;
  padding: 20px;
  margin: 5px;
  border-radius: 15px;
}

.movie-card>h2 {
  font-weight: 700;
  font-family: 'Hahmlet';
}

.movie-card>p {
  font-family: 'Hahmlet';
  font-size: small;
  overflow: hidden; 
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; 
  text-align: left;
}

.random-view {
  height: 100vh;
}

.random>img {
  width: 50%
}

.watchlist-view {
  height: 100vh;
}

.wish-movie {
  display: inline-block;
  background-color: #f0f1f3;
  font-size: medium;
  margin: 1px;
  padding: 1px;
  width: 50%;
  border-radius: 5px;
}

.wish-movie.active {
  background-color: rgb(207, 211, 214);
  text-decoration-line: line-through;
  color: gray
}

.wish-movie>p {
  font-family: 'Hahmlet';
  cursor:pointer;
}

.container {
  position: relative;
  justify-content: center;
  align-items: center;
  display: inline-block;
  white-space: nowrap;
  width: 500px;
}

input[type='text'] {
  width: 80%;
  height: 30px;
  border-radius: 20px;
  padding-left: 30px;
  margin-bottom: 30px;
  overflow: auto;
}

.plus-icon {
  position: absolute;
  cursor: pointer;
  right: 55px;
  top: 10px;
}

.btn-pick {
  background-color:#0a0a23;
  color: #fff;
  border:none; 
  border-radius:10px; 
  padding:5px;
  height:30px; 
  width: 90px;
  cursor: pointer;
  margin-bottom: 50px;
}

.btn-w {
  width: 130px;
}

.pick-box {
  font-family: 'Hahmlet';
  display: inline-block;
  width: 49%;
  vertical-align: top;
}

/* .row {
  border: 1px solid #b6ccfd;
} */
@media screen and (min-width: 800px){
  .img-div {
    width: 50%;
  }
  .detail-card{
    width: 40%
  }
}
@media screen and (max-width: 800px){
  .img-div {
    width: 100%;
  }
  .detail-card{
    width: 90%
  }
}

.img-div {
  /* flex: 1; */
  display: inline-block;
  position: relative;
  /* width: 100%; */
}


.back-poster {
  position: relative;
  width: 100%;
  opacity: 60%;
}

.poster {
  position: absolute;
  left:10%;
  top: 10%;
  width: 80%;
}

.detail-card {
  /* flex: 1; */
  display: inline-block;
  font-family: 'Hahmlet';
  position: relative;
  /* width: 100%; */
  padding: 5%;
  vertical-align: top;
}

.detail-card>h2 {
  text-shadow: 0px 8px 33px #2c3e50;
}

.detail-card>p {
  text-shadow: 0px 8px 33px #2c3e50;
}

.video {
  width: 100%;
  max-width: 900px;
  margin: 30px auto;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 8px 33px #999;
}

.video>div {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 50%;
}

iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>
