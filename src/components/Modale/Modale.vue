<template>
    <div id="modale" @click="close" v-if="visible">
    <div id="content_modale">
        <h2>{{ titre }}</h2>
        <component :is="component"></component>
    </div>
    </div>
</template>
<script>
import Competences from '../Parcours/Competences.vue';
import Diplomes from '../Parcours/Diplomes.vue';
import Experiences from '../Parcours/Experiences.vue';
import Commentaire from '../Projects/Commentaire.vue';
import Projects from '../Projects/Projets.vue';


      export default {
        props : {
            titre: {
                type: String, required : true,
            },
            component: {
                type: String, required : true,
            },
            visible: {
                type: Boolean, required : false, default : false,
            },
        },
        methods : {
            close(){
                this.$emit("close")
            }
        },
        components :{
            Diplomes, Experiences, Competences, Projects, Commentaire
        }
      }

      
    </script>
<style>
    #modale {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    #content_modale {
        width: 75%;
        height: 80%;
        overflow: auto;
        border-radius: 25px;
        background-image: url(@/assets/images/banniere.jpg);
        background-size: cover;
        border: 1px solid black;
    }

    h2 {
        color: white;  
    }

</style>