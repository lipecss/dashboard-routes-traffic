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
  'CLEAR_ROUTE_LIST' (state) {
    state.routeList = []
  }
}
