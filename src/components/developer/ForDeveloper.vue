<template>
  <div id="develper">
    <div class="developer-wrapper">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/developer.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div id="main-content-wrapper">
          <h2>お知らせ</h2>
          <div class="list-wrapper">
            <ul>
              <li>
                <div class="list-container">
                  <h3>KQCWeb正式版 リリースいたしました！</h3>
                  <p class="date-announced">
                    2017年7月24日
                  </p>
                  <p class="history-content-wrapper">
                    いつもご利用ありがとうございます！KQCWeb開発担当、31期の堀井です。この度、KQCWeb正式版をリリースいたしました！
                    開発にご協力いただいた皆、ありがとう！
                  </p>
                </div>

                <div class="list-container">
                  <h3>KQCWeb正式版 リリースいたしました！</h3>
                  <p class="date-announced">
                    2017年7月24日
                  </p>
                  <p class="history-content-wrapper">
                    いつもご利用ありがとうございます！KQCWeb開発担当、31期の堀井です。この度、KQCWeb正式版をリリースいたしました！
                    開発にご協力いただいた皆、ありがとう！
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div id="space">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kqctimes',
  data () {
    return {
      msg_sub: 'Dear All KQC members!!',
      msg_sub1: '開発担当よりお知らせ',
      this_year: '2017年',
      kqctimes_list: []
    }
  },
  created: function(){
    document.title = 'Dear KQC members | KQC会員用'
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
  }
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 30%;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  .cover-image-wrapper{
    width: 100%;
    height: 292px;
  }
  .cover-image-container{
    width: 100%;
    height: 292px;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
  }
  .cover-image{
    display: block;
    position: absolute;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
  }
  .content-wrapper{
    position: relative;
    height: 100%;
    width: 764px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    margin-bottom: 32px;
  }
  #main-content-wrapper{
    width: 100%;
    height: 100%;
    float: left;
  }
  #developer-wrapper{
    height: 100%;
  }
  .list-wrapper{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .list-container{
    width: auto;
    margin-left: 8px;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  h1 {
    font-weight: normal;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 60%;
    left: 44%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  h2 {
    font-size: 32px;
    font-weight: normal;
    margin-left: 12px;
  }

  h3{
    font-weight: bold;
    font-size: 24px;
  }
  li{
    list-style: none;
  }
  .history-content-wrapper{
    margin-top: 16px;
    margin-left: 16px;
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
