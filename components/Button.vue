<template>
    <button :class="(type==2) ? 'principalBtn light' : (type==3) ? 'principalBtn transparent' : 'principalBtn'">{{text}}</button>
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
}

.light {
    background-color: transparent;
    color: $darkBlue;
    border: 1px solid $darkBlue;
}

.transparent {
    background-color: transparent;
    color: $clareBlue;
}
</style>