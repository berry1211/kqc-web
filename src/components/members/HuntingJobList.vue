<template>
  <div id="hunting-job-list">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
    <router-link to="/members/hunting-job-detail">詳細</router-link>
  </div>
</template>

<script>
export default {
  name: 'huntingjob',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'Hunting Job List'
    }
  },
  created: function(){
    document.title = '就活情報 | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  #hunting-job-list{
    height: 800px;
  }
}
#hunting-job-list{
  height: 800px;
}
a {
  color: #42b983;
}
</style>
