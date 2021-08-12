<template>
  <div class="step2">
    <div v-if="screen.width > 1030" class="navbar">
      <Steps />
    </div>
    <div class="step2__content">
      <h1 class="step2__content__title">Elige el horario y la modalidad que mas te acomode</h1>
      <div class="step2__content__modalidad">
        <h3 class="step2__content__modalidad__title">Modalidad</h3>
        <p class="step2__content__modalidad__description">(Selecciona una opción)</p>
          <div class="step2__content__modalidad__buttons" v-if="modalidadesList">
            <div v-on:click="(e) => onChangeModalidad(e) & changeModality(index)" v-for="(modalidad, index) in modalidadesList" :key="index" :id="modalidad" class="step2__content__modalidad__button">
              <Button :index="index" :type="(valueModality == index) ? 4 : 2" :text="modalidad" />
            </div>
          </div>  
      </div>
      <div class="step2__content__horario">
        <h3 class="step2__content__horario__title">Horario</h3>
        <p class="step2__content__horario__description">(Selecciona una opción)</p>
          <div class="step2__content__horario__buttons" v-if="horariosList">
            <div v-on:click="(e) => onChangeHorario(e) & changeHorario(index)" v-for="(horario, index) in horariosList" :key="index" :value='horario' class="step2__content__horario__button">
              <Button :index="index" :type="(valueHorario == index) ? 4 : 2" :text="horario" />
            </div>
          </div>
      </div>
      <div v-if="error" class="error">{{error}}</div>
      <div class="step-buttons">
        <div @click="nextPage" class="step-buttons__button">
          <Button :text="'Siguiente'" />
        </div>
        <div @click="$router.push('/step1')" class="step-buttons__button">
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
  mounted() {
    let step = this.$store.getters['getStep'];
    console.log('STEP', step)
    if(step < this.step) {
      window.history.back()
    }
  },
  head() {
    return {
      title: 'Paso 2'
    }
  },
  components: {
    Steps
  },
  data() {
    return {
      step: 2,
      screen: window.screen,
      modalidadesList: [],
      horariosList: [],
      valueModality: null,
      valueHorario: null,
      error: null,
    }
  },
  methods: {
    nextPage() {
      this.horario = this.$store.getters['getHorario'];
      this.modalidad = this.$store.getters['getModalidad']
      if(this.horario && this.modalidad) {
        this.$store.dispatch('saveStep', this.step+1)
        this.$router.push('/step3')
      }else {
        this.error = 'Completa todos los campos'
      }
    },
    changeModality(valor) {
      this.valueModality = valor;
    },
    changeHorario(valor) {
      this.valueHorario = valor;
    },
    onChangeModalidad(e) {
      this.$store.dispatch('saveModalidad', e.target.innerText);
      console.log('MODALIDADdd', e.target.innerText)
    },
    onChangeHorario(e) {
      this.$store.dispatch('saveHorario', e.target.innerText);
    },
    async getModalidades() {
      try {
        const response = await db.collection('modalidades').get();
        response.forEach( document => {
        let modalidad = document.data().modalidad;
        modalidad.forEach( element => {
        this.modalidadesList.push(element);
        })
        });
        console.log('MODALIDADES', this.modalidadesList);
    } catch (error) {
        console.log(error);
    }
    },
    async getHorarios() {
      try {
        const response = await db.collection('horarios').get();
        response.forEach( document => {
        let horario = document.data().horario;
        horario.forEach( element => {
        this.horariosList.push(element);
        })
        });
        console.log('HORARIOS', this.horariosList);
    } catch (error) {
        console.log(error);
    }
    }
  },

  created() {
    this.getModalidades();
    this.getHorarios();
  } 
}
</script>

<style lang="scss">
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
.step2 {
  display: flex;

  &__content{
    width: 70%;
    padding: 0px 100px;
    margin: 60px 0px;
      
    &__title {
      text-align: center;
      width: 100%;
      margin: 40px auto;
      font-weight: 700;
      font-size: 36px;
      color: #577294;
    }

    &__modalidad {
      text-align: justify;
      width: 100%;
      margin: 50px auto;
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
        flex-wrap: wrap;
      }

      &__button {
        font-size: 14px;
        font-weight: 700;
        color: #577294;
        width: 49%;
        margin-top: 10px;
        margin-right: 10px;
        height: 50px;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    &__horario {
      text-align: justify;
      width: 100%;
      margin: 50px auto;
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
        height: 50px;
        background-color: #fff;
        border-radius: 10px;
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
.step2 {
  display: flex;

  &__content{
    width: 100%;
    padding: 0px 20px;
    margin: 50px 0px;
      
    &__title {
      text-align: center;
      width: 100%;
      margin: 0px auto;
      font-weight: 700;
      font-size: 32px;
      color: #577294;
    }

    &__modalidad {
      text-align: justify;
      width: 100%;
      margin: 20px auto;
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
        flex-wrap: wrap;
      }

      &__button {
        font-size: 14px;
        font-weight: 700;
        color: #577294;
        width: 100%;
        margin-top: 10px;
        margin-right: 0px;
        height: 60px;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    &__horario {
      text-align: justify;
      width: 100%;
      margin: 20px auto;
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
        height: 60px;
        background-color: #fff;
        border-radius: 10px;
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
.step2 {
  display: flex;

  &__content{
    width: 100%;
    padding: 0px 20px;
    margin: 20px 0px;
      
    &__title {
      text-align: center;
      width: 100%;
      margin: 0px auto;
      font-weight: 700;
      font-size: 22px;
      color: #577294;
    }

    &__modalidad {
      text-align: justify;
      width: 100%;
      margin: 20px auto;
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
        flex-wrap: wrap;
      }

      &__button {
        font-size: 14px;
        font-weight: 700;
        color: #577294;
        width: 100%;
        margin-top: 10px;
        margin-right: 0px;
        height: 50px;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    &__horario {
      text-align: justify;
      width: 100%;
      margin: 20px auto;
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
        height: 60px;
        background-color: #fff;
        border-radius: 10px;
      }
    }
  }
}
}

</style>