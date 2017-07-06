<template>
  <div id="club-members">
    <h1>{{ msg }}</h1>
    <h2>{{ msg_sub }}</h2>
    <router-link to='/members/information' class="member-link">インフォメーション</router-link>
    <router-link to='/members/rules' class="member-link">規約</router-link>
    <router-link to='/members/kqc-times' class="member-link">KQCTimes</router-link>
    <router-link to='/members/hunting-job-list' class="member-link">就活情報</router-link>
    <router-link to='/developer' class="member-link">開発担当よりお知らせ</router-link>
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
    document.title = '会員用 | KQC'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 480px) {
  h1, h2 {
    font-weight: normal;
    margin-left: 10px;
  }

  #club-members{
    height: 800px;
  }

  .member-link :hover{
  }
}

@media screen and (min-width: 480px) {
  h1, h2 {
    font-weight: normal;
  }

  #club-members{
    height: 800px;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  .member-link :hover{
  }
}

#club-members{
  height: 800px;
}

.member-link :hover{
}
a {
  color: #424242;
}

</style>
