<template>
  <div id="develper">
    <div class="developer-wrapper">
      <div class="develop-history-wrapper">
        <h1>開発履歴</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kqctimes',
  data () {
    return {
      this_year: '2017年',
      kqctimes_list: []
    }
  },
  created: function(){
    document.title = 'For Developer | KQC会員用'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 480px) {
  #kqctimes{
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 32px;
    left: 396px;
    font-weight: normal;
    text-align: center;
    display: block;
  }
  .times-model-wrapper{
    width: 360px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  h3{
    font-size: 24px;
    float: left;
  }
  .sub-title{
    font-size: 20px;
    display: inline-block;
    margin-left: 32px;
    line-height: 36px;
  }
  .content-summary-wrapper{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    clear: left;
    font-size: 14px;
  }
}

@media screen and (min-width: 480px) {
  #developer{
    height: auto;
    width: 960px;
  }
  h1 {
    font-weight: normal;
  }


  /*スペースのコンポーネント*/
  #space{
    width: 100%;
    height: 1px;
    clear: left;
  }
}

a {
}
a :hover{
  text-decoration: underline;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
