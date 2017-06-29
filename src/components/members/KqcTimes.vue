<template>
  <div id="kqctimes">
    <h1>{{ msg_sub }}</h1>

    <div class="content-wrapper">
      <div class="main-content-wrapper">
        <div class="times-model-wrapper">
          <div class="times-title-wrapper">
            <h3>KQCTimes 6月号</h3>
            <p class="sub-title">〜総務特集〜</p>
          </div>
          <div class="content-summary-wrapper">
            <p>
              みなさまこんにちは。６月にはもう初心者の入会も終了し、指導も本格的になっている頃ですね。私は指導ができないので、特に用賀組の初心者とほとんど交流がないため、きっと名前を覚えてもらえていないと思います...
    　夏合宿の頃には、web担が誰なのかということを知ってもらえるように頑張って話しかけていきたいです！(コミュ力不足)
            </p>
          </div>
        </div>

        <div class="times-model-wrapper">
          <div class="times-title-wrapper">
            <h3>KQCTimes 5月号</h3>
            <p class="sub-title">〜日吉代表・臨時練習担当特集〜</p>
          </div>
          <div class="content-summary-wrapper">
            <p>
              みなさまこんにちは。新歓合宿、お疲れ様でした！
    　個人的にはすごく楽しかったです。１年生はいい子達ばかりで、２女さん感激です。
    　新入生が楽しんでくれていたらいいのですが、、、このままKQCの魅力を知って、入会してくれるといいですね！
    　これからひとりひとりともっと話すのが楽しみです。
    　初心者は、最初は練習がつまらないと感じるとは思いますが、しばらく頑張ってほしいですね。
    　夏合宿で初めて的前に立つ感動は忘れられません！！
    　それに、後から最初の基礎練習の大切さに気づきました。胴造りとか、私も一緒に教わりたいです。
            </p>
          </div>
        </div>

        <div class="times-model-wrapper">
          <div class="times-title-wrapper">
            <h3>KQCTimes 4月号</h3>
            <p class="sub-title">〜財務・外務特集〜</p>
          </div>
          <div class="content-summary-wrapper">
            <p>
              みなさまこんにちは。いつの間にか新年度が始まって呆然としている吉田です。
  　ついこの前自分が新歓されていたのに、もう後輩ができるんですね。早い...。
  　なにはともあれ、32期の新歓頑張りましょう！みんな入ってくれるといいなぁ。
  　それにビラ配りってすごく疲れるんですね、驚きましたよ。自分の運動不足を実感しました笑
  　体育ちゃんと予約して、運動不足を解消しなきゃいけませんね。
            </p>
          </div>
        </div>

      </div>

      <div class="sub-content-wrapper">

      </div>
    </div>

    <div id="space">

    </div>

  </div>
</template>

<script>
export default {
  name: 'kqctimes',
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
h1 {
  font-weight: normal;
  text-align: center;
  display: block;
  margin-bottom: 84px;
  margin-top: 84px;
}

@media screen and (max-width: 480px) {
  #kqctimes{
    height: 100%;
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
  #kqctimes{
    height: 100%;
  }

  .main-content-wrapper{
    float: left;
  }
  .times-model-wrapper{
    width: 700px;
    margin-left: 8px;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  h3{
    font-size: 32px;
    float: left;
  }
  .sub-title{
    font-size: 24px;
    display: inline-block;
    margin-left: 32px;
    line-height: 48px;
  }
  .content-summary-wrapper{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    clear: left;
  }


  .sub-content-wrapper{
    margin-left: 740px;
    width: auto;
    height: 200px;
    background: #e0e0e0;
  }

  /*スペースのコンポーネント*/
  #space{
    width: 100%;
    height: 1px;
    clear: left;
  }
}

a {
  color: #42b983;
}
</style>
