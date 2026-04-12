<template>
    <div>
        <ul class="thumbnails">
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
                <p>{{image.description}}</p>
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
.thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 500px;
  list-style-type: none;
  margin: .75vw;
  padding: .95vw;
  min-height: 0;
  overflow:scroll;
  
}
.thumbnails h4 {
    background-color:#f7ffe0;
    color:#9f7e69;
    text-align: center;
    padding:10px;
}
.thumbnails img { 
  width: 100%; 
  height: auto; 
}
.thumbnails p {
    background-color:#f2efc7;
    color:#2c3e50;
    text-align: center;
    padding:10px;
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
