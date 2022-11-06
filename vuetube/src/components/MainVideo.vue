<template>
  <div class="video" v-if="mainVideo">
    <iframe
      :src="`https://www.youtube.com/embed/${mainVideo.id.videoId}`"
      frameborder="0"
      align="left"
      style="width: 300px; height: 200px"
    ></iframe>
    <div style="margin-left: 300px; padding: 10px">
      <h3>
        {{ mainVideo.snippet.title }}
      </h3>
      <hr />
      <p>
        {{ mainVideo.snippet.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainVideo",
  props: {
    mainVideo: Object,
  },
};
</script>

<style>
</style>