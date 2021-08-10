<template>
  <div class="step3">
    <div class="navbar">
      <Steps />
    </div>
        <div class="step-3">
          <h1 class="step-3__title">Selecciona tu tarifa</h1>

          <div class="tarifa">
            <h3 class="tarifa__title">Tarifas</h3>
            <p class="tarifa__description">(Selecciona una opción)</p>
              <div class="tarifa-buttons" v-if="tarifasList">
                  <button v-on:click="onChangeTarifa" v-for="tarifa in tarifasList" :key='tarifa' :value="tarifa" class="tarifa__button">{{tarifa}}</button>
              </div>
          </div>

            <div class="step-buttons">
              <button class="button-1"><NuxtLink class="Link" to="/step4">Siguiente</NuxtLink></button>
              <button class="button-2"><NuxtLink class="Link-two" to="/step2">Atrás</NuxtLink></button>
            </div>
        </div>
    </div>
</template>

<script>
import Steps from '../components/Steps';
import {db} from '~/plugins/firebase.js';
export default {
  components: {
    Steps
  },
  data() {
    return {
        tarifasList: [],
    }
  },
  methods: {
    onChangeTarifa(ev) {
      this.$store.commit('saveTarifa', ev.target.value);
    },
    async getTarifas() {
      try {
        const response = await db.collection('tarifas').get();
        response.forEach( document => {
        let tarifa = document.data().tarifa;
        tarifa.forEach( element => {
        this.tarifasList.push(element);
        })
        });
        console.log('TARIFAS', this.tarifasList);
    } catch (error) {
        console.log(error);
    }
    },
  },

  created() {
    this.getTarifas();
  } 
}
</script>

<style lang="scss">
.navbar {
  width: 30%;
}
 .step3 {
    display: flex;

    .step-3{
        width: 65%;
        margin: 30px 0px;

        .step-3__title {
            width: 90%;
            text-align: center;
            margin: 50px auto;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .tarifa {
            text-align: justify;
            width: 90%;
            margin: 80px auto;
            padding-left: 40px;
            color: #577294;

            .tarifa__title {
                font-size: 20px;
            }

            .tarifa__description {
                font-size: 18px;
                margin: 6px 0px;
            }

            .tarifa-buttons {
                display: flex;
                flex-direction: column;
                width: 96%;

                .tarifa__button {
                    font-size: 14px;
                    font-weight: 700;
                    color: #577294;
                    margin-top: 10px;
                    height: 50px;
                    background-color: #fff;
                    border: 1px solid #577294;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
        }
        .step-buttons {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
    
            .button-1 {
                margin: 0px auto;
                margin-bottom: 20px;
                width: 25%;
                padding: 12px 12px;
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
                padding: 6px 10px;
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
