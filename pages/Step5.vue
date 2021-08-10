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
            
            <Select @getData="onChangeComunidad" :dataList="comunidadesList" />
          </div>

          <div class="direction__box2">
            <p class="direction__name">Dirección</p>
            <div class="inputPrincipal">
                <InputPrincipal :placeholder="'Ej: Calle Ramiro de Maxtu, 10, 4D'" :name="'address'" :type="'text'" @getData="onChangeAddress" />
            </div>
          </div>

          <div class="direction__box3">
            <div class="direction__box">
                <p class="direction__name">Localidad</p>
                <div class="inputPrincipal">
                    <InputPrincipal :placeholder="'Madrid'" :name="'localidad'" :type="'text'" @getData="onChangeLocalidad" />
                </div>
            </div>

            <div class="direction__box">
                <p class="direction__name">Provincia</p>
                <div class="inputPrincipal">
                    <InputPrincipal :placeholder="'Madrid'" :name="'provincia'" :type="'text'" />
                </div>
            </div>

            <div class="direction__box">
                <p class="direction__name">Código Postal</p>
                <div class="inputPrincipal">
                    <InputPrincipal :placeholder="'28040'" :name="'postalCode'" :type="'number'" @getData="onChangePostalCode" />
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

    .step-5{
        width: 70%;
        margin: 0px auto;
        padding: 0px 100px;

        .step-5__title {
            width: 100%;
            margin: 60px auto;
            text-align: center;
            font-weight: 700;
            font-size: 36px;
            color: #577294;
        }

        .direction-box1 {
            text-align: justify;
            width: 100%;
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
            width: 100%;
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
            width: 100%;
            margin: 50px auto;
            text-align: justify;

            .direction__box {
                width: 100%;
                margin-right: 10px;
                
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
