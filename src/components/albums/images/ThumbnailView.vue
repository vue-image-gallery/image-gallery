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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 400px;
  list-style-type: none;
  margin: .75vw;
  padding: .95vw;
  min-height: 0;
  overflow:hidden;
  
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
  
  

</style>
