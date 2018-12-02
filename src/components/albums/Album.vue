<template>
    <li>
        <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
        <p>{{album.description}}</p>
    </li>
</template>

<script>
export default {
  props: {
    album: Object
  }
};
</script>

<style>
li {
    display: flex;
    flex-direction: column;
    align-items: left;
    list-style-type: none;
}

li a {
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 20px;
    padding: 0px;
}

p {
    margin: 0px;
}

</style>
