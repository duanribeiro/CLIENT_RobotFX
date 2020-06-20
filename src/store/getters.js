// https://vuex.vuejs.org/en/getters.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5

// authorized lets you know if the token is true or not
export default {
  authorized: state => !!state.token,
  authstatus: state => state.authStatus
}
