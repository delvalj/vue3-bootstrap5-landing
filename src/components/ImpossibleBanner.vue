<template>
  <body>
    <h1><span>I</span>M<span>POSSIBLE</span></h1>
  </body>
</template>

<script>
export default {
  name: "ImpossibleBanner"
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
  min-height: 120vh;

}

h1 {
  font-size: 50px;
  color: hsl(0,0%, 20%);
  font-weight: bold;
  font-family: monospace;
  letter-spacing:7px;
  cursor: pointer;
}

h1:hover span:nth-child(1) {
  margin-right: 15px;
}

h1:hover span:nth-child(1):after {
  content: "'";
}

h1:hover span:nth-child(2) {
  margin-left: 30px;
}

h1:hover, h1:hover span {
  color: hsl(0,0%, 100%);
  text-shadow: 0 0 10px hsl(0, 0% , 100%), 0 0 20px hsl(0, 0%, 80%), 0 0 40px hsl(0, 0%, 100%) ;
}

h1 span {
  transition: 0.5s ease-out;
}

</style>