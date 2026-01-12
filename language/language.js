function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
    console.log("Language changed to "+lang);
}

// Define the language reload anchors
let language = {
fr: {
    contribute: "Contribution",
    contributeText1:"Si vous voulez contribuer à notre mariage en nous offrant un cadeau ou en nous envoyant de l'argent vous pouvez trouver des informations ci dessous:",
    contributeText2:"Pour les cadeaux, nous vous demandons de choisir parmi cette liste. N'oubliez pas d'y ajouter votre nom pour que l'on puisse vous remercier!",
    contributeText3:"Si vous voulez nous envoyer de l'argent, vous pouvez nous faire un virement bancaire sur le compte suivant: ... Voici une liste de projets que nous avons auquels vous pouvez contribuer:",
    project1:"Renovations de la maison (plancher de l'étage, toit, isolation thermique,...)",
    project2:"Voyages",
    project3:"Home cinéma",
    photos:"Photos",
    photosText1:"Nous vous invitons à partager les photos que vous avez prises pendant la réception de notre mariage ici, afin que nous puissions les ajouter à notre album.",
    photosUpload:"Uploader des photos"
},
it: {
    contribute: "Contribute",
    contributeText1:"If you would like to contribute to our wedding by offering us a gift or sending us some money you can find information on how to do that below:",
    contributeText2:"For gifts, we ask you to pick from the following list: ... Don't forget to add your name so that we can properly thank you for it!",
    contributeText3:"If you want to send us money, you can do a bank transfer to the following account: ... Here is a list of projects we have that you can contribute to:",
    project1:"House renovation (upstairs floor, roof, insulation,...)",
    project2:"Holiday trips",
    project3:"Home theater setup",
    photos:"Photos",
    photosText1:"We invite you to share any photos that you have taken during our wedding receptions here, so that we can add them to our photo album.",
    photosUpload:"Upload photos"
}
};

// Check if a hash value exists in the URL
if (window.location.hash) {
    console.log("Current location "+window.location.hash);
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#fr") {
        contribute.textContent = language.fr.contribute;
        contributeText1.textContent = language.fr.contributeText1;
        contributeText2.textContent = language.fr.contributeText2;
        contributeText3.textContent = language.fr.contributeText3;
        project1.textContent = language.fr.project1;
        project2.textContent = language.fr.project2;
        project3.textContent = language.fr.project3;
        photos.textContent = language.fr.photos;
        photosText1.textContent = language.fr.photosText1;
        photosUpload.textContent = language.fr.photosUpload;
    }
    else if (window.location.hash == "#it") {
        contribute.textContent =
        language.it.contribute;
    }
}

console.log("Script loaded");
