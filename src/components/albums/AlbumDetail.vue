<template>
    <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true">Add a new Image</button>
    </p>
    <div v-if="showModal" class="modal">
      <div class="content">
        <AddImage 
            :onAdd="handleImageAdd"
            :onClose="() => showModal = false"
        />
      </div>

    </div>
    <RouterLink to="./thumbnail">Thumbnail</RouterLink>
    <RouterView :images="album.images">DEFAULT VIEW</RouterView>
    <!-- <ThumbnailView
    :images="album.images" /> -->
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
// import ThumbnailView from './images/ThumbnailView';
import AddImage from './images/AddImage';

export default {
  data() {
    return {
      album: null,
      showModal: false
    };
  },

  components:{
    // ThumbnailView,
    AddImage
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  },
  methods: {
    handleImageAdd(image) {
      console.log('the album is ', this.album);
      albumsApi.addImage(image, this.album);
      this.showModal = false;
    }
  }
};
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .6); 
  }
  .content {
    background: white;
    padding: 50px;
  }
</style>
