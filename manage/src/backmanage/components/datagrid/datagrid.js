const state = {
    dataset: []
}

const mutations = {
    init(state){
        //ajax
        state.dataset = [];
    }
}

const actions = {
    init(content){
        content.commit('init');
    }
}

export default {
    state,
    mutations,
    actions
}