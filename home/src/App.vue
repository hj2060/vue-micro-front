<template>
  <div>
    <div>
      <a @click="$app.$router('app1', '/about')">APP1</a> |
      <a @click="$app.$router('app2')">APP2</a>
    </div>
    <div id="app"></div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  @Component({
    components: {
      HelloWorld
    }
  })
  export default class extends Vue {
  }
</script>
