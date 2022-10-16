<template>
  <h1>Страница постов</h1>
</template>
<script>
export default {
  mounted(){
    console.log(`Постов страница`)
    for(let elem in this.$store.state.pageActive){
      this.$store.state.pageActive[elem] = false
    }
    this.$store.state.pageActive.posts = true;
  }
}
</script>