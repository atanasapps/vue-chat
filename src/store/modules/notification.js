const state = () => ({
    notifications: []
})

const mutations = {
    ADD_NOTIFICATION(state, message) {
        state.notifications.push(message)
    },
    SET_NOTIFICATIONS(state, items) {
        state.notifications = items
    }
}

const actions = {
    addNotification({ commit }, message) {
        commit("ADD_NOTIFICATION", message)
    },
    setNotifications({ commit }, items) {
        commit("SET_NOTIFICATIONS", items)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}