<script>
import Contactform from '../Contact/Contactform.vue';
export default {
    components: {
        Contactform,
    }
}
</script>

<template>
    <div id="presentation">
        <div class="presentation_text">
            <h1>Présentation</h1>
            <br>
            <p class="p1">Anthony 32 ans, travaillant dans le secteur de l'industrie en tant que cariste depuis sept
                ans.<br>
                N'étant pas satisfait professionnellement, j'ai décidé de me tourner vers ma passion,
                l'informatique.</p>
            <p class="p2">Dans un premier temps en autodidacte grâce à une connaissance dans ce
                milieu.<br>
                Cette dernière a pu me montrer les bases du métier.<br> Et par la suite en entreprenant cette
                formation de
                développeur web/web mobile.</p>
            <p class="p3">De nature autonome, rigoureux et ayant une bonne gestion du stress, je sais m'adapter à
                toutes situations.<br>
                J'attends de cette formation de pouvoir développer mes connaissances dans ce milieu afin
                d'être
                épanoui professionnellement.</p>
            <router-link to="#contact" class="button_pres">Me contacter</router-link>
        </div>

        <img src="@/assets/images/photoprofil.jpg" alt="Photo Anthony">


    </div>
</template>

<style>
#presentation {
    background-color: rgb(238, 243, 241);
    display: flex;
    justify-content: center;
    align-items: center;
}

#presentation img {
    width: 350px;
    height: 350px;
    border-radius: 50% 20%;
    margin-left: 35%;
    margin-right: 50px;
    box-shadow: 6px 6px 25px black;

}

.presentation_text {
    color: rgb(186, 66, 170);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

.p1,
.p2,
.p3 {
    text-align: center
}

h1 {
    text-decoration: underline;
    text-shadow: 1px 1px 2px rgb(14, 14, 14);
}

.button_pres {
    background-image: linear-gradient(to right, #B993D6 0%, #8CA6DB 51%, #B993D6 100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: rgb(61, 48, 147);
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.button_pres:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>
