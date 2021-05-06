export default {
  clearUser (context, payload) {
    context.commit('CLEAR_USER', payload)
  },
  changeUserRole (context, payload) {
    context.commit('CHANGE_USER_ROLE', payload)
  }
}
