<template>
    <div class="steps">
        <div class="steps__title">
            <img class="steps__title__img" src="../assets/img/logo2.png" alt=""/>
            <h2 class="steps__title__name">Magister</h2>
        </div>
        <ul class="steps__list">
            <li id="1" @click="select" :class="(selected==1) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==1) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>¿En qué te quieres especializar?</li>
            <li id="2" @click="select" :class="(selected==2) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==2) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>Horario y Modalidad</li>
            <li id="3" @click="select" :class="(selected==3) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==3) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>Tarifa</li>
            <li id="4" @click="select" :class="(selected==4) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==4) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>Datos Personales</li>
            <li id="5" @click="select" :class="(selected==5) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==5) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>Dirección</li>
            <li id="6" @click="select" :class="(selected==6) ? 'steps__list__step sel' : 'steps__list__step'"><i :class="(selected==6) ? 'fas fa-circle circ' : 'far fa-circle circ'"></i>Forma de pago</li>
        </ul>
        <img class="steps__fondo" src="../assets/img/fondo1.png" alt="" />
    </div>
</template>

<script>
export default {
mounted() {
    let step = this.$route.name;
    console.log('STEP', step[4])
    this.selected = step[4]
},
data() {
    return {
        selected: false,
    }
},
methods: {
    select(e) {
        console.log(this.$route)
        this.selected=e.target.id;
        let s = e.target.id;
        this.$router.push(`/Step${s}`)
    }
}
}
</script>

<style lang="scss">
@import '~/assets/css/imports';
.sel {
    opacity: 1 !important;
}
.circ {
    margin-right: 10px;
    cursor: pointer;
    opacity: 1 !important;
}
.steps {
    width: 100%;
    background-color: $background;
    height: 100vh;

    &__title {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        margin-bottom: 100px;
        color: $white;

        &__name {
            font-weight: 800;
            display: flex;
            align-items: center;
            margin-left: 2px;
            color: $white;
        }

        &__img {
            width: 9%;
        }
    }

    &__list {
        margin: 0px auto;
        color: $white;
        width: 70%;
        margin: 0px auto;

        &__step {
            font-size: 22px;
            font-weight: 700;
            margin: 20px 0px;
            color: $white;
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__fondo {
        display: flex;
        justify-content: center;
        margin: 0px auto;
        margin-top: 40px;
        width: 98%;
        position: absolute;
        bottom: 2px;
        left: 5px;
    }
}
</style>
