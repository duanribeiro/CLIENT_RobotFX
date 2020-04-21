<template>
  <div>
    <h1>Example Page</h1>
    <h5>Data from GET:</h5>
    <div class="results">
      <pre>{{ info }}</pre>
    </div>
    <div>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://u6mfa7y5gj.execute-api.us-east-1.amazonaws.com/dev/api/v1/')
      .then(response => (this.info = response))
  }
}
</script>

<style>
  .results {
    width: 300px;
    margin: 0 auto;
    text-align: left;
    background: #eee;
    padding: 10px;
  }
</style>