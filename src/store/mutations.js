// https://vuex.vuejs.org/en/mutations.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5

export default {
  auth_request (state) {
    state.authStatus = 'loading'
  },
  auth_success (state, { token, user }) {
    state.authStatus = 'success'
    state.token = token
    state.user = user
  },
  auth_error (state) {
    state.authStatus = 'error'
  },
  logout (state) {
    state.authStatus = ''
    state.token = ''
  },
  setTableList (state, tableList) {
    state.tableList = tableList
  }
}
