export default {
  'CLEAR_ERRORS' (state, payload) {
    state.errors = []
  },
  'CHANGE_ERRORS' (state, payload) {
    state.errors = payload
  }
}
