<template>
    <div>
        <h3>I'm a ListView</h3>
        <ul class="list">
            <li
                v-for="(image, index) in images"
                :key="index" class="image-item">
                <div v-if="editingIndex === index">
                    <input v-model="editForm.title" placeholder="Title">
                    <input v-model="editForm.description" placeholder="Description">
                    <button @click="saveEdit(image)">SAVE</button>
                    <button @click="editingIndex = null">CANCEL</button>
                </div>
                <p>{{image.title}}</p>
                <img :src="image.url">
                <p>{{ image.description }}</p>
                <button @click="startEdit(index, image)">EDIT</button>
            </li>
        </ul>
        <p v-if="!images || images.length === 0">No images yet. Add one above!</p>
    </div>
</template>

<script>
export default {
  props: {
    images: Array 
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

</style>
