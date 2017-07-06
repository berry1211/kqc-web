# Description
これはKQC(慶應弓道同好会)の公式HPです。2017年に開発され、アップデートが続いています。

# For KQC Developer
HTMLやCSSはもちろん、Node.jsやVue.jsを理解しようとしているあなたは、このプロジェクトを触ってみるべきです。  
このサイトは主にVue.jsの仕組みの上に成り立っており、Single Page Application(SPA)として構成されています。  

もし、主なデザインを修正しようとする場合には、該当のコンポーネント内のHTML,CSSを編集してください。  
コンポーネントは、src/componentsに実装されています。

また、基本となるルーティングの実装は、src/router/index.jsに実装されています。  
コンポーネントの取扱いについては、index.js内のコメントを参照してください。

このプロジェクトでは、独自APIを使用することでデータベースとのやり取りをしています。  
APIの仕様に関しては、https://github.com/HALU5071/kqc-api のREADMEを参照してください。

ローカル環境で試す際にはNode,Npmを導入した後に、以下のコマンドを実行してください。  
`npm install`  
`npm run dev`  

なお、本番環境へデプロイする際には、  
`npm run build`  
を実行した後に、生成される/distフォルダをpushしてください。その際には、git subtreeコマンドを使用してください。  
以下のサイトを参考にすると良いです  
http://heimusu.hatenablog.com/entry/2017/02/27/220000

# Dependencies of Packages
このNode.jsプロジェクトでは、以下のPackagesを利用しています。

- vue >= 2.3.3
- vue-router >= 2.3.1
- axios

# Change Log
## Release 1.0.0
KQCサイトのメイン機能をリリースしました。

# License
This web site is created by Ha10(Yasunori Horii).  
Copyright (c) 2017 Ha10. All Rights Reserved.

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
