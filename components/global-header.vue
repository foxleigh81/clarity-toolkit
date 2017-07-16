<template lang="html">
  <header class="c-global-header">
    <h1>By golly this is the site header! {{ store.state.count }}</h1>
  </header>
</template>

<script>
  import Vuex from 'vuex'

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  export default store
</script>

