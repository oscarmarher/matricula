const state = () => ({
  rama: null,
  provincia: null,
  modalidad: null,
  horario: null,
  tarifa: null,
  personalInfo: {
    name: null,
    dni: null,
    movil: null,
    email: null
  },
  comunidad: null,
  formaDePago: null,
  step: null,
});

const mutations = {
  saveStep(state, datos) {
    state.step = datos;
  },
  saveRama(state, datos) {
    state.rama = datos;
  },
  saveProvincia(state, datos) {
    state.provincia = datos;
  },
  saveModalidad(state, datos) {
    state.modalidad = datos;
  },
  saveHorario(state, datos) {
    state.horario = datos;
  },
  saveTarifa(state, datos) {
    state.tarifa = datos;
  },
  savePersonalInfoName(state, datos) {
    state.personalInfo.name = datos;
  },
  savePersonalInfoDni(state, datos) {
    state.personalInfo.dni = datos;
  },
  savePersonalInfoMovil(state, datos) {
    state.personalInfo.movil = datos;
  },
  savePersonalInfoEmail(state, datos) {
    state.personalInfo.email = datos;
  },
  saveComunidad(state, datos) {
    state.comunidad = datos;
  },
  savePago(state, datos) {
    state.formaDePago = datos;
  }
};

const actions = {
  saveStep({commit}, value) {
    commit('saveStep', value);
  },
  saveRama({commit}, value) {
    commit('saveRama', value);
  },
  saveProvincia({commit}, value) {
    commit('saveProvincia', value);
  },
  saveModalidad({commit}, value) {
    commit('saveModalidad', value);
  },
  saveHorario({commit}, value) {
    commit('saveHorario', value);
  },
  saveTarifa({commit}, value) {
    commit('saveTarifa', value);
  },
  savePersonalInfoName({commit}, value) {
    commit('savePersonalInfoName', value);
  },
  savePersonalInfoDni({commit}, value) {
    commit('savePersonalInfoDni', value);
  },
  savePersonalInfoMovil({commit}, value) {
    commit('savePersonalInfoMovil', value);
  },
  savePersonalInfoEmail({commit}, value) {
    commit('savePersonalInfoEmail', value);
  },
  saveComunidad({commit}, value) {
    commit('saveComunidad', value);
  },
  savePago({commit}, value) {
    commit('savePago', value);
  },
}

const getters = {
  getStep(state) {
    return state.step;
  },
  getPersonalInfo(state) {
    return state.personalInfo;
  },
  getRama(state) {
    return state.rama;
  },
  getProvincia(state) {
    return state.provincia;
  },
  getModalidad(state) {
    return state.modalidad;
  },
  getHorario(state) {
    return state.horario;
  },
  getTarifa(state) {
    return state.tarifa;
  },
  getComunidad(state) {
    return state.comunidad;
  },
  getPago(state) {
    return state.formaDePago;
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}