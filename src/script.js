function remplirTexte() {
    const type = document.getElementById('typeInput').value;
    const hauteur = document.getElementById('hauteurInput').value;
    const largeur = document.getElementById('largeurInput').value;
    const profondeur = document.getElementById('profondeurInput').value;
    const nombreElements = document.getElementById('nombreElementsInput').value;
    const finitionExt = document.getElementById('finitionExtInput').value;
    const chants = document.getElementById('chantsInput').value;
    const nbPortes = document.getElementById('nbPortesInput').value;
    const typePorte = document.getElementById('typePorteInput').value;
    const boisPorte = document.getElementById('boisPorteInput').value;
    const etageres = document.getElementById('etageresInput').value;
    const ouverture = document.getElementById('ouvertureInput').value;
    const charniere = document.getElementById('charniereInput').value;
    const tringles = document.getElementById('tringlesInput').value; // Nombre de tringles
    const tiroirs = document.getElementById('tiroirsInput').value; // Nombre de tiroirs
    const tablettes = document.getElementById('tablettesInput').value; // Nombre de tablettes

    const infoMeuble = document.getElementById('infoMeuble');

    // Vérifiez si tous les champs requis sont remplis
    if (type && hauteur && largeur && profondeur && nombreElements && finitionExt && chants && nbPortes && typePorte && boisPorte && ouverture) {
        infoMeuble.innerHTML = `Fourniture et pose d'un meuble en bois intérieur <strong>${type}</strong>. Hauteur : <strong>${hauteur}</strong>mm, largeur : <strong>${largeur}</strong>mm, profondeur : <strong>${profondeur}</strong>mm.
            <br>
            Meuble divisé en <strong>${nombreElements}</strong> éléments.
            <br>
            Finition extérieure (joues et façades si existantes) en <strong>${finitionExt}</strong>. Bois mélaminé épaisseur 19mm avec chants <strong>${chants}</strong>.
            <br>
            <br>
            Aménagement du meuble par :
            <br>
            - <strong>${etageres}</strong> étagères réglables posées sur taquets chromés.
            <br>
            - <strong>${tringles}</strong> tringles chromées pour espace penderie. Supports fixés sur l'étagère supérieure.
            <br>
            - <strong>${tiroirs}</strong> tiroirs posés sur coulisses télescopiques Blum à ouverture tandem. Fermeture avec ralentissement.
            <br>
            - <strong>${tablettes}</strong> tablettes posées sur coulisses télescopiques Blum à ouverture totale.
            <br>
            Accès par :
            <strong>${nbPortes}</strong> <strong>${typePorte}</strong> <strong>${boisPorte}</strong>. Ouverture avec <strong>${ouverture}</strong>. 
            <br>
            Charnières à ouverture 110° pour portes en <strong>${charniere}</strong>, fermeture à amortisseur.`;
            

    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
}

function remplirHabillage() {
    const boisEn = document.getElementById('boisEnInput').value;
    const aboutements = document.getElementById('aboutementsInput').value;
    const hauteur = document.getElementById('hauteurHabillageInput').value;
    const largeur = document.getElementById('largeurHabillageInput').value;
    //const infoHabillage = document.getElementById('infoHabillage');
    
    if (boisEn && aboutements && hauteur && largeur /*& infoHabillage*/){
    infoHabillage.innerHTML = `Habillage d'un pan de mur en bois <strong>${boisEn}</strong>.
        <br>
        <strong>${aboutements}</strong> aboutements, fil discret. Accroché sur profil de suspension biseauté.
        <br>
        Hauteur : <strong>${hauteur}</strong>mm, largeur : <strong>${largeur}</strong>mm - Forfait au mètre carré (surface déterminée à l'aide du plan fourni pour le chiffrage).
        <br>
        Finition de l'habillage vernis.`;
    }
    else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
}

function remplirPlateau() {
    const boisEn = document.getElementById('boisEnInput').value;
    const longueur = document.getElementById('longueurPlatInput').value;
    const profondeur = document.getElementById('profondeurPlatInput').value;
    const epaisseur = document.getElementById('epaisseurPlatInput').value;
    const retour = document.getElementById('retourPlatInput').value;
    const fixation = document.getElementById('fixationPlatInput').value;
    const finition = document.getElementById('finitionPlatInput').value;
    
    const etageres = document.getElementById('etageresPlatInput').value;
    const tringles = document.getElementById('tringlesPlatInput').value; // Nombre de tringles
    const tiroirs = document.getElementById('tiroirsPlatInput').value; // Nombre de tiroirs
    const tablettes = document.getElementById('tablettesPlatInput').value; // Nombre de tablettes

    if (boisEn && longueur && profondeur &&  epaisseur && retour &&  fixation &&  finition) {
    infoPlateau.innerHTML = `
    Fourniture et pose d'un plateau en bois <strong>${boisEn}</strong>.
        Longueur : <strong>${longueur}</strong> mm, profondeur : <strong>${profondeur}</strong> mm, épaisseur <strong>${epaisseur}</strong>: mm, retour : <strong>${retour}</strong> mm. <br>
        Aménagement par :<br>
        - Meuble en partie basse en bois <strong>${etageres}</strong> REF dimensions Hauteur : <strong>${etageres}</strong> mm, largeur : <strong>${etageres}</strong> mm, profondeur : <strong>${etageres}</strong> mm.<br>
        - <strong>${etageres}</strong> étagères réglables posés sur taquets chromés.<br>
        - <strong>${tringles}</strong> tringles chromées pour espace penderie. Supports fixés sur l'étagère supérieure.<br>
        - <strong>${tiroirs}</strong> tiroirs posés sur coulisses télescopique Blum à ouverture tandem. Fermeture avec ralentissement.<br>
        - <strong>${tablettes}</strong> tablettes posées sur coulisses télescopique Blum à ouverture totale.<br>
        
        Finition extérieure (joues et façades si existantes) en <strong>${finition}</strong>. Bois mélaminé épaisseur 19mm avec chants stratifiés plaqué en <strong>${etageres}</strong>.<br>
        
        Fixation <strong>${fixation}</strong> sur tasseaux noyés.<br>
        Finition du plateau <strong>${finition}</strong> vernis / laqué.<br>
    `
    }
    else{
        alert("Veuillez remplir tous les champs du formulaire.");
    }
}