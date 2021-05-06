export default {
  clearStore (context, payload) {
    context.commit('CLEAR_STORE', payload)
  },
  setBlockUi (context, payload) {
    context.commit('SET_BLOCK_UI', payload)
  }
}
