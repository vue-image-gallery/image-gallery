<template>
    <div class="albums">
        <button @click="showModal = true">ADD A NEW ALBUM</button>
        <h2>Albums</h2>
        <Modal v-if="showModal" :onClose="() => showModal = false">
                      <NewAlbum />
        </Modal>
        <AlbumList :albums="albums"/>
      </div>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';
import NewAlbum from './NewAlbum';
import Modal from '../shared/Modal';


export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false
    };
  },
  components: {
    NewAlbum,
    AlbumList,
    Modal

  }
};
</script>

<style>

.albums {
    margin-left: 20px;
}

</style>
