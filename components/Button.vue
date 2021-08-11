<template>
    <button :class="(type==2) ? 'principalBtn light' : (type==3) ? 'principalBtn transparent' : (type==4) ? 'principalBtn selected' : 'principalBtn'">{{text}}</button>
</template>

<script>
export default {
props: {
    text: null,
    type: null,
}
}
</script>

<style lang="scss">
@import '~/assets/css/imports';
.principalBtn {
    background-color: $clareBlue;
    color: $white;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    font-weight: 600;
    border: 0;
    font-size: 100%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        font-size: 104%;
    }
}

.light {
    background-color: transparent;
    color: $darkBlue;
    border: 1px solid $darkBlue;
    &:hover {
        font-size: 104%;
    }
}

.transparent {
    background-color: transparent;
    color: $clareBlue;

    &:hover {
        font-size: 104%;
    }
}

.selected {
    background-color: $darkBlue;
    color: $white;
}
</style>