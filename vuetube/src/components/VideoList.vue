<template>
  <div class="video">
    <VideoListItem
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
      @select-video="selectVideo"
    />
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    selectVideo: function (video) {
      this.$emit("select-video", video);
    },
  },
};
</script>

<style>
</style>