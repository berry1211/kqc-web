<template>
  <div id="header">
    <div class="header-content-wrapper">
      <div class="logo-wrapper">
        <img src="../../assets/kqc.png" height="36px"/>
      </div>
      <div class="login-button-wrapper">
        <router-link to="/members" class="header-login">ログイン</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  .header-login{
    width: 100px;
    margin-right: 0px;
    margin-left: auto;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  .header-content-wrapper{
  }
  .login-button-wrapper{
    width: 80px;
    height: inherit;
    margin-left: auto;
    margin-right: 0px;
    line-height: 60px;
  }
  #header{
    height: 60px;
    width: 100%;
    background: #424242;
  }
}

@media screen and (min-width: 480px) {
  .header-content-wrapper{
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  .logo-wrapper{
    line-height: 36px;
    padding: 12px;
    float: left;
  }
  .header-login{
    width: 120px;
    margin-right: 0px;
    margin-left: auto;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  .login-button-wrapper{
    width: 100px;
    margin-left: auto;
    line-height: 60px;
  }
  #header{
    height: 60px;
    width: 100%;
    background: #424242;
  }
}
#header{
  height: 60px;
  width: 100%;
  background: #424242;
}

a {
  color: #42b983;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
