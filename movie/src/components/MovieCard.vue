<template>
  <div class="movie-card" @click="goToDetail">
    <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`" alt="poster">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: "movie_detail", params: { id:this.movie.id } })
    }
  }
}
</script>

<style>

</style>