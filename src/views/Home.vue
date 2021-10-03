<template>
  <div v-if="error" class="error">Please login first to see all the playlists.</div>
  <div v-if="documents">
    <ListView :playlists="documents" />
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import ListView from '../components/ListView.vue';

export default {
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('playlists');

    return { error, documents };
  },
};
</script>

<style></style>
