<template>
  <div class="step1">
    <div v-if="screen > 1030" class="navbar">
      <Steps />
    </div>
    <div class="step1__content">
      <div class="step1__content__box">
        <h1 class="step1__content__title">¿En qué te quieres especializar?</h1>
        <div class="step1__content__form">
          <div class="step1__content__form__field">
            <h3 class="step1__content__form__field__title">Rama</h3>
            <p class="step1__content__form__field__description">(Selecciona una opción)</p>
            <Select @getData="onChangeRama" :dataList="ramasList" />
          </div>
          <div class="step1__content__form__field">
            <h3 class="step1__content__form__field__title">Provincia</h3>
            <p class="step1__content__form__field__description">(Selecciona una opción)</p>
            <Select @getData="onChangeProvincia" :dataList="provinciasList" />
          </div>
        </div>
        <div class="step1__content__questions">
          <p class="step1__content__questions__description">¿Has sido alumn@ de Magister?</p>
          <p class="step1__content__questions__consulta">Consulta condiciones</p>
          <div class="step1__content__questions__buttons">
            <div class="step1__content__questions__buttons__button">
              <Button :type="2" :text="'No'" />
            </div>
            <div class="step1__content__questions__buttons__button">
              <Button :type="2" :text="'Si'" />
            </div>
            <div class="step1__content__questions__buttons__button">
              <Button :type="2" :text="'Si, despúes de 2017'" />
            </div>
          </div>
        </div>
        <div class="step1__content__questions">
          <p class="step1__content__questions__description">Entrega de material</p>
          <p class="step1__content__questions__consulta">Consulta condiciones</p>
          <div class="step1__content__questions__buttons__button">
            <Button :type="2" :text="'Material, mes a mes'" />
          </div>
        </div>
        <div v-if="error" class="error">{{error}}</div>
        <div @click="nextPage" class="step1__buttons__button">
          <Button :text="'Siguiente'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button';
import Select from '~/components/Select';
import Steps from '~/components/Steps';
import {db} from '~/plugins/firebase.js';
export default {
  mounted() {
    this.screen = window.screen.width;
    //this.$store.dispatch('saveStep', this.step)
  },
  head() {
    return {
      title: 'Paso 1'
    }
  },
  components: {
    Button,
    Steps,
    Select
  },
  data() {
    return {
      step: 1,
      screen: null,
      rama: '',
      provincia: '',
      ramasList: [],
      provinciasList: [],
      error: null,
    }
  },
  methods: {
    nextPage() {
      this.rama = this.$store.getters['getRama'];
      this.provincia = this.$store.getters['getProvincia']
      console.log('RAMA Y PROVINCIA', this.rama, this.provincia)
      if(this.rama && this.provincia) {
        this.$store.dispatch('saveStep', this.step+1)
        this.$router.push('/step2')
      }else {
        this.error = 'Completa todos los campos'
      }
    },
    onChangeRama(value) {
      this.$store.dispatch('saveRama', value);
    },
    onChangeProvincia(value) {
      this.$store.dispatch('saveProvincia', value);
    },

    async getRamas() {
      try {
        const response = await db.collection('ramas').get();
        response.forEach( document => {
        let maestros = document.data().maestros;
        maestros.forEach( element => {
        this.ramasList.push(element);
        })
        });
        console.log('RAMAS', this.ramasList);
        this.ramasList.unshift('')
      } catch (error) {
        console.log(error);
      }
    },
    async getProvincias() {
      try {
        const response = await db.collection('provincias').get();
        response.forEach( document => {
        let provincia = document.data().provincia;
        provincia.forEach( element => {
        this.provinciasList.push(element);
        })
        });
        this.provinciasList.unshift('')
        console.log('PROVINCIAS', this.provinciasList);
    } catch (error) {
        console.log(error);
    }
    }
  },

  created() {
    this.getRamas();
    this.getProvincias();
  } 
}
</script>

<style lang="scss">
@import '~/assets/css/imports';
.error {
  color: red;
  text-align: center;
  font-weight: 400;
  margin: 10px 0px;
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

.navbar {
  width: 30%;
}

.step1 {
  display: flex;

  &__buttons {
    display: flex;
    justify-content: center;

    &__button {
      width: 20%;
      margin: 0px auto;
      height: 50px;
    }
  }

  &__content{
    width: 70%;
    margin: 0px 0px;

    &__box {
      width: 80%;
      margin: 100px auto;
    }

    &__title {
      font-weight: 700;
      font-size: 36px;
      color: $darkBlue;
      text-align: center;
    }

    &__form {
      display: flex;
      justify-content: space-between;
      margin: 50px auto;
      color: $darkBlue;

      &__field {
        width: 48%;
        justify-content: center;
        align-items: center;

        &__description {
          margin: 20px 0px;
          font-size: 20px;
        }

        &__title {
          font-weight: 700;
          font-size: 20px;
        }
      }
    }

    &__questions {
      margin: 50px auto;
      text-align: justify;
      font-size: 18px;
      font-weight: 700;

      &__description {
        color: $darkBlue;
      }

      &__consulta {
        color: $clareBlue;
        margin: 10px 0px;
      }

      &__buttons {
        display: flex;

        &__button {
          width: 20%;
          height: 50px !important;
          margin: 20px 0px;
          margin-right: 20px;
        }
      }
    }   
  }
}

@media screen and (min-width: 700px) and (max-width: 1100px) {
.navbar {
  width: 30%;
}

.step1 {
  display: flex;

  &__buttons {
    display: flex;
    justify-content: center;

    &__button {
      width: 40%;
      margin: 0px auto;
      height: 50px;
    }
  }

  &__content {
    width: 100%;
    margin: 0px 0px;

    &__box {
      width: 80%;
      margin: 50px auto;
    }

    &__title {
      font-weight: 700;
      font-size: 32px;
      color: $darkBlue;
      text-align: center;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 20px auto;
      color: $darkBlue;

      &__field {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        &__description {
          margin: 4px 0px;
          font-size: 20px;
        }

        &__title {
          font-weight: 700;
          font-size: 20px;
        }
      }
    }

    &__questions {
      margin: 20px auto;
      text-align: justify;
      font-size: 18px;
      font-weight: 700;

      &__description {
        color: $darkBlue;
      }

      &__consulta {
        color: $clareBlue;
        margin: 10px 0px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__button {
          width: 100%;
          height: 50px !important;
          margin: 8px 0px;
          margin-right: 0px;
        }
      }
    }   
  }
}
}

@media screen and (max-width: 700px) {
.navbar {
  width: 30%;
}

.step1 {
  display: flex;

  &__buttons {
    display: flex;
    justify-content: center;

    &__button {
      width: 40%;
      margin: 0px auto;
      height: 50px;
    }
  }

  &__content {
    width: 100%;
    margin: 0px 0px;

    &__box {
      width: 80%;
      margin: 20px auto;
    }

    &__title {
      font-weight: 700;
      font-size: 22px;
      color: $darkBlue;
      text-align: center;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 20px auto;
      color: $darkBlue;

      &__field {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        &__description {
          margin: 4px 0px;
          font-size: 20px;
        }

        &__title {
          font-weight: 700;
          font-size: 20px;
        }
      }
    }

    &__questions {
      margin: 20px auto;
      text-align: justify;
      font-size: 18px;
      font-weight: 700;

      &__description {
        color: $darkBlue;
      }

      &__consulta {
        color: $clareBlue;
        margin: 10px 0px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__button {
          width: 100%;
          height: 50px !important;
          margin: 8px 0px;
          margin-right: 20px;
        }
      }
    }   
  }
}
}
</style>
