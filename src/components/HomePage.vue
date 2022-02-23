<template>

  <Jumbotron></Jumbotron>
  <Carousel></Carousel>
  <cta></cta>


  <Card></Card>

</template>

<script>
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import cta from "@/components/cta";


export default {
  name: "HomePage",
  components: {
    Card,
    Carousel,
    cta,
  }
}
</script>

<style scoped>

</style>