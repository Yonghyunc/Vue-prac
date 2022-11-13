<template>
  <div class="row">
    <div class="img-div">
      <img class="back-poster" :src="`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`" alt="poster">
      <img class="poster" :src="`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`" alt="poster">
    </div>
    <div class="detail-card">
      <div class="video">
        <div>
          <iframe 
          :src="`https://www.youtube.com/embed/${trailer?.id.videoId}`" 
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          ></iframe>
        </div>
      </div>
      <h2>{{ movie?.title }}</h2>
      <p>{{ movie?.overview }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default {
  name: 'DetailView',
  data() {
    return {
      movie: null,
      trailer: null,
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  methods: {
    getMovieId(id) {
      for (const movie of this.movies) {
        if(movie.id === Number(id)) {
          this.movie = movie
          break
        }
      }
    },
    getTrailer(title) {
      console.log(title)
      axios({
        method: 'get',
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          key: API_KEY,
          part: "snippet",
          type: "video",
          q: `${title} 예고편`,
          maxResults: 1,
        },
      })
        .then((response) => {
          console.log(response.data.items[0])
          this.trailer = response.data.items[0]
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getMovieId(this.$route.params.id)
    this.getTrailer(this.movie.title)
  }
}
</script>

<style>
</style>