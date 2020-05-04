<template>
  <v-footer
    id="core-footer"
    app
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
     
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright">
      Desenvolvido por
      <a
        href="http://www.octaplus.com.br/"
        target="_blank">Octaplus</a>   
    </span>
    &nbsp;&nbsp;&nbsp;
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/' },
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
