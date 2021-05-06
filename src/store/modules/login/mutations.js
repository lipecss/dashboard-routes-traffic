
export default {
  'CLEAR_LOGIN' (state, payload) {
    state.logged = false
  },
  'CHANGE_LOGGED' (state, payload) {
    state.logged = payload
  }
}
