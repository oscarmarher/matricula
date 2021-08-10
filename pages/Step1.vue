<template>
  <div class="step1">
    <div class="navbar">
      <Steps />
    </div>
    <div class="step1__content">
      <div class="step1__content__box">
      <h1 class="step1__content__title">¿En qué te quieres especializar?</h1>
      <div class="rama-provincia">
        <div class="rama">
          <h3 class="rama__title">Rama</h3>
          <p class="rama__description">(Selecciona una opción)</p>
          <Select @getData="onChangeRama" :dataList="ramasList" />
        </div>
        <div class="provincia">
          <h3 class="provincia__title">Provincia</h3>
          <p class="provincia__description">(Selecciona una opción)</p>
          <Select @getData="onChangeProvincia" :dataList="provinciasList" />
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
        <div class="alumno__buttons__button">
          <Button :type="2" :text="'Material, mes a mes'" />
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
import Select from '~/components/Select';
import Steps from '~/components/Steps';
import {db} from '~/plugins/firebase.js';
export default {
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
      rama: '',
      provincia: '',
      ramasList: [],
      provinciasList: [],
    }
  },
  methods: {
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

.rama-provincia {
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  color: $darkBlue;

.rama {
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

.provincia {
  width: 48%;
  text-align: justify;

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
