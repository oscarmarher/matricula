<template>
    <form class="inputPrincipal">
        <input
        :type="type"
        :name="name"
        v-on:change="sendData" 
        :placeholder="placeholder" 
        class="inputPrincipal__input"/>
    </form>
</template>

<script>
export default {
props: {
    type: null,
    name: null,
    placeholder: null,
},

methods: {
    sendData(e) {
        this.$emit('getData', e.target.value)
    }
}
}
</script>

<style lang="scss">
.input {
  outline: none;
}
.inputPrincipal {
    width: 100%;
    height: 100%;

    &__input {
        width: 100%;
        border: 1px solid #577294;
        border-radius: 10px;
        height: 100%;
        color: silver;
        font-size: 110%;
        padding-left: 10px;
    }
}
</style>