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

    const infoCaisson = document.getElementById('infoCaisson');

    // Vérifiez si tous les champs requis sont remplis AJOUTER PORTE OU PORTES SELON CHIFFRE
    if (type && hauteur && largeur && profondeur && finitionExt && typePorte) {
        let infoText = `Fourniture et pose d'un meuble en bois intérieur <strong>${type}</strong>. Hauteur : <strong>${hauteur}</strong>mm, largeur : <strong>${largeur}</strong>mm, profondeur : <strong>${profondeur}</strong>mm.
        <br>`;

        if (nombreElements > 0) {
            infoText += ` Meuble divisé en <strong>${nombreElements}</strong> éléments.
            <br>`;
        }

        infoText += `Finition extérieure (joues et façades si existantes) en <strong>${finitionExt}</strong>.`
        
        if (chants > 0) {
            infoText += `Bois mélaminé épaisseur 19mm avec chants <strong>${chants}</strong>.
            <br>`;
        }
       
        infoText += `Aménagement du meuble par :
        <br>`;

        if (etageres > 0) {
            infoText += `- <strong>${etageres}</strong> étagères réglables posées sur taquets chromés.<br>`;
        }

        if (tringles > 0) {
            infoText += `- <strong>${tringles}</strong> tringles chromées pour espace penderie. Supports fixés sur l'étagère supérieure.<br>`;
        }

        if (tiroirs > 0) {
            infoText += `- <strong>${tiroirs}</strong> tiroirs posés sur coulisses télescopiques Blum à ouverture tandem. Fermeture avec ralentissement.<br>`;
        }

        if (tablettes > 0) {
            infoText += `- <strong>${tablettes}</strong> tablettes posées sur coulisses télescopiques Blum à ouverture totale.<br>`;
        }

        if (nbPortes > 0) {
            infoText += `Accès par : <strong>${nbPortes}</strong> portes <strong>${typePorte}</strong> en <strong>${boisPorte}</strong>. Ouverture avec <strong>${ouverture}</strong>. 
            <br>
            Charnières à ouverture 110° pour portes en <strong>${charniere}</strong>, fermeture à amortisseur.`;
        }


    // Assigner le texte construit à l'élément infoPlacard
    infoCaisson.innerHTML = infoText;

    } else {
        alert("Veuillez remplir les champs obligatoire du formulaire.");
    }
}

function remplirHabillage() {
    const boisEn = document.getElementById('boisEnInput').value;
    const aboutements = document.getElementById('aboutementsInput').value;
    const hauteur = document.getElementById('hauteurHabillageInput').value;
    const largeur = document.getElementById('largeurHabillageInput').value;
    //const infoHabillage = document.getElementById('infoHabillage');
    
    if (boisEn && hauteur && largeur /*& infoHabillage*/){
    let infoText = `Habillage d'un pan de mur en bois <strong>${boisEn}</strong>.
        <br>`;

        if (etageres > 0) {
            infoText += `<strong>${aboutements}</strong> aboutements, fil discret. Accroché sur profil de suspension biseauté.<br>`;
        }

        infoText += ` Hauteur : <strong>${hauteur}</strong>mm, largeur : <strong>${largeur}</strong>mm <br> Forfait au mètre carré (surface déterminée à l'aide du plan fourni pour le chiffrage).
        <br>
        Finition de l'habillage vernis.`;

    infoHabillage.innerHTML = infoText;
    }
    else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
}

