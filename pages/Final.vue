<template>
    <div class="final">
        <div class="final-title">
            <img class="final__img" src="../assets/img/logo2.png" alt=""/>
            <h2 class="final__title">Magister</h2>
        </div>
        <h1 class="final__title2">¡Gracias!</h1>
        <h1 class="final__title2">Tu reserva está en proceso</h1>
        <p class="final__description">La matrícula solo será efectiva una vez que se haya recibido el Pago por tarjeta o transferencia</p>
        <div class="final__button">
            <button class="button-1"><NuxtLink class="link" to="/">Volver a home</NuxtLink></button>
            <button class="button-2"><NuxtLink class="link" to="/step6">Volver atrás</NuxtLink></button>
        </div>
    </div>
</template>

<script>
export default {}
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
        font-size: 38px;
        margin-bottom: 60px;

        .final__title {
            display: flex;
            align-items: flex-end;
            margin-left: 10px;
        }

        .final__img {
            width: 10%;
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

    .final__button {
        display: flex;
        flex-direction: column;

        .button-1 {
            margin: 0px auto;
            margin-bottom: 20px;
            width: 16%;
            padding: 12px 14px;
            background-color: #0BC6FE;
            border: 0px;
            border-radius: 10px;
            color: #fff;
            font-size: 18px;
            font-weight: 800;
        }

        .button-2 {
            margin: 0px auto;
            margin-bottom: 20px;
            width: 16%;
            padding: 10px 14px;
            background-color: transparent;
            border: 0px;
            color: #0BC6FE;
            font-size: 18px;
            font-weight: 800;
        }
    }
}
</style>
