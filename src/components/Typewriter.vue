<template>
  <body>
    <h1>It was a gloomy, rainy day...</h1>
  </body>
  <SpoilerAlert></SpoilerAlert>

</template>

<script>
import SpoilerAlert from "@/components/SpoilerAlert";

export default {
  name: "TypeWritting",
  components: {SpoilerAlert}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital@0;1&display=swap');

body {
  padding: 0;
  margin-bottom: 0.5px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
}

h1 {
  font-family: "Anonymus Pro", monospace;
  font-size: 18px;
  color: hsl(0, 0%, 70%);
  font-weight: bold;
  letter-spacing: 7px;
  cursor: pointer;
  border-right: 2px solid hsl(0, 0%, 80%);
  animation: typewriter 5s steps(40) normal, blinkTextCursor 0.5s infinite;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 711px;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
}
</style>