<template>
  <div id="hunting-job">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
  </div>
</template>

<script>
export default {
  name: 'huntingjob',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'KQC Times'
    }
  },
  created: function(){
    document.title = 'KQCTimes | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  #hunting-job{
    height: 800px;
  }
}
#hunting-job{
  height: 800px;
}
a {
  color: #42b983;
}
</style>
