import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Hello'

// 会員要
import Information from '@/components/members/Information'
import Rules from '@/components/members/Rules'
import KqcTimes from '@/components/members/KqcTimes'

// 共通要素
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import GlobalBar from '@/components/common/GlobalBar'

// グローバルメニュー(常に表示されているメニュー)要素
import Schedule from '@/components/menu/Schedule'
import Intro from '@/components/menu/Introduction'
import ClubMembers from '@/components/members/ClubMember'
import Links from '@/components/menu/Links'
import ContestResult from '@/components/menu/ContestResult'

Vue.use(Router)

/** ここではルーティングを行っています
*   path: 実際にアクセスされるときの相対パス
*   name: 名前。割りと適当に決めているが、importしたときと同じ名前のほうがわかりやすい
*   components: その画面内にどんなコンポーネントがあるかを示している。たとえば、どの画面にもフッターは存在するので、
*               どのcomponentsにもフッターは記述されている。
*
*   ========== ATTENTION ==========
*   componentsに記述される要素は、以下のルールに従います
*
*       component-name: imported-name
*
*   component-name : App.vueなどの親要素において、router-viewタグのnameで指定された名前
*   imported-name  : このindex.jsなどでimportされた際に決めた名前
*
*   ===============================
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/members/information',
      name: 'Information',
      components: {
        default: Information,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/members/rules',
      name: 'Rules',
      components: {
        default: Rules,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/members/kqc-times',
      name: 'KQCTimes',
      components: {
        default: KqcTimes,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/members',
      name: 'Members',
      components: {
        default: ClubMembers,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/schedule',
      name: 'Schedule',
      components: {
        default: Schedule,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/intro',
      name: 'Introduction',
      components: {
        default: Intro,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/links',
      name: 'Links',
      components: {
        default: Links,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    },
    {
      path: '/contest-result',
      name: 'ContestResult',
      components: {
        default: ContestResult,
        footer: Footer,
        header: Header,
        bar: GlobalBar
      }
    }
  ]
})
