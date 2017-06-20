<template>
  <div id="information">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
    <router-link to='/members/information'>インフォメーション</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Club Mmebers Only'
    }
  },
  created: function(){
      document.title = '会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
