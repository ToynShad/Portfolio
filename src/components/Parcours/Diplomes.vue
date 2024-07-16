<template>
    <div id="diplome">
        <div class=diplomes>
            <div id="diplome1">
                <h1>Lycée Professionel Philibert de L'orme</h1>
                <h2>Septembre 2013 - Juin 2014</h2>
                <h3>Brevet Professionel de Couverture</h3>
            </div>
            <br>
            <div id="diplome1">
                <h1>Lycée Professionel Philibert de L'orme</h1>
                <h2>Septembre 2011 - Juin 2013</h2>
                <h3> CAP Couverture</h3>
            </div>
            <br>
            <div id="diplome1">
                <h1>CFA Bâtiment de Chartres</h1>
                <h2>Septembre 2008 - Juin 2010</h2>
                <h3>CAP Menuiserie</h3>
            </div>
            <br>
        </div>
        <div class="formations">
            <div id="formation1">
                <h1>CEF</h1>
                <h2>Septembre 2023 - En cours</h2>
                <h3>Développeur Web / Web mobile</h3>
            </div>
            <br>
            <div id="formation1">
                <h1>SFTL</h1>
                <h2>Décembre 2022</h2>
                <h3>Recyclage CACES</h3>
            </div>
            <br>
            <div id="formation1">
                <h1>IFRAC</h1>
                <h2>Novembre 2017 - Décembre 2017</h2>
                <h3>CACES 1, 3, 5 + Gestion Informatisée des Stocks</h3>
            </div>
            <br>
        </div>
    </div>
</template>

<style>
.diplomes {
    color: aliceblue;
    font-size: medium;
    font-family: "Comic Neue", cursive;
    font-weight: 700;
    font-style: normal;
}

.formations {
    color: white;
    font-size: medium;
    font-family: "Comic Neue", cursive;
    font-weight: 700;
    font-style: normal;
}

#formation1 {
    border: 1px solid white;
    border-radius: 50px 25px;
    box-shadow: 20px 10px 20px 10px rgb(255, 255, 255);
}

#diplome1 {
    border: 1px solid white;
    border-radius: 25px 50px;
    box-shadow: -20px 0px 20px 10px rgb(255, 255, 255);
    width: 75%;
    height: 30%;
}

#diplome {
    display: flex;
    justify-content: space-evenly;
    margin-left: 5%;
    margin-right: 5%;
}
</style>