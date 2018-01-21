<template>
  <div class="about container">
    <h1 class="page-header">About</h1>
    <p>Tis is a Customer app built with vue js</p>
    <p>Version: 1.0.0</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      aboutmsg: 'This is about'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
    margin-top: 70px;
  }
</style>
