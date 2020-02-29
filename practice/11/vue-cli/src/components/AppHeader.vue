<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <button v-on:click="sendEvent">send</button>
    </header>
</template>

<script>
//파일명은 camelcase로, 최소 2단어 이상 조합으로 권장(html 표준 태그와 중복 방지)
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    },
}
</script>

<style>

</style>