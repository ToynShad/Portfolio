<template>
    <div id="competences">
        <div class="langue">          
            <img src="@/assets/images/logolangue.png" alt="logo langue">
            <h2>Langues parlées :</h2>
        <li>   
        <div id="flag">
            <img src="@/assets/images/frflag.png" alt="drapeau fr" style="margin-right: 20px;"> Français : Langue maternelle
        </div><br>
        <div id="flag">
            <img src="@/assets/images/enflag.png" alt="drapeau en" style="margin-right: 20px;"> Anglais : Débutant
        </div><br>
        <div id="flag">
            <img src="@/assets/images/esflag.png" alt="drapeau es" style="margin-right: 20px;"> Espagnol : Notions base
        </div>
        </li>
        </div>
        <div class="skill">
            <img src="@/assets/images/logopc.png" alt="logo pc">    
            <h2>Compétences Informatique :</h2>
        <li>
        <div id="icons">
            <img src="@/assets/images/htmllogo.png" alt="logo html" style="margin-right: 20px;">
        <div class="container">
        <div class="skills html">40%</div>
        </div>         
        </div>
        <div id="icons">
            <img src="@/assets/images/csslogo.png" alt="logo css" style="margin-right: 20px;">
        <div class="container">
        <div class="skills css">40%</div>
        </div>
        </div>
        <div id="icons">
            <img src="@/assets/images/jslogo.png" alt="logo js" style="margin-right: 20px;">
        <div class="container">
        <div class="skills js">20%</div>    
        </div>    
        </div>
        <div id="icons">
            <img src="@/assets/images/vuejslogo.png" alt="logo vue js" style="margin-right: 20px;">
        <div class="container">
        <div class="skills vue">20%</div>
        </div>
        </div>
        </li>
        </div>
        <div class="hobbies">
            <img src="@/assets/images/hobbie.png" alt="logo hobbies" style="margin-right: 20px;">
        <h2>Centres d'intérêts :</h2>
        <div class="iconshobbie">
        <li> 
            <img src="@/assets/images/sport.png" alt="logo sport" style="margin-right: 20px;"> Sport
            <br>
            <img src="@/assets/images/casque-de-musique.png" alt="logo musique" style="margin-right: 20px;"> Musique
            <br>
            <img src="@/assets/images/nouvelles.png" alt="logo new techno" style="margin-right: 20px;"> Nouvelles Technologies
            <br>
            <img src="@/assets/images/jeux-video.png" alt="logo jeux video" style="margin-right: 20px;"> Jeux video
        </li> 
        </div>
        </div>
    </div>
</template>

<style>

#competences h2 {
    text-decoration: underline;
}

.langue {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    color: white;
    margin-top: 50px;
    font-size: 1.4em;
}

.langue img {
    width: 50px;
    height: 50px;
}

#flag img {
    width: 30px;
    height: 15px;
}

.skill {
    margin-top: 50px;
    font-size: 1.4em;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    margin-left: 2%;
}

.skill img {
    width: 50px;
    height: 50px;
}

.container {
  width: 200px ; 
  background-color: #ddd; 
  border-radius: 50px;
  float: right;
}
.skills {
  text-align: right; 
  padding-top: 10px; 
  padding-bottom: 10px;
  color: white; 
}

.html {width: 40%; background-color: #04AA6D;} 
.css {width: 40%; background-color: #04AA6D;}
.js {width: 20%; background-color: #04AA6D;}
.vue {width: 20%; background-color: #04AA6D;}

.hobbies {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: white;
    margin-top: 50px;
    font-size: 1.4em;
    margin-left: 65px;
}

.hobbies img {
    width: 50px;
    height: 50px; 
}
.iconshobbie {
    text-align: left;
    margin-left: 20%;
    margin-bottom: 20px;
}
</style>