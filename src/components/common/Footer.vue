<template>
  <div id="footer">
    <div class="copy-right-wrapper">
      <p class="copy-right">
        Copyright (c) 2017 Ha10 ( Yasunori Horii ). All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
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
@media screen and (max-width : 480px) {
  #footer{
    height: 80px;
    width: 100%;
    background: #424242;
  }

  .copy-right-wrapper{
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }
  .copy-right{
    padding-top: 36px;
    color: #ffffff;
    font-size: 10px;
    text-align: center;
    display: inline-block;
  }

}

@media screen and (min-width:765px) {
  #footer{
    height: 120px;
    width: 100%;
    background: #424242;
  }

  .copy-right-wrapper{
    width: 440px;
    margin-left: auto;
    margin-right: auto;
  }
  .copy-right{
    padding-top: 24px;
    color: #ffffff;
    font-size: 16px;
    display: inline-block;
  }
}

a {
  color: #42b983;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
