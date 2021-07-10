export const state = () => ({
  resourceCount: 0,
  resources: [],
  processCount: 0,
  processes: []
})

export const getters = {
  resourceCount: (state) => state.resourceCount,
  processCount: (state) => state.processCount,
  resources: (state) => state.resources,
  processes: (state) => state.processes,
}

export const mutations = {
  SET_RSRC_CNT(state, newValue) {
    state.resourceCount = newValue
  },
  SET_ALL_RSRC(state, newValue) {
    state.resources = []
    state.resources = newValue
  },
  SET_PRS_CNT(state, newValue) {
    state.processCount = newValue
  },
  SET_ALL_PRS(state, newValue) {
    state.processes = []
    state.processes = newValue
  },
  SET_RSRC_UNAVAILABLE(state, value) {
    state.resources[value.index].availability = false
    state.resources[value.index].allotedTo = value.i
  },
  SET_RSRC_AVAILABLE(state, { index }) {
    state.resources[index].availability = true
    state.resources[index].allotedTo = -99
  },
  SET_ALOCPRIORITIES(state) {
    for (let i = 0; i < state.processes.length; i++) {
      state.processes[i].allocatedPriorities = state.processes[i].allocated.map(
        (a) => state.resources[a].priority
      );
    }
  },
  SET_SPECIFIC_ALOCPRIORITIES(state, { i }) {
    state.processes[i].allocatedPriorities = []
    // if (state.processes[i].allocated.length > 0) {
    //   state.processes[i].allocatedPriorities = state.processes[i].allocated.map(
    //     (a) => state.resources[a].priority
    //   );
    // }
  },
  PERFORM_DEQUEUE(state, { index, rsIndex }) {
    state.processes[index].allocated.push(rsIndex);
    state.processes[index].alStrg.push(state.resources[rsIndex].name);

    state.processes[index].required = state.processes[index].required.filter(
      (rs) => !(rs == rsIndex)
    );
    state.processes[index].reqStrg = state.processes[index].reqStrg.filter(
      (rs) => !(rs == state.resources[rsIndex].name)
    );
  },
  PROCESS_COMPLETED(state, { index }) {
    state.processes[index].allocated = []
    state.processes[index].alStrg = []
    state.processes[index].completed = true
  },
  PROCESS_RESET(state, { index }) {
    state.processes[index].required = [...state.processes[index].required, ...state.processes[index].allocated]
    state.processes[index].reqStrg = [...state.processes[index].reqStrg, ...state.processes[index].alStrg]
    state.processes[index].allocated = []
    state.processes[index].alStrg = []
  },
}

export const actions = {
  setResourceCount({ commit }, { resourcesCount }) {
    commit('SET_RSRC_CNT', resourcesCount)
  },
  setAllResources({ commit }, { resources }) {
    commit('SET_ALL_RSRC', resources)
  },
  setProcessCount({ commit }, { processCount }) {
    commit('SET_PRS_CNT', processCount)
  },
  setAllProcesses({ commit }, { processes }) {
    commit('SET_ALL_PRS', processes)
  },
  setResourceAsUnavailable({ commit }, { index, i }) {
    commit('SET_RSRC_UNAVAILABLE', { index, i })
  },
  setAllocatedResourcePriorities({ commit },) {
    commit('SET_ALOCPRIORITIES')
  },
  deQueueOperation({ commit }, { rsIndex, index }) {
    commit('SET_RSRC_UNAVAILABLE', { index: rsIndex, i: index })
    commit('PERFORM_DEQUEUE', { index, rsIndex })
  },
  completeProcess({ commit, state }, { index }) {
    state.processes[index].allocated.forEach((rsIndex) => {
      commit('SET_RSRC_AVAILABLE', { index: rsIndex })
    });
    commit('PROCESS_COMPLETED', { index })
  },
  resetProcess({ commit, state }, { index }) {
    state.processes[index].allocated.forEach((rsIndex) => {
      commit('SET_RSRC_AVAILABLE', { index: rsIndex })
    });
    commit('SET_SPECIFIC_ALOCPRIORITIES', { i: index })
    commit('PROCESS_RESET', { index })
  },
}