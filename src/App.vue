<template>
  <Navbar msg="This is the Navbar from Bootstrap 5"/>
  <jumbotron></jumbotron>
  <cta></cta>
  <card></card>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import cta from './components/cta.vue'
import card from "@/components/card";



export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    cta,
    card
  }
}
</script>

<style>

</style>
