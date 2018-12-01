
<template>
    <div class="welcome-screen">
        <p>Michael & Hans present a</p>
        <h1>SUPER ANIMAL GALLERY</h1>
        <nav class="look">
            <RouterLink to="/albums">TAKE A LOOK</RouterLink>
        </nav>
        <p class="trigger"><strong>Trigger warning:</strong> may contain spiders.</p>
    </div>
</template>

<script>
export default {

};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Autour+One');

.welcome-screen {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    font-family: 'Autour One', cursive;
    color: #505168;
}

h1 {
    font-size: 4em;
    margin-top: 10px;
}

.look {
    margin-top: 20px;
    font-size: 1.2em;
    border: 1px solid black;
    background: #DCC48E;
    padding: 10px;
}

.look a {
    color: #505168;
}

.look:hover {
    background: #EAEFD3;
}

.trigger {
    margin-top: 20px;
    font-size: .6em;
}
</style>
