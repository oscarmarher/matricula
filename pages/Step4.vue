<template>
<div class="step4">
  <div v-if="screen.width > 1030" class="navbar">
    <Steps />
  </div>
  <div class="step4__content">
    <h1 class="step4__content__title">Tus datos personales</h1>
    <div class="step4__content__data__box1">
      <p class="step4__content__data__name">Nombre completo</p>
      <div class="step4__content__data__input">
        <InputPrincipal :placeholder="'Camila Sánchez Pérez'" :name="'name'" :type="'text'" @getData="onChangeName" />
      </div>
    </div>

    <div class="step4__content__data__box2">
      <div class="step4__content__data__box">
        <p class="step4__content__data__name">DNI - NIE</p>
        <div class="step4__content__data__input">
          <InputPrincipal :placeholder="'03858267C'" :name="'dni'" :type="'text'" @getData="onChangeDni" />
        </div>
      </div>

      <div class="step4__content__data__box">
        <p class="step4__content__data__name">Móvil</p>
        <div class="step4__content__data__input">
          <InputPrincipal :placeholder="456855444" :name="'phone'" :type="'number'" @getData="onChangeMovil" />
        </div>
      </div>

      <div class="step4__content__data__box">
        <p class="step4__content__data__name">Email</p>
        <div class="step4__content__data__input">
          <InputPrincipal :placeholder="'camila@gmail.com'" :name="'email'" :type="'text'" @getData="onChangeEmail" />
        </div>
      </div>
    </div>
    <div v-if="error" class="error">{{error}}</div>
    <div class="step-buttons">
      <div @click="nextPage" class="step-buttons__button">
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
  mounted() {
    let step = this.$store.getters['getStep'];
    if(step < this.step) {
      window.history.back()
    }
  },
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
      step: 4,
      tarifasList: [],
      screen: window.screen,
      name: null,
      dni: null,
      phone: null,
      email: null,
      error: null,
    }
  },
  methods: {
    nextPage() {
      let personalInfo = this.$store.getters['getPersonalInfo'];
      this.name = personalInfo.name;
      this.dni = personalInfo.dni;
      this.phone = personalInfo.movil;
      this.email = personalInfo.email;
      if(this.name && this.dni && this.phone && this.email) {
        this.$store.dispatch('saveStep', this.step+1)
        this.$router.push('/step5')
      }else {
        this.error = 'Completa todos los campos'
      }
    },
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
.step4 {
  display: flex;

  &__content {
    width: 70%;
    margin: 30px auto;
    padding: 0px 100px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 50px auto;
      font-weight: 700;
      font-size: 36px;
      color: #577294;
    }

    &__data {

      &__input {
        width: 100%;
        height: 60px;
        margin: 20px 0px;
      }

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }  

      &__box1 {
        text-align: justify;
        width: 100%;
        margin: 40px auto;
      }

      &__box2 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 50px auto;

        &__box {
          margin-right: 10px;
          width: 100%;

          &__name {
            font-size: 20px;
            color: #577294;
            font-weight: 500;
          }
    
          &__form {
            margin: 20px 0px;
    
            &__input2 {
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

.step4 {
  display: flex;

  &__content {
    width: 100%;
    margin: 50px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 0px auto;
      font-weight: 700;
      font-size: 32px;
      color: #577294;
    }

    &__data {

      &__input {
        width: 100%;
        height: 60px;
        margin: 20px 0px;
      }

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }  

      &__box1 {
        text-align: justify;
        width: 100%;
        margin: 20px auto;
      }

      &__box2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin: 50px auto;

        &__box {
          margin-right: 10px;
          width: 100%;

          &__name {
            font-size: 20px;
            color: #577294;
            font-weight: 500;
          }
    
          &__form {
            margin: 20px 0px;
    
            &__input2 {
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

.step4 {
  display: flex;

  &__content {
    width: 100%;
    margin: 20px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      text-align: center;
      margin: 0px auto;
      font-weight: 700;
      font-size: 22px;
      color: #577294;
    }

    &__data {

      &__input {
        width: 100%;
        height: 60px;
        margin: 10px 0px;
      }

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }  

      &__box1 {
        text-align: justify;
        width: 100%;
        margin: 20px auto;
      }

      &__box2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin: 30px auto;

        &__box {
          margin-right: 10px;
          width: 100%;

          &__name {
            font-size: 20px;
            color: #577294;
            font-weight: 500;
          }
    
          &__form {
            margin: 20px 0px;
    
            &__input2 {
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
    }      
  }
}
}
</style>
