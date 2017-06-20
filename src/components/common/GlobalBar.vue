<template>
  <div id="global-bar">
    <div class="global-bar-wrapper">
      <router-link to="/intro" class="bar-content"><p>紹介</p></router-link>
      <router-link to="/schedule" class="bar-content"><p>予定</p></router-link>
      <router-link to="/members" class="bar-content"><p>試合結果</p></router-link>
      <router-link to="/members" class="bar-content"><p>会員専用</p></router-link>
      <router-link to="/members" class="bar-content"><p>会員専用</p></router-link>
      <router-link to="/members" class="bar-content"><p>リンク</p></router-link>
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

#global-bar{
  height: 48px;
  width: 100%;
  background: #535353;
}
.global-bar-wrapper{
  width: 480px;
  height: inherit;
  margin-left: auto;
  margin-right: auto;
}
.bar-content{
  width: 80px;
  height: inherit;
  line-height: 48px;
  text-decoration: none;
  display: block;
  float: left;
  text-align: center;
}
.bar-content :hover{
  background: #444444;
}
.bar-content p{
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
}

a {
  color: #e0e0e0;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
