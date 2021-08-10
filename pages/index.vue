<template>
  <div class="home">
    <div class="home__box">
        <div class="home__title">
            <img class="home__title__img" src="../assets/img/logo2.png" alt="logo"/>
            <h2 class="home__title__text">Magister</h2>
        </div>
        <h1 class="home__desc">¡Comencemos con tu matrícula!</h1>
        <p class="home__description">Para comenzar a especializarte, vamos a realizar unas preguntas para darte el mejor servicio.</p>
        <div class="home__buttons">
            <div @click="$router.push('/step1')" class="home__buttons__button">
                <Button :text="'Comenzar'" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Matrícula'
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/css/imports';
.home {
    background-color: $background;
    height: 100vh;
    color: $white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &__box {
        
    }

    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        color: $white;

        &__text {
            font-size: 80px;
            display: flex;
            align-items: flex-end;
            margin-left: 10px;
            color: $white;
            font-weight: 800;
        }

        &__img {
            width: 8%;
        }
    }

    &__desc {
        font-size: 42px;
        margin-bottom: 60px;
    }

    &__description {
        width: 50%;
        margin: 0px auto;
        font-size: 24px;
        margin-bottom: 60px;
        font-weight: 500;
    }

    &__buttons {
        display: flex;
        justify-content: center;

        &__button {
            width: 20%;
            height: 50px;
        }
    }
}
</style>
