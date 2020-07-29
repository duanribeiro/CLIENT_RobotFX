<template>
  <v-toolbar
  id="core-toolbar"
  app
  style="background: #424242;"
  prominent
  >
    <v-tabs
      fixed-tabs
      background-color="indigo"
      dark
    >
      <v-tab>
        {{ this.title }}
      </v-tab>
      <v-tab>
        EXEMPLO
      </v-tab>
      <v-tab>
        EXEMPLO
      </v-tab>
      <v-tab>
        EXEMPLO
      </v-tab>
      <v-btn @click="sendMessage()">enviar</v-btn>
    </v-tabs>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    title: 'RobotFX',
    responsive: false,
    responsiveInput: false
  }),
  methods: {
    sendMessage() {
      this.message = "sended"
    }
  },
  created: {
     axios
  }
}
</script>

<style>
	#core-toolbar a {
		text-decoration: none;
	}
</style>
