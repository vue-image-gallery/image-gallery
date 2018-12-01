<template>
<section>
    <div class="gallery">
        <div class="buttons">
            <button @click="setIndex(-1)">Previous</button>
            <button class="next" @click="setIndex(1)">Next</button>
        </div>
        <img :src="image.url">
        <p class="title">{{image.title}}</p>
        <p>{{image.description}}</p>
    </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0
    };
  },  
  props: {
    images: Array 
  },
  computed: {
    image() {
      return this.images[this.selectedIndex];
    }
  },
  methods: {
    setIndex(amt) {
      this.selectedIndex += amt;
      if(this.selectedIndex === this.images.length) {
        this.selectedIndex = 0;
      }
      else if(this.selectedIndex < 0) {
        this.selectedIndex = this.images.length - 1;
      }
    } 
  }
};
</script>

<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    list-style-type: none;
}

.gallery {
    justify-content: center;
    width: 500px;
}

.gallery img {
    width: 100%;
    height: 100%;
}

.buttons {
    justify-content: flex-end;
}

.title {
    font-size: 1.2em;
    font-weight: 600;
}

</style>
