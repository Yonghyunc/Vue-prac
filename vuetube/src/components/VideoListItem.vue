<template>
  <div>
    <li style="text-align: left" @click="selectVideo">
      <img
        :src="video.snippet.thumbnails.default.url"
        alt="video-thumbnail"
        style="vertical-align: middle"
      />
      <span style="vertical-align: middle">{{ video.snippet.title }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  methods: {
    selectVideo: function () {
      this.$emit("select-video", this.video);
    },
  },
};
</script>

<style>
</style>