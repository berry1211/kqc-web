<template>
  <div id="global-bar">
    <div class="global-bar-wrapper">
      <div class="global-bar-container">
        <router-link to="/intro" class="bar-content"><p>紹介</p></router-link>
        <router-link to="/schedule" class="bar-content"><p>予定</p></router-link>
        <router-link to="/contest-result" class="bar-content"><p>試合結果</p></router-link>
        <router-link to="/links" class="bar-content"><p>リンク</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'global-bar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  #global-bar{
    height: 96px;
    width: 100%;
    background: #535353;
  }
  .global-bar-wrapper{
    width: 100%;
    height: 96px;
    margin-left: auto;
    margin-right: auto;
  }
  .global-bar-container{
    width: 100%;
    height: inherit;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }
  .bar-content{
    width: 25%;
    font-size: 12px;
    line-height: 48px;
    text-decoration: none;
    float: left;
    text-align: center;
  }
  .bar-content :hover{
    background: #444444;
  }
  .bar-content p{
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: bold;
  }
}

@media screen and (min-width: 480px) {
  #global-bar{
    height: 48px;
    width: 100%;
    background: #535353;
  }
  .global-bar-wrapper{
    display: block;
    width: 400px;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
  }
  .global-bar-container{
    width: inherit;
    height: inherit;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }
  .bar-content{
    height: inherit;
    line-height: 48px;
    text-decoration: none;
    display: inline-block;
    float: left;
    text-align: center;
  }
  .bar-content :hover{
    background: #444444;
  }
  .bar-content p{
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: bold;
  }
}

a {
  color: #e0e0e0;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
