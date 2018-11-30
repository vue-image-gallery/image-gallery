<template>
    <form @submit.prevent="onAdd(image)">
        <lable>
            <span>Title: <input v-model="image.title"></span>
        </lable>
         <lable>
            <span>Url: <input v-model="image.url"></span>
        </lable>
        <button>ADD</button>
     </form>
        

</template>

<script>
export default {
  data() {
    return {
      image:{
        title: '',
        url: ''
      }
    };
  },
  props: {
    onAdd: Function
  }
};
</script>

<style>

</style>
