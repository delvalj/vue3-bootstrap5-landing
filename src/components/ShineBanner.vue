<template>
  <body>
  <h1> Get Up and Shine</h1>
  </body>
</template>

<script>
export default {
  name: "ShineBanner"
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

h1 {
  font-size: 50px;
  color: hsl(0, 0%, 20%);
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
  text-transform: uppercase;
  background: linear-gradient(to right,
  hsl(0, 0%, 30%) 0,
  hsl(0, 0%, 100%) 10%,
  hsl(0, 0%, 30%) 20%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 3s infinite linear;
  padding: 60px;

}

@keyframes shine {
   0%{
     background-position: 0;
   }

  60% {
    background-position: 600px;
  }

  100% {
    background-position: 600px;
  }
}
</style>