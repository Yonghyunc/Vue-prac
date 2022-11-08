<template>
  <span>
    <input 
      type="text"
      v-model="keyword"
      @keyup.enter="searchKeyword"
    >
  </span>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyword: null,
    }
  },
  methods: {
    searchKeyword(event) {
      this.$emit('search-keyword', event.target.value)
      this.keyword = null
    }
  }
}
</script>

<style>

</style>