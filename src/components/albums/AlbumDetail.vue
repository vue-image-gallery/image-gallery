<template>
    <section v-if="album">
    <nav>
      <p>CHOOSE A VIEW: 
      <RouterLink to="./thumbnail">THUMBNAIL</RouterLink>
      <RouterLink to="./list">LIST</RouterLink>
      <RouterLink to="./gallery">GALLERY</RouterLink>
      </p>
    </nav>
    <h2>{{album.title}}</h2>
    <p>{{album.description}}<p>
    <p>
      <button class="add" @click="showModal = true">ADD A NEW IMAGE</button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <AddImage 
            :onAdd="handleImageAdd"
            />
    </Modal>
    <RouterView :images="album.images">DEFAULT VIEW</RouterView>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AddImage from './images/AddImage';
import Modal from '../shared/Modal';

export default {
  data() {
    return {
      album: null,
      showModal: false
    };
  },

  components:{
    Modal,
    AddImage
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  },
  methods: {
    handleImageAdd(image) {
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
  }

  h2 {
    margin-bottom: 5px;
  }

  .add {
    margin-top: 30px;
  }
</style>
