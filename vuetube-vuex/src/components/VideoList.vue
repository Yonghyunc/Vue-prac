<template>
  <div>
    <VideoListItem 
      v-for="(video, index) in videos" 
      :key="index" 
      :video="video"
    />
    <hr>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  computed: {
    videos() {
      return this.$store.state.videos
    }
  },
}
</script>

<style>

</style>