<template>
<div class="step4">
  <div class="navbar">
    <Steps />
  </div>
        <div class="step-4">
          <h1 class="step-4__title">Tus datos personales</h1>

          <div class="datos-personales__box1">
            <p class="datos-personales__name">Nombre completo</p>
            <form class="datos-personales__form">
                <input
                type="text"
                name="name"
                v-on:change="onChangeName" 
                placeholder="Ej: Camila Perez Sanchez" 
                class="datos-personales__input"/>
            </form>
          </div>

          <div class="datos-personales__box2">
            <div class="datos-personales__box">
                <p class="datos-personales__name">DNI - NIE</p>
                <form class="datos-personales__form">
                    <input
                    type="text" 
                    name="dni"
                    v-on:change="onChangeDni" 
                    placeholder="Ej: 78548568Y" 
                    class="datos-personales__input2"/>
                </form>
            </div>

            <div class="datos-personales__box">
                <p class="datos-personales__name">Móvil</p>
                <form class="datos-personales__form">
                    <input
                    type="text"
                    name="movil"
                    v-on:change="onChangeMovil" 
                    placeholder="Ej: 659 34 55 42" 
                    class="datos-personales__input2"/>
                </form>
            </div>

            <div class="datos-personales__box">
                <p class="datos-personales__name">Email</p>
                <form class="datos-personales__form">
                    <input
                    type="text"
                    name="email"
                    v-on:change="onChangeEmail"
                    placeholder="Ej: cam.per.san@gmail.com" 
                    class="datos-personales__input2"/>
                </form>
            </div>
          </div>

            <div class="step-buttons">
              <button class="button-1"><NuxtLink class="Link" to="/step5">Siguiente</NuxtLink></button>
              <button class="button-2"><NuxtLink class="Link-two" to="/step3">Atrás</NuxtLink></button>
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
    onChangeName(ev) {
      this.$store.commit('savePersonalInfoName', ev.target.value);
    },
    onChangeDni(ev) {
      this.$store.commit('savePersonalInfoDni', ev.target.value);
    },
    onChangeMovil(ev) {
      this.$store.commit('savePersonalInfoMovil', ev.target.value);
    },
    onChangeEmail(ev) {
      this.$store.commit('savePersonalInfoEmail', ev.target.value);
    },
  },

  created() {
  } 
}
</script>

<style lang="scss">
.navbar {
  width: 30%;
}
 .step4 {
    display: flex;

    .step-4{
        width: 60%;
        margin: 30px auto;

        .step-4__title {
            width: 80%;
            text-align: center;
            margin: 50px auto;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .datos-personales__box1 {
            text-align: justify;
            width: 90%;
            margin: 40px auto;

            .datos-personales__name {
                font-size: 20px;
                color: #577294;
                font-weight: 500;
            }

            .datos-personales__form {
                margin: 20px 0px;

                .datos-personales__input {
                    width: 80%;
                    border: 1px solid #577294;
                    border-radius: 10px;
                    height: 50px;
                    color: silver;
                    font-size: 14px;
                    padding-left: 10px;
                }
            }
        }

        .datos-personales__box2 {
            display: flex;
            width: 90%;
            margin: 50px auto;
            text-align: justify;

            .datos-personales__box {
                flex: 1;
                width: 30%;

                .datos-personales__name {
                    font-size: 20px;
                    color: #577294;
                    font-weight: 500;
                }
    
                .datos-personales__form {
                    margin: 20px 0px;
    
                    .datos-personales__input2 {
                        width: 80%;
                        border: 1px solid #577294;
                        border-radius: 10px;
                        height: 50px;
                        color: silver;
                        font-size: 14px;
                        padding-left: 10px;
                    }
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
