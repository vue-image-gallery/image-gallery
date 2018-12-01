<template>
    <div>
        <ul>
            <li
                v-for="(image, index) in images"
                :key="index">
                <h4>{{image.title}}</h4>
                <p>
                    <img :src="image.url">
                </p>
                <p>{{image.description}}</p>
            </li>
        </ul>
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

</style>
