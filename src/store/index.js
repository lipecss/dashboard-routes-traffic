import Vue from 'vue'
import Vuex from 'vuex'

// Plugins
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Modules
import ModuleErrors from './modules/errors'
import ModuleLogin from './modules/login'
import ModuleUser from './modules/user'
import ModuleRoutes from './modules/routes'

// Components

Vue.use(Vuex)

const modules = {
  ModuleErrors,
  ModuleLogin,
  ModuleUser,
  ModuleRoutes
}

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state,
  actions,
  mutations,
  getters,
  modules
})
