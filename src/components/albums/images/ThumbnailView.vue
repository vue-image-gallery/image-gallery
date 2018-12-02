<template>
    <div>
        <ul class="thumbnails">
            <li
                v-for="(image, index) in images"
                :key="index">
                <h4>{{image.title}}</h4>
                <img :src="image.url">
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
ul h4 {
    background-color:#f7ffe0;
    color:#9f7e69;
    text-align: center;
    padding:10px;
}
ul img { 
  width: 100%; 
  height: auto; 
}
ul p {
    background-color:#f2efc7;
    color:#2c3e50;
    text-align: center;
    padding:10px;
}
  
  

</style>
