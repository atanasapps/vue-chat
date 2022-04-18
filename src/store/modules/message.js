const state = () => ({
    messages: []
})

const mutations = {
    ADD_MESSAGE(state, message) {
        state.messages.push(message)
    }
}

const actions = {
    addMessage({ commit }, message) {
        commit("ADD_MESSAGE", message)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}