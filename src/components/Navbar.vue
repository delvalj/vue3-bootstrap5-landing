<template>
  <div class="fontFamily">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand"  to="/">BrandsName</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon botontoggle"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/impossible">Impossible Banner</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/typewriter">Typewriter</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/shine">GetUpAndShine</router-link>
            </li>
          </ul>

<!--          BUSCADOR SEARCH -->
<!--          <form class="d-flex">-->
<!--            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--            <button class="btn btn-outline-success" type="submit">Search</button>-->
<!--          </form>-->

        </div>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: 'Navbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap');

.fontFamily {
  font-family: Oswald;

}

</style>
