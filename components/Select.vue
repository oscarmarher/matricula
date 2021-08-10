<template>
    <form class="select" v-if="dataList">
        <select class="select__input" v-on:change="sendData">
          <option v-for="data in dataList" :key="data" class="select__input__option">
            {{data}}
          </option>
        </select>  
    </form>
</template>

<script>
export default {
    props: {
        dataList: null,
    },
    methods: {
        sendData(e) {
            this.$emit('getData', e.target.value)
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/css/imports';
.select {
height: 60px !important;
width: 100%;

    &__input {
        background-color: $white;
        font-weight: 500;
        font-size: 16px;
        color: $silver !important;
        height: 100% !important;
        line-height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: 1px solid  $darkBlue;
        border-radius: 10px;
    
        &__option {
          height: 40px;
          border: 2px solid  $darkBlue;
          border-radius: 10px;
        }
    }
}
</style>