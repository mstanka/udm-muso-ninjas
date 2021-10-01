<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 20px;
}
</style>
