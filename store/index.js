export const state = () => ({
    rama: '',
    provincia: '',
    modalidad: '',
    horario: '',
    tarifa: '',
    personalInfo: {
        name: '',
        dni: '',
        movil: '',
        email: ''
    },
    comunidad: '',
    formaDePago: '',
});

export const mutations = {
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
  