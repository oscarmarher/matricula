<template>
  <div class="step2">
    <div class="navbar">
      <Steps />
    </div>
    <div class="step-2">
      <h1 class="step-2__title">Elige el horario y la modalidad que mas te acomode</h1>
      <div class="modalidad">
        <h3 class="modalidad__title">Modalidad</h3>
        <p class="modalidad__description">(Selecciona una opción)</p>
          <div class="modalidad-buttons" v-if="modalidadesList">
            <button v-on:click="onChangeModalidad" v-for="modalidad in modalidadesList" :key="modalidad" :value='modalidad' class="modalidad__button">{{modalidad}}</button>
          </div>  
      </div>
      <div class="horario">
        <h3 class="horario__title">Horario</h3>
        <p class="horario__description">(Selecciona una opción)</p>
          <div class="horario-buttons" v-if="horariosList">
            <button v-on:click="onChangeHorario" v-for="horario in horariosList" :key="horario" :value='horario' class="horario__button">{{horario}}</button>
          </div>
      </div>
        <div class="step-buttons">
          <div @click="$router.push('/step3')" class="step-buttons__button">
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
  components: {
    Steps
  },
  data() {
    return {
      modalidadesList: [],
      horariosList: [],
    }
  },
  methods: {
    onChangeModalidad(ev) {
      this.$store.commit('saveModalidad', ev.target.value);
    },
    onChangeHorario(ev) {
      this.$store.commit('saveHorario', ev.target.value);
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
.navbar {
  width: 30%;
}
 .step2 {
    display: flex;

    .step-2{
        width: 65%;
        margin: 60px 0px;

        .step-2__title {
            width: 90%;
            padding-left: 100px;
            margin: 40px auto;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }
        .modalidad {
            text-align: justify;
            width: 90%;
            margin: 50px auto;
            padding-left: 100px;
            color: #577294;

            .modalidad__title {
                font-size: 20px;
            }

            .modalidad__description {
                font-size: 18px;
                margin: 6px 0px;
            }

            .modalidad-buttons {
                display: flex;
                flex-wrap: wrap;

                .modalidad__button {
                    font-size: 14px;
                    font-weight: 700;
                    color: #577294;
                    width: 40%;
                    margin-top: 10px;
                    margin-right: 10px;
                    height: 40px;
                    background-color: #fff;
                    border: 1px solid #577294;
                    border-radius: 10px;
                }
            }
        }

        .horario {
            text-align: justify;
            width: 90%;
            margin: 50px auto;
            padding-left: 100px;
            color: #577294;

            .horario__title {
                font-size: 20px;
            }

            .horario__description {
                font-size: 18px;
                margin: 6px 0px;
            }

            .horario-buttons {
                display: flex;
                flex-direction: column;
                width: 90%;

                .horario__button {
                    font-size: 14px;
                    font-weight: 700;
                    color: #577294;
                    margin-top: 10px;
                    height: 40px;
                    background-color: #fff;
                    border: 1px solid #577294;
                    border-radius: 10px;
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
            margin: 20px;
          } 
        }
    }
}

</style>