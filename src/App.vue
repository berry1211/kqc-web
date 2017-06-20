<!--
ここではサイトの全体要素を決定しています。

router-viewタグで記述される要素には、index.jsで決定されるcomponentが挿入されます。
また、router-viewは以下のルールに従います

========== RULES ==========

- router-viewタグ内に、name要素がない場合
name要素は自動的に name="default" が挿入され、index.jsのルーティングの際にdefaultで指定したコンポーネントが挿入されます。

- router-viewタグ内に、name要素が存在する場合
index.jsのルーティングの際に、ここでname要素が指定したコンポーネントが挿入されます。

===========================
-->

<template>
  <div id="app">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="global-bar">
      <router-view name="bar"></router-view>
    </div>
    <div id="main_contents">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main_contents{
  margin-top: 32px;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}

*{
  margin: 0px;
  padding: 0px;
}
</style>
