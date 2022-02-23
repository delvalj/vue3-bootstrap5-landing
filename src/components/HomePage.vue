<template>
  <div class="colorfondo">
    <Carousel></Carousel>
    <cta></cta>
    <Card></Card>
  </div>
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
.colorfondo {

  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(214, 214, 214, 0.7990546560421043) 100%);
}
</style>