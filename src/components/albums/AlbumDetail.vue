<template>
    <section v-if="album">
    <nav class="navigation">
      <p>Choose a view: 
      <RouterLink to="./thumbnail">Thumbnail</RouterLink>
      <RouterLink to="./list">List</RouterLink>
      <RouterLink to="./gallery">Gallery</RouterLink>
      </p>
    </nav>
    <h2 class="album-title">{{album.title}}</h2>
    <p>{{album.description}}<p>
    <p>
      <button class="add" @click="showModal = true">Add a new Image</button>
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

<style lang="postcss" scoped>
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

  .album-title {
    margin-bottom: 5px;
  }

  .add {
    margin-top: 30px;
  }

  .navigation {
      a {
        color: #EAEFD3;
        text-decoration: none;
        padding: 0px 30px;
        } 

        a:hover {
        color: #505168;
        } 
  }
</style>
