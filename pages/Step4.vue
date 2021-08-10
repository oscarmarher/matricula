<template>
<div class="step4">
  <div class="navbar">
    <Steps />
  </div>
  <div class="step-4">
    <h1 class="step-4__title">Tus datos personales</h1>
    <div class="datos-personales__box1">
      <p class="datos-personales__name">Nombre completo</p>
      <div class="datos-personales__input">
        <InputPrincipal :placeholder="'Camila Sánchez Pérez'" :name="'name'" :type="'text'" @getData="onChangeName" />
      </div>
    </div>

    <div class="datos-personales__box2">
      <div class="datos-personales__box">
        <p class="datos-personales__name">DNI - NIE</p>
        <div class="datos-personales__input">
          <InputPrincipal :placeholder="'03858267C'" :name="'dni'" :type="'text'" @getData="onChangeDni" />
        </div>
      </div>

      <div class="datos-personales__box">
        <p class="datos-personales__name">Móvil</p>
        <div class="datos-personales__input">
          <InputPrincipal :placeholder="456855444" :name="'phone'" :type="'number'" @getData="onChangeMovil" />
        </div>
      </div>

      <div class="datos-personales__box">
        <p class="datos-personales__name">Email</p>
        <div class="datos-personales__input">
          <InputPrincipal :placeholder="'camila@gmail.com'" :name="'email'" :type="'text'" @getData="onChangeEmail" />
        </div>
      </div>
    </div>

    <div class="step-buttons">
      <div @click="$router.push('/step5')" class="step-buttons__button">
        <Button :text="'Siguiente'" />
      </div>
      <div @click="$router.push('/step3')" class="step-buttons__button">
        <Button :type="3" :text="'Atrás'" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Steps from '../components/Steps';
import {db} from '~/plugins/firebase.js';
import InputPrincipal from '../components/InputPrincipal.vue';
export default {
  head() {
    return {
      title: 'Paso 4'
    }
  },
  components: {
    Steps,
    InputPrincipal
  },
  data() {
    return {
        tarifasList: [],
    }
  },
  methods: {
    onChangeName(value) {
      this.$store.dispatch('savePersonalInfoName', value);
    },
    onChangeDni(value) {
      this.$store.dispatch('savePersonalInfoDni', value);
    },
    onChangeMovil(value) {
      this.$store.dispatch('savePersonalInfoMovil', value);
    },
    onChangeEmail(value) {
      this.$store.dispatch('savePersonalInfoEmail', value);
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
        width: 70%;
        margin: 30px auto;
        padding: 0px 100px;

        .step-4__title {
            width: 100%;
            text-align: center;
            margin: 50px auto;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .datos-personales__input {
          width: 100%;
          height: 60px;
          margin: 20px 0px;
        }

        .datos-personales__box1 {
            text-align: justify;
            width: 100%;
            margin: 40px auto;

            .datos-personales__name {
                font-size: 20px;
                color: #577294;
                font-weight: 500;
            }

        
        }

        .datos-personales__box2 {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 50px auto;

            .datos-personales__box {
                margin-right: 10px;
                width: 100%;

                .datos-personales__name {
                    font-size: 20px;
                    color: #577294;
                    font-weight: 500;
                }
    
                .datos-personales__form {
                    margin: 20px 0px;
    
                    .datos-personales__input2 {
                        width: 100%;
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
