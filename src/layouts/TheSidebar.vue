<template>
  <CSidebar 
  fixed 
  :minimize="minimize"
  :show="show"
  @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  class="teste"
  >
    <CSidebarBrand to="/">
      RobotFX
    </CSidebarBrand>
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>

<style lang="scss">
  @import './src/theme/variables';
  
  .teste {
    background-color: $primary;
  }
</style>
