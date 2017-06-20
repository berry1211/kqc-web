<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Schedule'
    }
  },
  created: function(){
      document.title = '予定 | KQC'
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

a {
  color: #424242;
}

body{
    margin: 0px;
    padding: 0px;
}
</style>
