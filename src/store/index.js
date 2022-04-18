import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import message from './modules/message'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        message,
        notification
    },
    strict: true
})