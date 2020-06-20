// https://vuex.vuejs.org/en/state.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5


export default {
  authStatus: '',
  token: localStorage.getItem('token') || '',
  user: {},
  tableList: []
}
