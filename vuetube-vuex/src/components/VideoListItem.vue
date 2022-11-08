<template>
  <div v-if="video" @click="selectVideo" class="single-video">
    <!-- <img :src="video.snippet.thumbnails.default.url" alt="thumbnails"> -->
    <img :src="video.snippet.thumbnails.medium.url" alt="thumbnails">
    <p class="title">{{ video.snippet.title }}</p>
    <p class="channel-title">{{ video.snippet.channelTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  methods: {
    selectVideo() {
      this.$store.commit('SELECT_VIDEO', this.video)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
}
</script>

<style>

</style>