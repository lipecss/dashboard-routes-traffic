export default {
  'SET_LIST' (state, payload) {
    state.routeList = payload
  },
  'PUSH_TO_LIST' (state, payload) {
    state.routeList.push(payload)
  },
  'REMOVE_TO_LIST' (state, payload) {
    state.routeList.splice(payload, 1)
  },
  'UPDATE_TO_LIST' (state, payload) {
    const item = state.routeList.find(item => item._id === payload)
    if (item) state.routeList = item
  }
}
