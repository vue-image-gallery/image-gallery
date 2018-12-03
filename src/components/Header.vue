<template>
    <header>
        <nav>
            <span><RouterLink to="/">HOME</RouterLink></span>
            <span><RouterLink to="/albums">ALBUMS</RouterLink></span> 
            <span><RouterLink to="/about">ABOUT</RouterLink></span> 
        </nav>
    </header>    
</template>

<script>
export default {

};
</script>

<style>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 auto;
    padding: 20px;
    height:75px;
    background-color: #DCC48E;
    color: #EAEFD3;
    font-size: 1.5em;
    font-weight: 600;
    
}
span {
    padding: 20px;
    
}
a {
    color: #EAEFD3;
    text-decoration: none;
    padding: 0px 30px;
}

a:hover {
    color: #505168;
}

</style>
