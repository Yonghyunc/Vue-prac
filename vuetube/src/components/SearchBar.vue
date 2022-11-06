<template>
  <span>
    <input type="search" @keyup.enter="searchKeyword" />
  </span>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    searchKeyword: function (event) {
      this.$emit("search-keyword", event.target.value);
    },
  },
};
</script>

<style>
</style>