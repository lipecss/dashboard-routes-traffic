export default {
  'CLEAR_STORE' (state, payload) {
    state.block_ui = ''
  },
  'SET_BLOCK_UI' (state, payload) {
    state.block_ui = payload
  }
}
