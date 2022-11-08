<template>
  <div id="app">
    <div id="top-bar">
      <img id="logo" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="logo">
      <h3 id="logo">VueTube</h3>
      <SearchBar @search-keyword="searchKeyword"/>
    </div>
    <!-- <ul>
      <button>고양이</button>
      <button>강아지</button>
      <button>싸피</button>
      <button>파이썬</button>
      <button>알고리즘</button>
    </ul> -->
    <div>
      <MainVideo />
      <hr>
      <VideoList style="text-align:center"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from '@/components/SearchBar.vue'
import MainVideo from '@/components/MainVideo.vue'
import VideoList from '@/components/VideoList.vue'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default {
  name: 'App',
  components: {
    SearchBar,
    MainVideo,
    VideoList,
  },
  methods: {
    searchKeyword: function (text) {
      axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          key: API_KEY,
          part: "snippet",
          type: "video",
          q: text,
          maxResults : 25,
        },
      })
        .then((response) => {
          this.$store.commit('SEARCH_KEYWORD', response.data.items)
        })
    },
  },
  beforeCreate() {
    axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          key: API_KEY,
          part: "snippet",
          type: "video",
          q: "고양이",
          maxResults : 25,
        },
      })
        .then((response) => {
          this.$store.commit('SEARCH_KEYWORD', response.data.items)
        })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
}

#logo {
  width: auto;
  height: 25px;
  display: inline-block;
  vertical-align: bottom;
  margin: 0;
  padding-right: 5px;
  letter-spacing: -2px;
}

#top-bar {
  margin-bottom: 30px;
}

input[type=text] {
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 3px;
  margin-left: 250px;
  width: 250px;
  height: 15px;
  font-size: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  padding-left: 10px;
}

.main-video {
  text-align: center;
  align-items: center;
  padding: 10px;
}

.main-video-text {
  width: 640px;
  text-align: left !important;
  margin:0 auto
}

.single-video {
  vertical-align: top;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  width: 240px;
  height: 230px;
  cursor: pointer;
}

.main-title {
  font-size: large;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
}

.description {
  font-size: small;
  margin-left: 5px;
}

.title { 
  font-size: small ;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0px;
  margin-left: 5px;
  text-align: left !important;
}

.channel-title {
  font-size: xx-small;
  margin-top: 5px;
  margin-left: 5px;
  text-align: left !important;
}

img {
  border-radius: 7px;
  width: 240px;
  height: 135px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 20%;
  height: 100%;
  position: fixed;
  overflow: auto;
}

button {
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  width: 50px;
  border: none;
  cursor: pointer;
}
</style>
