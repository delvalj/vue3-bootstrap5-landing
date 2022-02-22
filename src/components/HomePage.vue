<template>
  <p>HOLA</p>
  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nisi, repellat. Asperiores beatae eveniet ipsa
    nihil porro quibusdam sit ut, veritatis. Cum delectus deleniti facilis nulla!</h3>
  <Card></Card>
  <ImpossibleBanner></ImpossibleBanner>

</template>

<script>
import Card from "@/components/Card";
import ImpossibleBanner from "@/components/ImpossibleBanner";

export default {
  name: "HomePage",
  components: {
    Card,
    ImpossibleBanner
  }
}
</script>

<style scoped>

</style>