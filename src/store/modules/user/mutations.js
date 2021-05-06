export default {
  'CLEAR_USER' (state, payload) {
    state.role = ''
  },
  'CHANGE_USER_ROLE' (state, payload) {
    state.role = payload
  }
}
