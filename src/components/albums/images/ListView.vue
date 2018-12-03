<template>
    <div class="list-view">
        <ul>
            <li
                v-for="(image, index) in images"
                :key="index">
                <p class="list-item"><img class="list-thumb" :src="image.url"></p>
                <p>{{image.title}}<p>
                <p>
                    <!-- <img :src="image.url"> -->
                </p>
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

    .list-view {
        display: flex;
        align-items: center;
    }

    .list-thumb {
        width: 100%;
    }

    .list-item {
        width: 40px;
        margin: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        text-align: center;
        margin-bottom: 20px;
        flex-direction: row;
    }
</style>
