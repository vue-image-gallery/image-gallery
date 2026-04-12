<template>
    <div>
        <h3>I'm a ListView</h3>
        <ul class="list">
            <li
                v-for="(image, index) in images"
                :key="index" class="image-item">
                <img :src="image.url">
                <div v-if="editingIndex === index">
                    <input v-model="editForm.title" placeholder="Title">
                    <input v-model="editForm.description" placeholder="Description">
                    <button class="btn-save" @click="saveEdit(image)">SAVE</button>
                    <button class="btn-cancel" @click="editingIndex = null">CANCEL</button>
                </div>
                <div v-else>
                <p>{{image.title}}</p>
                <p>{{ image.description }}</p>
                <button class="btn-edit" @click="startEdit(index, image)">EDIT</button>
                </div>
            </li>
        </ul>
        <p v-if="!images || images.length === 0">No images yet. Add one above!</p>
    </div>
</template>

<script>
export default {
  props: {
    images: Array, 
    album:Object
  },
  data() {
    return {
      editingIndex: null,
      editForm: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    startEdit(index, image) {
      this.editingIndex = index;
      this.editForm.title = image.title;
      this.editForm.description = image.description;
    },
    saveEdit(image) {
      image.title = this.editForm.title;
      image.description = this.editForm.description;
      albumsApi.updateImage(this.album, image);
      this.editingIndex = null;
    }
  }
};
</script>

<style>

ul {
    list-style-type: none;
}
.image-item {
    margin-bottom: 40px;
}

.image-item img {
    width: 100%;
    max-width: 600px;
    display: block;
}
.btn-edit{width:80px}
.btn-save{}
.btn-cancel{}

</style>
