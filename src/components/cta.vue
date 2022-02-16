<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="bg-secondary text-white my-5 py-4 text-center card">

          <div class="card-body">
            <transition name="mover" mode="out-in">
              <p v-if="mover">
                This is Call To Action Card is a great place to showcase some important
                information or display a clever tagline!
              </p>
              <p v-else>
                This is Call To Action Card is a great place to showcase some important
                information or display a clever tagline
              </p>
            </transition>
            <button @click="mover = !mover"></button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'cta',
  setup() {
    const mover = ref(false);
    return {
      mover
    }
  }

}
</script>

<style scoped>

.mover-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}

.mover-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.mover-enter-active,
.mover-leave-active {
  transition: all 1s ease;
}


</style>
