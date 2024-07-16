<template>
<header>
<nav>
    <router-link id="img" to="/"><img src="@/assets/images/logofrere.png" alt="Frere Anthony"></router-link>
    <div id="nav_link">
        <router-link to="/#presentation">Présentation</router-link>
        <span> | </span>
        <router-link to="/#realisations">Réalisations</router-link>
        <span> | </span>
        <router-link to="/#contact">Contact</router-link>
        <span > | </span>
        <a href="../pages/404.vue" alt="error 404">/!\</a>    
    </div>
</nav>
</header>
</template>

<style>
header{
    width: 99.5%;
    background-image: url(@/assets/images/banniere.jpg);
    position: sticky;
    top: 0;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header img {
    border-radius: 45%;
    width: 50%;
    height: 50%;
    margin-right: 50%;
}
a {
    color: aliceblue;
    text-decoration: none;
}
a:focus {
    text-decoration: underline;
}
</style>
