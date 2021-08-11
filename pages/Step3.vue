<template>
  <div class="step3">
    <div v-if="screen.width > 1030" class="navbar">
      <Steps />
    </div>
    <div class="step3__content">
      <h1 class="step3__content__title">Selecciona tu tarifa</h1>
      <div class="step3__content__tarifa">
        <h3 class="step3__content__tarifa__title">Tarifas</h3>
        <p class="step3__content__tarifa__description">(Selecciona una opción)</p>
        <div class="step3__content__tarifa__buttons" v-if="tarifasList">
          <div v-on:click="onChangeTarifa && changeTarifa(index)" v-for="(tarifa, index) in tarifasList" :key='index' :value="tarifa" class="step3__content__tarifa__button">
            <Button :index="index" :type="(valueTarifa == index) ? 4 : 2" :text="tarifa" />
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
      screen: window.screen,
      tarifasList: [],
      valueTarifa: null,
    }
  },
  methods: {
    changeTarifa(valor) {
      this.valueTarifa = valor;
    },
    onChangeTarifa(e) {
      this.$store.dispatch('saveTarifa', e.target.innerText);
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

.navbar {
  width: 30%;
}
.step3 {
  display: flex;

  &__content {
    width: 70%;
    margin: 30px 0px;
    padding: 0px 100px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 50px auto;
      font-weight: 700;
      font-size: 36px;
      color: #577294;
    }

    &__tarifa {
      text-align: justify;
      width: 100%;
      margin: 80px auto;
      color: #577294;

      &__title {
        font-size: 20px;
        font-weight: 600;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &__button {
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
}

@media screen and (min-width: 700px) and (max-width: 1100px) {
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

.navbar {
  width: 30%;
}
.step3 {
  display: flex;

  &__content {
    width: 100%;
    margin: 50px 0px;
    padding: 0px 20px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 0px auto;
      font-weight: 700;
      font-size: 32px;
      color: #577294;
    }

    &__tarifa {
      text-align: justify;
      width: 100%;
      margin: 40px auto;
      color: #577294;

      &__title {
        font-size: 20px;
        font-weight: 600;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &__button {
        font-size: 14px;
        font-weight: 700;
        color: #577294;
        margin-top: 10px;
        height: 80px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
    }      
  }
}
}

@media screen and (max-width: 700px) {
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

.navbar {
  width: 30%;
}
.step3 {
  display: flex;

  &__content {
    width: 100%;
    margin: 20px 0px;
    padding: 0px 20px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 0px auto;
      font-weight: 700;
      font-size: 22px;
      color: #577294;
    }

    &__tarifa {
      text-align: justify;
      width: 100%;
      margin: 40px auto;
      color: #577294;

      &__title {
        font-size: 20px;
        font-weight: 600;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &__button {
        font-size: 14px;
        font-weight: 700;
        color: #577294;
        margin-top: 10px;
        height: 80px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
    }      
  }
}
}
</style>
