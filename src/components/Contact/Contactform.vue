<template>
 <div id="contact" style="margin-top: 75px;">
 <p>Me contacter :</p>
 </div>
    <form action="https://api.web3forms.com/submit" method="POST">

<input type="hidden" name="access_key" value="076a0e9a-f374-4fcc-939d-3d75015ede0d">
<label for="name" style="margin: 10px">Votre nom :</label>
<input type="text" name="name" required>
<label for="email" style="margin: 10px">Votre mail :</label>
<input type="email" name="email" required>
<label for="objet" style="margin: 10px">Votre objet :</label>
<input type="objet" name="objet" required>
<label for="message" style="margin: 10px">Votre message :</label>
<textarea name="message" required></textarea>
<input type="hidden" name="redirect" value="https://web3forms.com/success">
<button type="submit">Envoyer</button>

</form>
</template>

<style>
#contact { 
    width: 50%; 
    margin-left: 25%; 
    text-align: center; 
    border-radius: 10px;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(to right, #B993D6 0%, #8CA6DB 51%, #B993D6 100%); 
    text-decoration: none;
}

form {
    display: flex;
    justify-content: center;
    align-items: baseline;
}
</style>