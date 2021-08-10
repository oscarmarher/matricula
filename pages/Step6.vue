<template>
  <div class="step6">
    <div class="navbar">
      <Steps />
    </div>
        <div class="step-6">
          <h1 class="step-6__title">Forma de pago</h1>

          <div class="pago-box1">
            <h3 class="pago__title">¿Cómo prefieres abonar tu primer pago?</h3>
            <div class="pago-buttons">
                <div v-on:click="onChangePago('Tarjeta de crédito/débito')" value="Tarjeta de crédito/débito" class="pago__button">
                  <Button :type="2" :text="'Tarjeta de crédito/débito (recomendado)'" />
                </div>
                <div v-on:click="onChangePago('Transferencia bancaria')" value="Transferencia Bancaria" class="pago__button">
                  <Button :type="2" :text="'Transferencia bancaria'" />
                </div>
            </div>
            <p class="pago__description">Detalle sobre forma de pago y proceso post pago</p>
          </div>

          <div class="pago-box1 box2">
            <h3 class="pago__title">¿Vienes recomendado por alguien?</h3>
            <div class="pago-buttons">
              <button class="pago__button button2">Si</button>
              <button class="pago__button button2">No</button>
            </div>
            <p class="pago__description">Ver información legal</p>
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
.navbar {
  width: 30%;
}
.step6 {
    display: flex;

    .step-6{
        width: 70%;
        margin: 50px auto;
        padding: 0px 100px;

        .step-6__title {
            width: 100%;
            margin: 30px auto;
            text-align: center;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .pago-box1 {
            text-align: justify;
            width: 100%;
            margin: 60px auto;

            .pago__title {
              font-size: 20px;
              color: #577294;
              font-weight: 500;
              margin: 20px auto;
            }

            .pago-buttons {
              display: flex;
              width: 100%;

              .pago__button {
                background-color: transparent;
                width: 50%;
                height: 50px;
                color: #577294;
                font-size: 16px;
                border-radius: 10px;
                margin-right: 50px;
              }

              .button2 {
                width: 20%;
                margin-right: 20px;
              }
            }

            .pago__description {
              margin-top: 20px;
              font-size: 20px;
              font-weight: 500;
              color: #0BC6FE;
            }
        }

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
    }
}
</style>
