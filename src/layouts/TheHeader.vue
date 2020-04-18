<template>
  <CHeader fixed with-subheader light>
    <CToggler
    in-header
    class="ml-3 d-lg-none"
    @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
    in-header
    class="ml-3 d-md-down-none"
    @click="$store.commit('toggleSidebarDesktop')"
    />
  </CHeader>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
