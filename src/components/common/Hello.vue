<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
    <router-link to="/members">会員専用</router-link>
    <router-link to="/schedule">予定</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'This is a WebSite for KQC'
    }
  },
  created: function(){
      document.title = 'KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#hello{
    height: 800px;
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
