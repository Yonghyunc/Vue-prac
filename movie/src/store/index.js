import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: null,
    wishList: [],
  },
  getters: {
  },
  mutations: {
    GET_MOVIES(state, data) {
      state.movies = data
    },
    ADD_WISH_MOVIE(state, movie) {
      state.wishList.push(movie)
    }
  },
  actions: {
  },
  modules: {
  }
})
