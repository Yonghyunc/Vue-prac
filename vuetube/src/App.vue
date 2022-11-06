<template>
  <div id="app">
    <div>
      <img src="@/assets/ssafy-logo.png" alt="ssafy-logo" style="width: 40px" />
      <span id="name">SSAFY TUBE</span>
    </div>
    <SearchBar @search-keyword="searchKeyword" />
    <MainVideo :mainVideo="mainVideo" />
    <VideoList :videos="videos.slice(1)" @select-video="selectVideo" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import MainVideo from "@/components/MainVideo";
import VideoList from "@/components/VideoList";

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default {
  name: "App",
  components: {
    SearchBar,
    MainVideo,
    VideoList,
  },
  data: function () {
    return {
      search: null,
      videos: [],
      mainVideo: null,
    };
  },
  methods: {
    searchKeyword: function (text) {
      this.search = text;

      axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          key: API_KEY,
          part: "snippet",
          type: "video",
          q: this.search,
        },
      })
        .then((response) => {
          this.videos = response.data.items;
          this.mainVideo = this.videos[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectVideo: function (video) {
      this.mainVideo = video;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 50px;
  margin-right: 50px;
}

#name {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  vertical-align: center;
}

li {
  list-style: none;
  width: 90%;
  margin-left: 20px;
  margin-top: 20px;
}

.video {
  text-align: left;
  margin-bottom: 70px;
}

input {
  margin-top: 20px;
  margin-bottom: 40px;
  display: "inline-block";
}
</style>
