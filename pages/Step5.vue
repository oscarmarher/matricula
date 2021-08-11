<template>
<div class="step5">
  <div v-if="screen.width > 1030" class="navbar">
    <Steps />
  </div>
  <div class="step5__content">
    <h1 class="step5__content__title">Tu dirección</h1>
    <div class="step5__content__box1">
      <h3 class="step5__content__box1__title">Comunidad de Exámen</h3>
      <p class="step5__content__box1__description">(Selecciona una opción)</p>
      <Select @getData="onChangeComunidad" :dataList="comunidadesList" />
    </div>

    <div class="step5__content__box2">
      <p class="step5__content__box2__name">Dirección</p>
      <div class="inputPrincipal">
        <InputPrincipal :placeholder="'Ej: Calle Ramiro de Maxtu, 10, 4D'" :name="'address'" :type="'text'" />
      </div>
    </div>

    <div class="step5__content__box3">
      <div class="step5__content__box3__box">
        <p class="step5__content__box3__box__name">Localidad</p>
        <div class="inputPrincipal">
          <InputPrincipal :placeholder="'Madrid'" :name="'localidad'" :type="'text'" />
        </div>
      </div>

      <div class="step5__content__box3__box">
        <p class="step5__content__box3__box__name">Provincia</p>
        <div class="inputPrincipal">
          <InputPrincipal :placeholder="'Madrid'" :name="'provincia'" :type="'text'" />
        </div>
      </div>

      <div class="step5__content__box3__box">
        <p class="step5__content__box3__box__name">Código Postal</p>
        <div class="inputPrincipal">
          <InputPrincipal :placeholder="'28040'" :name="'postalCode'" :type="'number'" />
        </div>
      </div>
    </div>

    <div class="step-buttons">
      <div @click="$router.push('/step6')" class="step-buttons__button">
        <Button :text="'Siguiente'" />
      </div>
      <div @click="$router.push('/step4')" class="step-buttons__button">
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
      title: 'Paso 5'
    }
  },
  components: {
    Steps
  },
  data() {
    return {
      comunidadesList: [],
      screen: window.screen,
    }
  },
  methods: {
    onChangeComunidad(value) {
      this.$store.dispatch('saveComunidad', value);
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

.inputPrincipal {
  width: 100%;
  height: 60px !important;
  margin: 20px 0px;
}

.navbar {
  width: 30%;
}

.step5 {
  display: flex;

  &__content {
    width: 70%;
    margin: 0px auto;
    padding: 0px 100px;

    &__title {
      width: 100%;
      margin: 60px auto;
      text-align: center;
      font-weight: 700;
      font-size: 36px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 30px auto;

      &__title {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
        color: #577294;
        margin-bottom: 10px;
      }

      &__select {
        background-color: #fff;
        font-weight: 500;
        font-size: 16px;
        color: silver;
        width: 80%;
        height: 40px;
        border: 1px solid  #577294;
        border-radius: 10px;

        &__option {
          height: 40px;
          border: 1px solid  #577294;
          border-radius: 10px;
        }
      }
    }

    &__box2 {
      text-align: justify;
      width: 100%;
      margin: 60px auto;

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__form {
        margin: 20px 0px;

        &__input {
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

    &__box3 {
      display: flex;
      width: 100%;
      margin: 50px auto;
      text-align: justify;

      &__box {
        width: 100%;
        margin-right: 10px;
                
        &__name {
          font-size: 20px;
          color: #577294;
          font-weight: 500;
        }
    
        &__form {
          margin: 20px 0px;
    
          &__input2 {
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

.inputPrincipal {
  width: 100%;
  height: 60px;
  margin: 20px 0px;
}

.navbar {
  width: 30%;
}

.step5 {
  display: flex;

  &__content {
    width: 100%;
    margin: 50px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      margin: 0px auto;
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 20px auto;

      &__title {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
        color: #577294;
        margin-bottom: 10px;
      }

      &__select {
        background-color: #fff;
        font-weight: 500;
        font-size: 16px;
        color: silver;
        width: 80%;
        height: 40px;
        border: 1px solid  #577294;
        border-radius: 10px;

        &__option {
          height: 40px;
          border: 1px solid  #577294;
          border-radius: 10px;
        }
      }
    }

    &__box2 {
      text-align: justify;
      width: 100%;
      margin: 20px auto;

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__form {
        margin: 20px 0px;

        &__input {
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

    &__box3 {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 40px auto;
      text-align: justify;

      &__box {
        width: 100%;
        margin-right: 10px;
                
        &__name {
          font-size: 20px;
          color: #577294;
          font-weight: 500;
        }
    
        &__form {
          margin: 20px 0px;
    
          &__input2 {
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

.inputPrincipal {
  width: 100%;
  height: 60px;
  margin: 20px 0px;
}

.navbar {
  width: 30%;
}

.step5 {
  display: flex;

  &__content {
    width: 100%;
    margin: 20px auto;
    padding: 0px 20px;

    &__title {
      width: 100%;
      margin: 0px auto;
      text-align: center;
      font-weight: 700;
      font-size: 22px;
      color: #577294;
    }

    &__box1 {
      text-align: justify;
      width: 100%;
      margin: 20px auto;

      &__title {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__description {
        font-size: 18px;
        margin: 6px 0px;
        color: #577294;
        margin-bottom: 10px;
      }

      &__select {
        background-color: #fff;
        font-weight: 500;
        font-size: 16px;
        color: silver;
        width: 80%;
        height: 40px;
        border: 1px solid  #577294;
        border-radius: 10px;

        &__option {
          height: 40px;
          border: 1px solid  #577294;
          border-radius: 10px;
        }
      }
    }

    &__box2 {
      text-align: justify;
      width: 100%;
      margin: 20px auto;

      &__name {
        font-size: 20px;
        color: #577294;
        font-weight: 500;
      }

      &__form {
        margin: 20px 0px;

        &__input {
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

    &__box3 {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 40px auto;
      text-align: justify;

      &__box {
        width: 100%;
        margin-right: 10px;
                
        &__name {
          font-size: 20px;
          color: #577294;
          font-weight: 500;
        }
    
        &__form {
          margin: 20px 0px;
    
          &__input2 {
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
  }
}
}

</style>
