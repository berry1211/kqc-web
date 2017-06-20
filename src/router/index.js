import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Hello'
import Information from '@/components/members/Information'
import Rules from '@/components/members/Rules'
import ClubMembers from '@/components/members/ClubMember'

// 共通要素
import Footer from '@/components/common/Footer'

// グローバルメニュー(常に表示されているメニュー)要素
import Schedule from '@/components/menu/Schedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
          default: Hello,
          footer: Footer
      }
    },
    {
      path: '/members/information',
      name: 'Information',
      components: {
          default: Information,
          footer: Footer
      }
    },
    {
      path: '/members/rules',
      name: 'Rules',
      components: {
          default: Rules,
          footer: Footer
      }
    },
    {
      path: '/members',
      name: 'Members',
      components: {
          default: ClubMembers,
          footer: Footer
      }
    },
    {
      path: '/schedule',
      name: 'Schedule',
      components: {
          default: Schedule,
          footer: Footer

      }
    }
  ]
})
