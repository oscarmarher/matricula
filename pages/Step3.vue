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
                <div v-on:click="onChangeTarifa" v-for="tarifa in tarifasList" :key='tarifa' :value="tarifa" class="tarifa__button">
                  <Button :type="2" :text="tarifa" />
                </div>
              </div>
          </div>

        <div class="step-buttons">
          <div @click="$router.push('/step4')" class="step-buttons__button">
            <Button :text="'Siguiente'" />
          </div>
          <div @click="$router.push('/step2')" class="step-buttons__button">
            <Button :type="3" :text="'Atrás'" />
          </div>
        </div>
        </div>
    </div>
</template>

<script>
import Steps from '../components/Steps';
import {db} from '~/plugins/firebase.js';
export default {
  head() {
    return {
      title: 'Paso 3'
    }
  },
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
        width: 70%;
        margin: 30px 0px;
        padding: 0px 100px;

        .step-3__title {
            width: 100%;
            text-align: center;
            margin: 50px auto;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .tarifa {
            text-align: justify;
            width: 100%;
            margin: 80px auto;
            color: #577294;

            .tarifa__title {
              font-size: 20px;
              font-weight: 600;
            }

            .tarifa__description {
              font-size: 18px;
              margin: 6px 0px;
            }

            .tarifa-buttons {
                display: flex;
                flex-direction: column;
                width: 100%;

                .tarifa__button {
                    font-size: 14px;
                    font-weight: 700;
                    color: #577294;
                    margin-top: 10px;
                    height: 70px;
                    background-color: #fff;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
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
