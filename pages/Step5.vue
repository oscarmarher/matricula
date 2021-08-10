<template>
<div class="step5">
    <div class="navbar">
      <Steps />
    </div>
        <div class="step-5">
          <h1 class="step-5__title">Tu dirección</h1>

          <div class="direction-box1">
            <h3 class="direction__title">Comunidad de Exámen</h3>
            <p class="direction__description">(Selecciona una opción)</p>
            
            <form class="direction__form">
                  <select class="direction__select" v-if="comunidadesList" v-on:change="onChangeComunidad">
                    <option v-for="comunidad in comunidadesList" class="direction__option" :key="comunidad" :value="comunidad">{{comunidad}}</option>
                  </select>
            </form>
          </div>

          <div class="direction__box2">
            <p class="direction__name">Dirección</p>
            <form class="direction__form">
                <input
                type="text" 
                placeholder="Ej: Calle Ramiro de Maxtu, 10, 4D" 
                class="direction__input"/>
            </form>
          </div>

          <div class="direction__box3">
            <div class="direction__box">
                <p class="direction__name">Localidad</p>
                <form class="direction__form">
                    <input
                    type="text" 
                    placeholder="Ej: Madrid" 
                    class="direction__input2"/>
                </form>
            </div>

            <div class="direction__box">
                <p class="direction__name">Provincia</p>
                <form class="direction__form">
                    <input
                    type="text" 
                    placeholder="Ej: Madrid" 
                    class="direction__input2"/>
                </form>
            </div>

            <div class="direction__box">
                <p class="direction__name">Código Postal</p>
                <form class="direction__form">
                    <input
                    type="text" 
                    placeholder="Ej: 28040" 
                    class="direction__input2"/>
                </form>
            </div>
          </div>

            <div class="step-buttons">
              <button class="button-1"><NuxtLink class="link" to="/step6">Siguiente</NuxtLink></button>
              <button class="button-2"><NuxtLink class="link-two" to="/step4">Atrás</NuxtLink></button>
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
        comunidadesList: [],
    }
  },
  methods: {
    onChangeComunidad(ev) {
      this.$store.commit('saveComunidad', ev.target.value);
    },
    async getComunidades() {
      try {
        const response = await db.collection('comunidades').get();
        response.forEach( document => {
        let comunidad = document.data().comunidad;
        comunidad.forEach( element => {
        this.comunidadesList.push(element);
        })
        });
        console.log('COMUNIDADES', this.comunidadesList);
    } catch (error) {
        console.log(error);
    }
    },
  },

  created() {
    this.getComunidades();
  } 
}
</script>

<style lang="scss">
.navbar {
    width: 30%;
}
.step5 {
    display: flex;

    .step-5{
        width: 70%;
        margin: 0px auto;
        margin-left: 100px;

        .step-5__title {
            width: 70%;
            margin: 60px auto;
            text-align: center;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .direction-box1 {
            text-align: justify;
            width: 90%;
            margin: 30px auto;

            .direction__title {
                font-size: 20px;
                color: #577294;
                font-weight: 500;
            }

            .direction__description {
                font-size: 18px;
                margin: 6px 0px;
                color: #577294;
                margin-bottom: 10px;
            }

            .direction__select {
                background-color: #fff;
                font-weight: 500;
                font-size: 16px;
                color: silver;
                width: 80%;
                height: 40px;
                border: 1px solid  #577294;
                border-radius: 10px;

                .direction__option {
                    height: 40px;
                    border: 1px solid  #577294;
                    border-radius: 10px;
                }
            }
        }

        .direction__box2 {
            text-align: justify;
            width: 90%;
            margin: 60px auto;

            .direction__name {
                font-size: 20px;
                color: #577294;
                font-weight: 500;
            }

            .direction__form {
                margin: 20px 0px;

                .direction__input {
                    width: 80%;
                    border: 1px solid #577294;
                    border-radius: 10px;
                    height: 40px;
                    color: silver;
                    font-size: 14px;
                    padding-left: 10px;
                }
            }
        }

        .direction__box3 {
            display: flex;
            width: 90%;
            margin: 50px auto;
            text-align: justify;

            .direction__box {
                flex: 1;
                width: 30%;

                .direction__name {
                    font-size: 20px;
                    color: #577294;
                    font-weight: 500;
                }
    
                .direction__form {
                    margin: 20px 0px;
    
                    .direction__input2 {
                        width: 80%;
                        border: 1px solid #577294;
                        border-radius: 10px;
                        height: 40px;
                        color: silver;
                        font-size: 14px;
                        padding-left: 10px;
                    }
                }
            }
        }

        .step-buttons {
            margin-top: 80px;
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
