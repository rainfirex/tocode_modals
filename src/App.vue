<template>
  <div class="wrapper">

    <!--<header></header>-->

    <navMenu :navs="navs"/>

    <router-view></router-view>

    <!--<footer></footer>-->

  </div>
</template>

<script>
    import navMenu from './components/NavMenu'

   export default {

       name: 'Application',

       components: { navMenu },

       data() {
          return {

              navs: [
                  {title: 'Home', path: '/'},
                  {title: 'Modals window', path: '/modals'},
                  {title: 'Home work', path: '/home-work'},
                  {title: 'About', path: '/about'}
              ]

          }
       }

   }
</script>
