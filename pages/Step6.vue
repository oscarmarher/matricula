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
                <button v-on:click="onChangePago" value="Tarjeta de crédito/débito" class="pago__button">Tarjeta de crédito/débito (recomendado)</button>
                <button v-on:click="onChangePago" value="Transferencia Bancaria" class="pago__button">Transferencia bancaria</button>
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
              <button v-on:click="saveMatricula" class="button-1"><NuxtLink class="Link" to="/final">Enviar</NuxtLink></button>
              <button class="button-2"><NuxtLink class="Link-two" to="/step5">Atrás</NuxtLink></button>
            </div>
        </div>
      </div>
</template>

<script>
import Steps from '../components/Steps';
import {db} from '~/plugins/firebase.js';
import { mapState } from 'vuex';

export default {
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
    onChangePago(ev) {
      this.$store.commit('savePago', ev.target.value);
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
        width: 65%;
        margin: 50px auto;
        padding-left: 50px;

        .step-6__title {
            width: 80%;
            margin: 30px auto;
            text-align: center;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .pago-box1 {
            text-align: justify;
            width: 90%;
            margin: 60px auto;

            .pago__title {
                font-size: 20px;
                color: #577294;
                font-weight: 500;
                margin: 20px auto;
            }

            .pago-buttons {
                display: flex;

                .pago__button {
                    background-color: transparent;
                    width: 50%;
                    padding: 14px 18px;
                    color: #577294;
                    font-size: 16px;
                    border: 1px solid #577294;
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
            margin-top: 60px;
            display: flex;
            flex-direction: column;
    
            .button-1 {
                margin: 0px auto;
                margin-bottom: 20px;
                width: 25%;
                padding: 12px 10px;
                background-color: #0BC6FE;
                border: 0px;
                border-radius: 10px;
                color: #fff;
                font-size: 16px;
                font-weight: 800;
            }
    
            .button-2 {
                margin: 0px auto;
                margin-bottom: 0px;
                width: 16%;
                padding: 8px 12px;
                background-color: transparent;
                border: 0px;
                color: #0BC6FE;
                font-size: 16px;
                font-weight: 800;
            }
        }
    }
}
</style>
