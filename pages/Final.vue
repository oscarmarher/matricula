<template>
    <div class="final">
        <div class="final-title">
            <img class="final__img" src="../assets/img/logo2.png" alt=""/>
            <h2 class="final__title">Magister</h2>
        </div>
        <h1 class="final__title2">¡Gracias!</h1>
        <h1 class="final__title2">Tu reserva está en proceso</h1>
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

    .final-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 38px;
        margin-bottom: 60px;

        .final__title {
            display: flex;
            align-items: flex-end;
            margin-left: 10px;
            font-size: 50px;
            font-weight: 800;
        }

        .final__img {
            width: 4%;
        }
    }

    .final__title2 {
        font-size: 42px;
        margin-bottom: 20px;
    }

    .final__description {
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
</style>
