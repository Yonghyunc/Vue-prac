<template>
  <div class="wish-movie" @click="deleteLine" :class="{active: isActive}">
    <p>{{ movie }}</p>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  props: {
    movie: String,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    deleteLine() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>

</style>