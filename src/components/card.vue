<template>
  <div class="container">
    <div class="row">

      <div class="col md-4">
        <div class="card text-center">

          <transition name="fade">
            <img v-if="visible" src="https://picsum.photos/id/1/320/200" class="card-img-top" alt="Picsum1">
          </transition>


          <div class="card-body">
            <h5 v-if="visible" class="card-title">Hide Image</h5>
            <h5 v-if="!visible" class="card-title">Show Image</h5>


            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>

            <button @click="visible = !visible" href="#" class="btn btn-primary">Toggle</button>
          </div>
        </div>
      </div>

      <div class="col md-4">
        <div class="card text-center">
          <img src="https://picsum.photos/id/2/320/200" class="card-img-top" alt="Picsum1">
          <div class="card-body">

              <h5 class="card-title">Text</h5>

            <transition name="bounce" mode="out-in">
              <p v-if="mostrar" class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </transition>

            <button @click="mostrar = !mostrar" href="#" class="btn btn-primary">Toggle</button>

          </div>
        </div>
      </div>

      <div class="col md-4">
        <div class="card text-center">
          <img src="https://picsum.photos/id/3/320/200" class="card-img-top" alt="Picsum1">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const visible = ref(true);
    const mostrar = ref(true);

    return {mostrar, visible};

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}


.bounce-enter-active {
  animation: bounce-in 0.25s;
}

.bounce-leave-active {
  animation: bounce-out 0.25s reverse;
}


@keyframes bounceIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }

}
</style>
