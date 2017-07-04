<template>
  <div id="create-kqctimes">

  </div>
</template>

<script>
export default {
  name: 'create-kqctimes',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Rules'
    }
  },
  created: function(){
    document.title = 'KQC Timsを作成 | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#create-kqctimes{
  height: 800px;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}
a {
  color: #42b983;
}
</style>
