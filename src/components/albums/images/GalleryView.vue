<template>
<section>
    <div v-if="images && images.length > 0">
         <div class="gallery-grid">
            <div 
                v-for="(image, index) in images" 
                :key="index"
                class="gallery-item"
                @click="openLightbox(index)">
                <img :src="image.url" :alt="image.title">
                <p class="title">{{ image.title }}</p>
            </div>
        </div>
        <CoolLightBox
          :items="lightboxImages"
          :index="lightboxIndex"
          :gallery="true"
          :slideshow="false"
          effect="fade"
          thumbsPosition="top"
          @close="lightboxIndex = null">
        </CoolLightBox>
    </div>
    <p v-else>No images yet. Add one above!</p>
</section>
</template>

<script>

import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  components: {
    CoolLightBox
  },
  data() {
    return {
      lightboxIndex: null
    };
  },  
  props: {
    images: Array 
  },
  computed: {
    lightboxImages() {
      return this.images.map(image => ({
        src: image.url,
         thumb: image.url,
        title: image.title,
        description: image.description
      }));
    }
  },
  methods: {
    openLightbox(index) {
      this.lightboxIndex = index;
    }
  }
};
</script>

<style>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
    padding: 20px;
}

.gallery-item {
    cursor: pointer;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.2s;
}

.gallery-item:hover img {
    transform: scale(1.05);
}


.title {
    font-size: 1.2em;
    font-weight: 600;
}

</style>
