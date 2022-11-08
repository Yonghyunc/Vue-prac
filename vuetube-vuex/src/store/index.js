import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    mainVideo: null,
  },
  getters: {
  },
  mutations: {
    SEARCH_KEYWORD(state, videos) {
      state.mainVideo = videos[0]
      state.videos = videos.slice(1)
    },
    SELECT_VIDEO(state, video) {
      const index = state.videos.indexOf(video)
      state.videos.splice(index, 1, state.mainVideo)
      state.mainVideo = video
    }
  },
  actions: {
  },
  modules: {
  }
})
