<template>
  <div class="step6">
    <div v-if="screen.width > 1030" class="navbar">
      <Steps />
    </div>
    <div class="step6__content">
      <h1 class="step6__content__title">Forma de pago</h1>
      <div class="step6__content__box1">
        <h3 class="step6__content__title-secondary">¿Cómo prefieres abonar tu primer pago?</h3>
        <div class="step6__content__buttons">
          <div v-on:click="() => onChangePago('Tarjeta de crédito/débito') & changePay(1)" value="Tarjeta de crédito/débito" class="step6__content__button">
            <Button :type="(pay == 1) ? 4 : 2" :text="'Tarjeta de crédito/débito (recomendado)'" />
          </div>
          <div v-on:click="onChangePago('Transferencia bancaria') & changePay(2)" value="Transferencia Bancaria" class="step6__content__button">
            <Button :type="(pay == 2) ? 4 : 2" :text="'Transferencia bancaria'" />
          </div>
        </div>
        <p class="step6__content__description">Detalle sobre forma de pago y proceso post pago</p>
      </div>

      <div class="step6__content__box1 box2">
        <h3 class="step6__content__title-secondary">¿Vienes recomendado por alguien?</h3>
        <div class="step6__content__buttons">
          <div class="step6__content__button">
            <Button :type="2" :text="'Si'" />
          </div>
          <div class="step6__content__button">
            <Button :type="2" :text="'No'" />
          </div>
        </div>
        <p class="step6__content__description">Ver información legal</p>
      </div>

      <div class="step-buttons">
        <div @click="saveMatricula" class="step-buttons__button">
          <Button :text="'Siguiente'" />
        </div>
        <div @click="$router.push('/step5')" class="step-buttons__button">
          <Button :type="3" :text="'Atrás'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from '../components/Steps';
import {db} from '~/plugins/firebase.js';
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: 'Paso 6'
    }
  },
  components: {
    Steps
  },
  data() {
    return {
      screen: window.screen,
      pay: null,
      matricula: {
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
      }
    }
  },
  methods: {
    changePay(value) {
      this.pay = value;
    },
    onChangePago(value) {
      this.$store.dispatch('savePago', value);
    },
    saveMatricula() {
      this.matricula = {
        rama: this.$store.state.rama,
        provincia: this.$store.state.provincia,
        modalidad: this.$store.state.modalidad,
        horario: this.$store.state.modalidad,
        personalInfo: {
          name: this.$store.state.personalInfo.name,
          dni: this.$store.state.personalInfo.dni,
          movil: this.$store.state.personalInfo.movil,
          email: this.$store.state.personalInfo.email,
        },
        tarifa: this.$store.state.modalidad,
        comunidad: this.$store.state.comunidad,
        formaDePago: this.$store.state.formaDePago,
      }
      console.log('MATRICULA', this.matricula);
      db.collection('matriculas').add(this.matricula);
      this.$router.push('/Final')
    }
  },

  created() {
    console.log('STORE', this.$store.state.msg);
  } 
}
</script>

<style lang="scss">
.box2 {
  margin-top: 60px;
}

.step-buttons {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  &__button {
    width: 20%;
    height: 50px;
    margin: 10px;
  } 
}
.button2 {
  width: 20%;
  margin-right: 20px;
}

.navbar {
  width: 30%;
}
.step6 {
  display: flex;

  &__content {
    width: 70%;
    margin: 50px auto;
    padding: 0px 100px;

    &__title {
      width: 100%;
      margin: 30px auto;
      text-align: center;
      font-weight: 700;
      font-size: 36px;
      color: #577294;
    }

    &__title-secondary {
      width: 100%;
      margin: 30px auto;
      text-align: center;
      font-weight: 700;
      font-size: 30px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 60px auto;
    }

    &__buttons {
      display: flex;
      width: 100%;
    }

    &__button {
      background-color: transparent;
      width: 50%;
      height: 50px;
      color: #577294;
      font-size: 16px;
      border-radius: 10px;
      margin-right: 50px;
    }

    &__description {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
      color: #0BC6FE;
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 700px) and (max-width: 1100px) {
.box2 {
  margin-top: 60px;
}

.step-buttons {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  &__button {
    width: 40%;
    height: 50px;
    margin: 10px;
  } 
}
.button2 {
  width: 20%;
  margin-right: 20px;
}

.navbar {
  width: 30%;
}
.step6 {
  display: flex;

  &__content {
    width: 100%;
    margin: 50px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      margin: 0px auto;
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      color: #577294;
    }

    &__title-secondary {
      width: 100%;
      margin: 10px auto;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 50px auto;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__button {
      background-color: transparent;
      width: 100%;
      height: 50px;
      color: #577294;
      font-size: 16px;
      border-radius: 10px;
      margin: 10px 0px;
      margin-right: 0px;
    }

    &__description {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
      color: #0BC6FE;
      cursor: pointer;
    }
  }
}
}

@media screen and (max-width: 700px) {
.box2 {
  margin-top: 60px;
}

.step-buttons {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  &__button {
    width: 40%;
    height: 50px;
    margin: 10px;
  } 
}
.button2 {
  width: 20%;
  margin-right: 20px;
}

.navbar {
  width: 30%;
}
.step6 {
  display: flex;

  &__content {
    width: 100%;
    margin: 20px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      margin: 0px auto;
      text-align: center;
      font-weight: 700;
      font-size: 22px;
      color: #577294;
    }

    &__title-secondary {
      width: 100%;
      margin: 0px auto;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 20px auto;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__button {
      background-color: transparent;
      width: 100%;
      height: 50px;
      color: #577294;
      font-size: 16px;
      border-radius: 10px;
      margin: 10px 0px;
      margin-right: 0px;
    }

    &__description {
      margin-top: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #0BC6FE;
      cursor: pointer;
    }
  }
}
}
</style>
