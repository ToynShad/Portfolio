<template>
        <footer>
            <div class="footerinfo">
            <div class="address">
                <h3>Mes contacts</h3>
                <address>
                    <a href="mailto:anthony.frere@hotmail.com">Mail : anthony.frere@hotmail.com</a><br>
                    <a href="tel:0616031052">Tel : 06.16.03.10.52</a><br>
                    <a href="https://www.google.com/maps/place/27220+Saint-Germain-de-Fresney/@48.9570655,1.266572,14z/data=!3m1!4b1!4m6!3m5!1s0x47e1494b8d438b21:0x40c14484fbb9370!8m2!3d48.959182!4d1.290396!16s%2Fm%2F03nqlxt?entry=ttu" target="_blank">
                        27220 - Saint-Germain-de-Fresney</a>
                </address>
            </div>
            <div class="social">
                <h3>Mes réseaux sociaux</h3>
                <a href="https://github.com/ToynShad/" target="_blank">
                    <img src="@/assets/images/gitHub.png" alt="logo GitHub">
                </a>
                <a href="https://www.linkedin.com/in/anthony-frere-451206213/" target="_blank">
                    <img src="@/assets/images/linkedin.png" alt="logo Linkedin">
                </a>
            </div>
            </div>
                <div class="datefooter">
                    <p>Dernières modifications le<time datetime="2024-07-15">15 juillet 2024</time></p>
                </div>
        </footer>
</template>

<style>
footer  {
    background-image: url(@/assets/images/banniere.jpg);
    height: 175px;
}

footer img {
    width: 50px;
    height: 50px;
}

h3,
address,
footer a {
    color: aliceblue;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
footer h3 {
    text-decoration: underline;
}
.footerinfo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.datefooter {
    color: #ffffff;
}
</style>
