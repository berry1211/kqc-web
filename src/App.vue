<template>
  <div id="app">
      <div id="main_contents">
          <router-view></router-view>
      </div>
    <div class="footer">
        <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
    margin: 0px;
    padding: 0px;
}
</style>