function remplirPlateau() {
    const boisEn = document.getElementById('boisPlatInput').value;
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
    let infoText = `
    Fourniture et pose d'un plateau en bois <strong>${boisEn}</strong>.
        Longueur : <strong>${longueur}</strong> mm, profondeur : <strong>${profondeur}</strong> mm, épaisseur <strong>${epaisseur}</strong>: mm, retour : <strong>${retour}</strong> mm. <br>
        Aménagement par :<br>
        - Meuble en partie basse en bois <strong>${boisEn}</strong> dimensions hauteur : <strong>${etageres}</strong> mm, largeur : <strong>${etageres}</strong> mm, profondeur : <strong>${etageres}</strong> mm.<br>`
        if (etageres > 0) {
            infoText += `- <strong>${etageres}</strong> étagères réglables posées sur taquets chromés.<br>`;
        }
    
        if (tringles > 0) {
            infoText += `- <strong>${tringles}</strong> tringles chromées pour espace penderie. Supports fixés sur l'étagère supérieure.<br>`;
        }
    
        if (tiroirs > 0) {
            infoText += `- <strong>${tiroirs}</strong> tiroirs posés sur coulisses télescopiques Blum à ouverture tandem. Fermeture avec ralentissement.<br>`;
        }
    
        if (tablettes > 0) {
            infoText += `- <strong>${tablettes}</strong> tablettes posées sur coulisses télescopiques Blum à ouverture totale.<br>`;
        }
    
        console.log(finition);
        if (finition !== 'aucune') {
            infoText += `- Finition extérieure (joues et façades si existantes) en <strong>${finition}</strong>.<br>`;
        }

        /*infoText += `Bois mélaminé épaisseur 19mm avec chants stratifiés plaqué en <strong>${etageres}</strong>.<br>`*/
        
        if (fixation !== 'non') {
            infoText += `Fixation <strong>${fixation}</strong> sur tasseaux noyés.<br>`;
        }

        if (finition !== 'aucune') {
            infoText += `- Finition du plateau <strong>${finition}</strong>.<br><br>`;
        }

    infoPlateau.innerHTML = infoText;

    }
    else{
        alert("Veuillez remplir tous les champs du formulaire.");
    }

}


// Récupérer les éléments des formulaires
const formCaisson = document.getElementById('formCaisson');
const formHabillage = document.getElementById('formHabillage');
const formPlateau = document.getElementById('formPlateau');

// Fonctions pour afficher les formulaires
function afficherFormCaisson() {
    formCaisson.style.display = 'block';
    formHabillage.style.display = 'none';
    formPlateau.style.display = 'none';
}

function afficherFormHabillage() {
    formCaisson.style.display = 'none';
    formHabillage.style.display = 'block';
    formPlateau.style.display = 'none';
}

function afficherFormPlateau() {
    formCaisson.style.display = 'none';
    formHabillage.style.display = 'none';
    formPlateau.style.display = 'block';
}

// Associer les fonctions aux boutons correspondants
document.getElementById('btnCaisson').addEventListener('click', afficherFormCaisson);
document.getElementById('btnHabillage').addEventListener('click', afficherFormHabillage);
document.getElementById('btnPlateau').addEventListener('click', afficherFormPlateau);

// Par défaut, afficher le formulaire "Meuble" au chargement de la page
afficherFormCaisson();


// Récupérer les éléments des divs d'informations
const infoCaisson = document.getElementById('infoCaisson');
const infoHabillage = document.getElementById('infoHabillage');
const infoPlateau = document.getElementById('infoPlateau');

// Fonctions pour afficher les informations
function afficherInfoCaisson() {
    infoCaisson.style.display = 'block';
    infoHabillage.style.display = 'none';
    infoPlateau.style.display = 'none';
}

function afficherInfoHabillage() {
    infoCaisson.style.display = 'none';
    infoHabillage.style.display = 'block';
    infoPlateau.style.display = 'none';
}

function afficherInfoPlateau() {
    infoCaisson.style.display = 'none';
    infoHabillage.style.display = 'none';
    infoPlateau.style.display = 'block';
}

// Associer les fonctions aux boutons correspondants
document.getElementById('btnCaisson').addEventListener('click', () => {
    afficherFormCaisson();
    afficherInfoCaisson(); // Afficher les informations correspondantes
});

document.getElementById('btnHabillage').addEventListener('click', () => {
    afficherFormHabillage();
    afficherInfoHabillage(); // Afficher les informations correspondantes
});

document.getElementById('btnPlateau').addEventListener('click', () => {
    afficherFormPlateau();
    afficherInfoPlateau(); // Afficher les informations correspondantes
});

// Par défaut, afficher le formulaire "Meuble" et ses informations au chargement de la page
afficherFormCaisson();
afficherInfoCaisson();

