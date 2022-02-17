<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="bg-dark text-white my-5 py-4 text-center card">

          <div class="card-body">
            <transition name="mover" mode="out-in">
              <i class="quoteText" v-if="mover">
                {{ quote }}
              </i>

              <i  class="quoteText" v-else>
                {{ quote2 }}
              </i>

            </transition>

            <p class="smallTitle"> --Kanye West-- </p>
            <button class="btn btn-light p-2" @click="mover = !mover; yeKnowledge">Get Knowledge</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'

export default {
  name: 'cta',
  setup() {

    const yeKnowledge = axios.get('https://api.kanye.rest')
        .then(response => {
          // handle response
          quote.value = response.data.quote;

        })

    axios.get('https://api.kanye.rest')
        .then(response => {
          // handle response
          quote2.value = response.data.quote;

        })

    const quote = ref(true);
    const quote2 = ref(true);


    const mover = ref(false);
    return {
      mover, quote , quote2 , yeKnowledge
    }
  }

}
</script>

<style scoped>

.smallTitle {
  padding: 40px 10px 10px 10px;
  font-size: 15px;
}

.quoteText {
  padding: 30px;
  font-size: 25px;
}


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
