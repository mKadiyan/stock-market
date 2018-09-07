<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="class-xs-12">
          <router-view/>
      </div>

    </div>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>
<style lang="scss" scopedÒ>
.container {
  margin-top: 20px;
}
</style>
