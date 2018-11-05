<template>
  <div class="home">
    <h1>APP2的主页</h1>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {Vue, VuePropertyDecorator} from 'vendor';
const {Component} = VuePropertyDecorator
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
  h1{
    color:red;
  }
</style>
