<template>
  <div class="step1">
    <div class="navbar">
      <Steps />
    </div>
    <div class="step-1">
      <div class="step-1__box">
      <h1 class="step-1__title">¿En qué te quieres especializar?</h1>
      <div class="rama-provincia">
        <div class="rama">
          <h3 class="rama__title">Rama</h3>
          <p class="rama__description">(Selecciona una opción)</p>
          <form class="rama__form" v-if="ramasList">
            <select class="form__select" v-on:change="onChangeRama" v-model="rama">
              <option v-for="rama in ramasList" :key="rama" class="form__option">
                {{rama}}
              </option>
            </select>  
          </form>
        </div>
        <div class="provincia">
          <h3 class="provincia__title">Provincia</h3>
          <p class="provincia__description">(Selecciona una opción)</p>
          <form class="provincia__form" v-if="provinciasList">
            <select class="form__select" v-on:change="onChangeProvincia" v-model="provincia">
              <option  v-for="provincia in provinciasList" :key="provincia" class="form__option">
                {{provincia}}
              </option>
            </select>
          </form>
        </div>
      </div>
      <div class="alumno">
        <p class="alumno__description">¿Has sido alumn@ de Magister?</p>
        <p class="alumno__consulta">Consulta condiciones</p>
        <div class="alumno__buttons">
          <div class="alumno__buttons__button">
            <Button :type="2" :text="'No'" />
          </div>
          <div class="alumno__buttons__button">
            <Button :type="2" :text="'Si'" />
          </div>
          <div class="alumno__buttons__button">
            <Button :type="2" :text="'Si, despúes de 2017'" />
          </div>
        </div>
      </div>
      <div class="alumno">
        <p class="alumno__description">Entrega de material</p>
        <p class="alumno__consulta">Consulta condiciones</p>
        <div class="alumno__buttons">
          <button class="alumno__button button__four">Material mes a mes</button>
        </div>
      </div>
      <div @click="$router.push('/step2')" class="step1__buttons__button">
        <Button :text="'Siguiente'" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button';
import Steps from '~/components/Steps';
import {db} from '~/plugins/firebase.js';
export default {
  components: {
    Button,
    Steps
  },
  data() {
    return {
      rama: '',
      provincia: '',
      ramasList: [],
      provinciasList: [],
    }
  },
  methods: {
    onChangeRama(ev) {
      this.$store.commit('saveRama', this.rama);
    },
    onChangeProvincia(ev) {
      this.$store.commit('saveProvincia', this.provincia);
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

.input {
  outline: none;
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

  .step-1{
    width: 70%;
    margin: 0px 0px;

    &__box {
      width: 90%;
      margin: 100px auto;
    }

    &__title {
      font-weight: 700;
      font-size: 36px;
      color: $darkBlue;
      text-align: center;
    }

.rama-provincia {
  display: flex;
  justify-content: center;
  margin: 50px auto;
  color: $darkBlue;
  
  .form__select {
    background-color: $white;
    font-weight: 500;
    font-size: 16px;
    color: $silver;
    height: 50px;
    width: 90%;
    border: 1px solid  $darkBlue;
    border-radius: 10px;
    
    .form__option {
      height: 40px;
      border: 2px solid  $darkBlue;
      border-radius: 10px;
    }
  }

.rama {
  flex: 1;
  justify-content: center;
  align-items: center;
  
  &__description {
    margin: 20px 0px;
  }

  &__title {
    font-weight: 700;
  }
}

.provincia {
  flex: 1;
  text-align: justify;

  &__description {
    margin: 20px 0px;
  }

  &__title {
    font-weight: 700;
  }
}
}

.alumno{
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

        .step-buttons {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
    
            .button-1 {
                margin: 0px auto;
                margin-bottom: 20px;
                width: 26%;
                padding: 10px 14px;
                background-color: $clareBlue;
                border: 0px;
                border-radius: 10px;
                color: $white;
                font-size: 18px;
                font-weight: 800;
            }
    
            .button-2 {
                margin: 0px auto;
                margin-bottom: 20px;
                width: 16%;
                padding: 10px 14px;
                background-color: transparent;
                border: 0px;
                color: $clareBlue;
                font-size: 18px;
                font-weight: 800;
            }
        }
    }
}
</style>
