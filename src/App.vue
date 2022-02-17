<template>
  <Navbar msg="This is the Navbar from Bootstrap 5"/>
  <Carousel></Carousel>
  <cta></cta>
  <card></card>
  <jumbotron></jumbotron>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import cta from './components/cta.vue'
import card from "@/components/card";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";


export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    cta,
    card,
    Footer,
    Carousel
  }
}
</script>

<style>

</style>
