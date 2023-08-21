<template>
  <TheHeader></TheHeader>
    <div class="page-content">
      <TheMenu></TheMenu>
      <TheMain></TheMain>
    </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheMenu from './components/layout/TheMenu.vue';
import TheMain from './components/layout/TheMain.vue';
export default {
  name: 'App',
  components: {
    TheHeader,TheMenu,TheMain
  }
}
</script>

<style>
@import url(../src/css/main.css);
.page-content {
  display: flex;
}
</style>
