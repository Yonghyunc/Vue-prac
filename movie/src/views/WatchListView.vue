<template>
  <div class="watchlist-view">
    <h1>WatchList</h1>
    <div class="container" >
      <form @submit.prevent="inputWishMovie">
        <input type="text" v-model.trim="wishMovie">
        <font-awesome-icon class="plus-icon" icon="fa-solid fa-plus" @click="inputWishMovie"/>
      </form>
    </div>
    <br>
    <WatchListForm  v-for="movie in wishList" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
  },
  computed: {
    wishList() {
      return this.$store.state.wishList
    }
  },
  data() {
    return {
      wishMovie: null,
    }
  },
  methods: {
    inputWishMovie() {
      if (!this.wishMovie) {
        alert('영화명을 입력하세요')
      } else{
        this.$store.commit('ADD_WISH_MOVIE', this.wishMovie)
        this.wishMovie = null
      }
    },
  }
}
</script>

<style>

</style>