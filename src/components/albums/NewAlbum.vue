<template>
    <form @submit.prevent="handleSubmit">
      <p>CREATE A NEW ALBUM:</p>
        Title: <input v-model="album.title">
        Description: <input v-model="album.description">
        <button>ADD</button>
    </form>

</template>

<script>
import albumsApi from '../../services/albumsApi';
export default {
  data() {
    return {
      album: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      const saved = albumsApi.add(this.album);
      this.$router.push(`/albums/${saved.id}`);
    }
  }
};
</script>

<style>

</style>
