<template>
  <div id="kqctimes">
    <div id="kqctimes-container">
      <div class="cover-image-wrapper">
        <div class="cover-image-container">
          <img src="../../assets/newspaper.png" class="cover-image"/>
          <h1>{{ msg_sub }}</h1>
          <h1 class="sub-h1">{{ msg_sub1 }}</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="main-content-wrapper">
          <h2>{{ this_year }}</h2>

          <div class="times-model-wrapper">
            <div class="times-title-wrapper">
              <router-link to="/members/kqc-times/detail" class="kqctimes-list-item"><h3>{{ }}</h3></router-link>
              <p class="sub-title">〜総務特集〜</p>
              <p class="sub-status">New!!</p>
            </div>
            <div class="content-summary-wrapper">
              <p>{{  }}</p>
            </div>
          </div>

          <!--
          <div class="times-model-wrapper">
            <div class="times-title-wrapper">
              <router-link to="/members/kqc-times/detail" class="kqctimes-list-item"><h3>KQC Times 6月号</h3></router-link>
              <p class="sub-title">〜総務特集〜</p>
              <p class="sub-status">New!!</p>
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
              <h3>KQC Times 5月号</h3>
              <p class="sub-title">〜日吉代表・臨時練習担当特集〜</p>
              <p class="sub-status">New!!</p>
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
              <h3>KQC Times 4月号</h3>
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

          <div class="times-model-wrapper">
            <div class="times-title-wrapper">
              <h3>KQC Times 3月号</h3>
              <p class="sub-title">〜連合特集〜</p>
            </div>
            <div class="content-summary-wrapper">
              <p>
                皆様こんにちは。
　早いもので、2016年度も最後の月に突入してしまいましたね。
　もうすぐ次の１年生が入学し、私たちの華の１女も終わり、徐々にひどくなってきた扱いがさらに悪化するのかと思うと非常に残念です。笑
　バリューが無くなっていくのは悲しいことですが、いじられる方が距離が近づいたように感じて
　「これはこれで嬉しい！」と考えている吉田です。適応能力、大事。
              </p>
            </div>
          </div>

          <div class="times-model-wrapper">
            <div class="times-title-wrapper">
              <h3>KQC Times 2月号</h3>
              <p class="sub-title">〜財務・外務特集〜</p>
            </div>
            <div class="content-summary-wrapper">
              <p>
                皆様初めまして。KQC31期内務となりました吉田菜々帆です。KQCのホームページ、そしてこのKQC Timesを担当させて頂きます。
  これから１年間、東・高倉と力を合わせて頑張っていきたいと思います。至らない点もありますが、温かい目で見守っていただけると幸いです、、、
              </p>
            </div>
          </div>

          <div class="times-model-wrapper">
            <div class="times-title-wrapper">
              <h3>KQC Times 1月号</h3>
              <p class="sub-title">〜財務・外務特集ぅぅぅぅぅぅぅぅうぅぅぅぅぅぅぅぅ〜</p>
            </div>
            <div class="content-summary-wrapper">
              <p>
                みなさま新年あけましておめでとうございます。本年もよろしくお願い申し上げますm(__)m
                はい、ということでみなさん、こんにちは（笑）
                なんとなんと年が明けて、2017年となってしまいました。いやあ、早いなあ。
                この調子だと2020年の東京オリンピックもすぐですね（笑）
              </p>
            </div>
          </div>
        -->

        </div>

        <div class="sub-content-wrapper">
          <div class="title-wrapper">
            <h3 class="sub-content-title">アーカイブ</h3>
          </div>
        </div>

        <div id="space">

        </div>
      </div>
    </div>



  </div>
</template>

<script>
import Vue from 'vue';
import store from '../../store'

var instance = new Vue({
  data: {
    kqctimeslist: []
  }
})
export default {
  name: 'kqctimes',
  data () {
    return {
      msg: 'Welcome to KQC',
      msg_sub: 'KQC Times',
      msg_sub1: '練習・合宿・コンパなどの情報をお伝えします',
      this_year: '2017年',
      kqctimeslist: []
    }
  },
  created: function(){
    document.title = 'KQCTimes | KQC会員用'
  },

  created: function (){
    axios.get('https://api-kqc.herokuapp.com/kqc-times')
      .then(function (response) {
        instance.$data.kqctimeslist = response.data;
        console.log('kqctimeslist: ',instance.$data.kqctimeslist);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
  #kqctimes{
    height: auto;
  }
  h1 {
    position: absolute;
    font-size: 48px;
    top: 40%;
    left: 40%;
    font-weight: normal;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  .sub-h1{
    position: absolute;
    font-size: 16px;
    top: 60%;
    left: 37%;
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
  #kqctimes-container{
    height: 100%;
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
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    margin-bottom: 32px;
  }
  .main-content-wrapper{
    height: 100%;
    float: left;
  }
  .times-model-wrapper{
    width: 700px;
    margin-left: 8px;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .kqctimes-list-item{
    color: inherit;
  }
  h3{
    font-size: 32px;
    float: left;
    font-weight: normal;
  }
  .sub-title{
    font-size: 20px;
    display: inline-block;
    margin-left: 32px;
    line-height: 48px;
    float: left;
  }
  .sub-status{
    font-size: 20px;
    display: inline-block;
    color: #E91E63;
    margin-left: 32px;
    line-height: 48px;
    float: left;
  }
  .sub-status{
    font-size: 20px;
    display: inline-block;
    color: #E91E63;
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
  .content-summary-wrapper p{
    font-size: 16px;
  }

  .sub-content-wrapper{
    margin-left: 740px;
    margin-top: 32px;
    width: auto;
    height: 100px;
    background: #e0e0e0;
  }

  .title-wrapper{
    margin-left: 12px;
    margin-top: 12px;
  }
  .sub-content-title{
    font-size: 16px;
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
