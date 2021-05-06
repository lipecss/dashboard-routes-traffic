export default {
  clearErrors (context, payload) {
    context.commit('CLEAR_ERRORS', payload)
  },
  changeErrors (context, payload) {
    context.commit('CHANGE_ERRORS', payload)
  }
}
