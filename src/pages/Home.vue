<template>
    <div id="nav_link">
        <Presentation></Presentation>
        <button @click="openModaleDiplomes">Mes Diplômes - Formations </button>
        <button @click="openModaleCompetences">Mes Compétences</button>
        <button @click="openModaleExperiences">Mes Expériences professionnelles</button><br>
    <div id="realisations">
        <h1>Mes réalisations</h1>
        <div class="realimg">
            <img src="@/assets/images/cv.jpg" alt="cv" @click="openModaleProjets" style="margin:50px">
            <img src="@/assets/images/Espacecomm.png" alt="espace comm" @click="openModaleCommentaire" style="margin:50px">
        </div>
    </div>    
        <Contactform></Contactform>
        <Modale :titre="modale.titre" :component="modale.component" :visible="modale.visible" @close="close"></Modale>
    </div>
</template>

<script>

import Contactform from "../components/Contact/Contactform.vue";
import Presentation from "../components/Presentation/Presentation.vue";
import Projets from "../components/Projects/Projets.vue";
import Commentaire from "../components/Projects/Commentaire.vue";
import Modale from "../components/Modale/Modale.vue";

export default {
    components: {
        Contactform, Presentation, Projets, Commentaire, Modale
    },
    data() {
        return {
            modale: { 
            titre: "", 
            component: "", 
            visible: false }
        }
    },
    methods: {
        openModaleDiplomes() {
            this.modale.titre="Mes Diplômes - Formations"
            this.modale.component="diplomes"
            this.modale.visible=true
        },
        openModaleExperiences() {
            this.modale.titre="Mes Expériences professionnelles"
            this.modale.component="experiences"
            this.modale.visible=true
        },
        openModaleCompetences() {
            this.modale.titre="Mes Compétences"
            this.modale.component="competences"
            this.modale.visible=true
        },
        openModaleProjets() {
            this.modale.titre="Mon CV en ligne"
            this.modale.component="projects"
            this.modale.visible=true
        },
        openModaleCommentaire() {
            this.modale.titre="Dynamiser un espace commentaire"
            this.modale.component="commentaire"
            this.modale.visible=true
        },
        close() {
            this.modale.visible=false
        }
    }
}

</script>

<style>
button {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(to right, #B993D6 0%, #8CA6DB 51%, #B993D6 100%); 
    text-decoration: none;
}

#realisations  {
    color: rgb(186, 66, 170);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 1px 1px 2px rgb(14, 14, 14);
    background-color: rgb(238, 243, 241);
}

img {
    width: 200px;
    height: 200px;
    border-radius: 30%;
}
.realimg :hover {
    box-shadow: 10px 10px 5px black;
}

</style>