<template lang="html">
  <div>
    <global-header></global-header>
      <h1>Error: {{error}}</h1>
      <p>Welcome to the {{error}} error page. You didn't want to come here, did you?</p>
    <global-footer></global-footer>
  </div>
</template>

<script>
  export default {
      data: function() {
          return {
          }
      }
  }
</script>
