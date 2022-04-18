const state = () => ({
    name: "",
    isOnline: true
})

const mutations = {
    SET_USER(state, name) {
        state.name = name
    },
    SET_IS_ONLINE(state, value) {
        state.isOnline = value
    }
}

const actions = {
    setUser({ commit }, name) {
        commit("SET_USER", name)
    },
    setIsOnline({ commit }, value) {
        commit("SET_IS_ONLINE", value)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}