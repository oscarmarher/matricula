<template>
  <div class="final">
    <div class="final__logo">
      <img class="final__logo__img" src="../assets/img/logo2.png" alt=""/>
      <h2 class="final__logo__title">Magister</h2>
    </div>
    <h1 class="final__text">¡Gracias!</h1>
    <h1 class="final__text">Tu reserva está en proceso</h1>
    <p class="final__description">La matrícula solo será efectiva una vez que se haya recibido el Pago por tarjeta o transferencia</p>
    <div class="final-buttons">
      <div @click="$router.push('/Final')" class="final-buttons__button">
        <Button :text="'Siguiente'" />
      </div>
      <div @click="$router.push('/step6')" class="final-buttons__button">
        <Button :type="3" :text="'Atrás'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Final'
    }
  },
}
</script>

<style lang="scss">
.final {
  background-color: #182b6a;
  height: 100vh;
  padding: 100px 0px;
  color: #fff;
  text-align: center;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    margin-bottom: 60px;

    &__title {
      display: flex;
      align-items: flex-end;
      margin-left: 10px;
      font-size: 50px;
      font-weight: 800;
    }

    &__img {
      width: 4%;
    }
  }

  &__text {
    font-size: 42px;
    margin-bottom: 20px;
  }

  &__description {
    width: 56%;
    margin: 60px auto;
    font-size: 24px;
    margin-bottom: 60px;
    font-weight: 500;
  }

  .final-buttons {
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

@media screen and (min-width: 700px) and (max-width: 1100px) {
.final {
  background-color: #182b6a;
  height: 100vh;
  padding: 200px 0px;
  color: #fff;
  text-align: center;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &__title {
      display: flex;
      align-items: flex-end;
      margin-left: 4px;
      font-size: 56px;
      font-weight: 800;
    }

    &__img {
      width: 12%;
    }
  }

  &__text {
    font-size: 32px;
    margin-bottom: 0px;
  }

  &__description {
    width: 80%;
    margin: 60px auto;
    font-size: 30px;
    margin-bottom: 60px;
    font-weight: 500;
  }

  .final-buttons {
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
}
}

@media screen and (max-width: 700px) {
.final {
  background-color: #182b6a;
  height: 100vh;
  padding: 50px 0px;
  color: #fff;
  text-align: center;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &__title {
      display: flex;
      align-items: flex-end;
      margin-left: 4px;
      font-size: 36px;
      font-weight: 800;
    }

    &__img {
      width: 12%;
    }
  }

  &__text {
    font-size: 22px;
    margin-bottom: 0px;
  }

  &__description {
    width: 80%;
    margin: 60px auto;
    font-size: 24px;
    margin-bottom: 60px;
    font-weight: 500;
  }

  .final-buttons {
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
}
}
</style>
