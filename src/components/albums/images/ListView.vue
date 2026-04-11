<template>
    <div>
        <h3>I'm a ListView</h3>
        <ul class="list">
            <li
                v-for="(image, index) in images"
                :key="index" class="image-item">
                <p>{{image.title}}</p>
                <img :src="image.url">
                <p>{{ image.description }}</p>
            </li>
        </ul>
        <p v-if="!images || images.length === 0">No images yet. Add one above!</p>
    </div>
</template>

<script>
export default {
  props: {
    images: Array 
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
