<template>
<form id="image-modal"  @submit.prevent="onAdd(image)">
  <p>Add AN IMAGE TO THE CURRENT ALBUM:</p>
  <br>
    <label>
        TITLE: <input v-model="image.title">
    </label>
     <label>
        URL LINK: <input v-model="image.url">
    </label>
    <label>
        DESCRIPTION: <input v-model="image.description">
    </label>
    <button>ADD</button>
</form>
        

</template>

<script>
export default {
  data() {
    return {
      image:{
        title: '',
        description: '',
        url: ''
      }
    };
  },
  props: {
    onAdd: Function,
    onClose: Function,
    Album: Object
  }
};
</script>

<style>
#image-modal {
  box-sizing: border-box;
  display:block;
  width:300px;
  
  }
input {
   display: block;
   padding: 10px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
  input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
  
</style>
