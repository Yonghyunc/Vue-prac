<template>
  <div>
    <h1>Popular Movie</h1>
    <MovieCard 
      v-for="movie in movies" 
      :key="movie.id" 
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}
</script>

<style>

</style>