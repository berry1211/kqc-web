<template>
  <div id="information">
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
      msg_sub: 'Information'
    }
  },
  created: function(){
    document.title = 'インフォメーション | 会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#information{
  height: 800px;
}

a {
  color: #ffffff;
}
</style>
