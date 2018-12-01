<template>
    <div>
        <h2>Image Albums</h2>
        <button @click="showModal = true">Add a new Album</button>
        <div v-if="showModal" class="modal">
              <div class="content">
                      <NewAlbum 
                          :onAdd="handleAlbumAdd"
                          :onClose="() => showModal = false"
                      />
              </div>
        </div>
        <AlbumList :albums="albums"/>
      </div>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';
import NewAlbum from './NewAlbum';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false
    };
  },
  components: {
    NewAlbum,
    AlbumList

  }
};
</script>

<style>

</style>
