<template>
  <div id="create-kqctimes">
    <div id="create-wrapper">
      <h1>{{ message }}</h1>
      <form>
        <input type="text" placeholder="タイトルを入力してください" class="title-input"/>
        <input type="text" placeholder="サブタイトルを入力してください" class="sub-title-input"/>
        <textarea name="content" class="content-textarea"></textarea>
      </form>
    </div>

    <div class="submit-kqctimes" v-on:click="submit">
      <p class="submit-value">投稿</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'create-kqctimes',
  data () {
    return {
      'message': 'KQC Timesを作成'
    }
  },
  created: function(){
    document.title = 'KQC Timsを作成 | KQC会員用'
  },
  methods: {
    submit: function (event){
      console.log("Hello, Submit");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#create-kqctimes{
  height: 100%;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}
#create-wrapper{
  margin-top: 32px;
}
.title-input{
  width: 800px;
  height: 48px;
  font-size: 32px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  color: #616161;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 24px;
  margin-bottom: 4px;
}
.title-input::-webkit-input-placeholder{
  color: #bdbdbd;
}
.sub-title-input{
  width: 400px;
  height: 36px;
  font-size: 20px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  clear: left;
}
.sub-title-input::-webkit-input-placeholder{
  color: #bdbdbd;
}
.submit-kqctimes{
  width: 200px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  background: #2196F3;
  border-radius: 4px;
  border: solid 1px #fff;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.content-textarea{
  width: 100%;
  height: 600px;
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  font-size: 16px;
  margin-top: 4px;
  padding: 8px;
}
.submit-value{
  text-align: center;
  line-height: 48px;
}
.submit-kqctimes :hover{
  width: 200px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  background: #1E88E5;
  border-radius: 4px;
  border: solid 1px #fff;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.submit-value:hover{
  text-align: center;
  line-height: 48px;
}
a {
  color: #42b983;
}
</style>
