<template>
  <div class="conteiner">
    <Navbar></Navbar>
    <!--    <router-link class="router-link" to="/">Card</router-link>-->
    <!--    <router-link class="router-link" to="/about">About</router-link>-->
    <!--    <router-link class="router-link" to="/cta">Cta</router-link>-->
    <!--    <router-link class="router-link" to="/carousel">Carousel</router-link>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>


</style>
