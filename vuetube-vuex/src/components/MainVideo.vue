<template>
  <div v-if="mainVideo" class="main-video">
    <iframe 
      :src="`https://www.youtube.com/embed/${mainVideo.id.videoId}`" 
      frameborder="0"
      style="width: 640px; height: 360px;"
    ></iframe>
    <div class="main-video-text">
      <p class="main-title">{{ mainVideo.snippet.title }}</p>
      <p class="description">{{ mainVideo.snippet.description }}</p>
      <p class="channel-title">{{ mainVideo.snippet.channelTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVideo',
  computed: {
    mainVideo() {
      return this.$store.state.mainVideo
    },
  }
}
</script>

<style>

</style>