export default {
  clearLogin (context, payload) {
    context.commit('CLEAR_LOGIN', payload)
  },
  changeLogged (context, payload) {
    context.commit('CHANGE_LOGGED', payload)
  }
}
