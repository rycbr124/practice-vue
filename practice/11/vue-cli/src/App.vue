<template>
<!--div가 최상단에 한개만 있어야 한다 -->
<!-- The template root requires exactly one element. -->
  <div>
    <app-header v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
//data 속성은 function 형식으로 해야한다. 객체 리터럴로 작성시 하단 에러
//property in component must be a function 
  data: function(){
    return {
      str : 'Header'
    }
  },
  components: {
      'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'hi!!!'
    }
  }
}
</script>

<style>

</style>