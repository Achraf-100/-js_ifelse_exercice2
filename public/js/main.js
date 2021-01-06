// Exo1
// let nombre1 = prompt('choisi un chiffre');
// let nombre2 = prompt('choisi un chiffre');

// console.log(nombre1 , nombre2);

// alert(`le nombre ${nombre1} et le nombre ${nombre2} sont ils egaux ? la reponse est : ${nombre1 == nombre2}`);

// Exo2
// let nombre1 = prompt('choisi un chiffre');
// let nombre2 = prompt('choisi un chiffre');

// console.log(nombre1 , nombre2);

// alert(`le nombre ${nombre1} est t il plus petit que le nombre ${nombre2} ? la reponse est : ${nombre1 < nombre2}`)

// Exo3
// let nombre1 = parseInt(prompt('choisi un chiffre'));
// let nombre2 = parseInt(prompt('choisi un chiffre'));
// let nombre3 = parseInt(prompt('choisi un chiffre'));


// let resultat = parseInt(nombre1 + nombre2)
// console.log(parseInt(resultat));
// console.log(nombre3);

// alert(`la somme du nombre ${nombre1} + du nombre ${nombre2} est t elle plus grande que la somme du nombre ${nombre3} ? la reponse est : ${resultat > nombre3}`)

// Exo4
// let phrase = prompt('Rentre une phrase');
// let phrase1 = prompt('Combien de caracteres penses-tu qu il ya ?')
// if (phrase1.length) {
//     console.log('GoodBaby');
// }else{
//     console.log('Dommage tu etais a ');
// }









// Exo 4
// let char = prompt("Ecris la phrase: ");
// let reponse = parseInt(prompt("Combien de caractères comporte la phrase que t'as écris: "));
// let repBonne = char.length 
// if (repBonne == true) {
//     alert("Felicitation, t'as bien répondu!!");
// } else {
//     alert("Incorrect, t'étais à " + (Math.abs(char.length - reponse)) + " de la bonne réponse.");
// }

// Exo 5
// let prenom = prompt("Entrez votre prénom: ");
// if (prenom.length >= 1) {
//     alert("Bonjour " + prenom);
// } else {
//     prenom = prompt("Attention, vous devez remplir le champs ci dessous, quel est votre prenom");
// }

// Exo 6
// if (confirm("Veux-tu t'abonner? ")){

//     let rep = prompt("Veux-tu l'abonnement Normal ou Luxe ? ");
//     if (rep == "Normal") {

//         alert("Merci pour votre abonnement");
//     } else if (rep == "Luxe") {

//         alert("Felicitations, vous avez choisis la formule Luxe");
//     }else if (rep == "") {

//         if (confirm("es-tu certain?")) {

//             alert("C'est dommage")
//         } else {

//             rep = prompt("Veux-tu l'abonnement Normal ou Luxe ? ");
//             if (rep == "Normal") {

//                 alert("Merci pour votre abonnement");
//             } else if (rep == "Luxe") {

//                 alert("Felicitations, vous avez choisis la formule Luxe");
//             }else if (rep == "") {

//                 if (confirm("es-tu certain?")) {

//                     alert("C'est dommage")
//                 } else {
                    
//                 };
//             };
//         };
//     };
// }


// Exo 7
// let ask = prompt("Comment trouves-tu mes bombons? ");
// let ask2 = prompt("Comment trouves-tu les marshmallows");
// let reponse1 = "Bon";
// let reponse2 = "Pas bon";
// if (ask != reponse1 && ask2 != reponse2) {
//     alert("Aucune des 2 réponses est valide");
// } else if (ask != reponse1 && ask2 == reponse2) {
//     alert("Tu es presque ");
// } else if (ask == reponse1 && ask2 != reponse2) {
//     alert("Tu es presque ");
// } else if (ask == reponse1 && ask2 == reponse2) {
//     alert("Bien joué ");
// };

// Exo 8
// let age = prompt("Quel est votre age? ");
// if (age > 100) {
//     alert("Vous ne pouvez pas reserver car vous etes trop vieux");
// } else if ( age < 0) {
//     alert("Vous ne pouvez pas reserver car vous n'etes meme pas né");
// } else if ( age < 18) {
//     alert("Vous ne pouvez pas reserver car vous etes mineur");
// } else if ( age > 18 ) {
//     alert("Vous pouvez reserver car vous etes majeur");
// } else {
//     alert("Vous pouvez rentrer mais c'est tout juste")
// }

// Exo 9
// let riche = prompt("Est-ce que vous etes riche? ");
// let vacances = prompt("Voulez vous partir en vacances? ");
// let chat = prompt("Est-ce que vous avez un chat");
// if ( vacances == "non") {
//     alert("Pas de problème, ne partez pas en vacances");
// } else if ( riche == "non" || chat == "oui") {
//     alert("Meme si vous voulez, vous ne pouvez pas partir");
// } else if ( riche == "oui" && chat == "non") {
//     alert("Vous pourriez partir en vacances si vous le vouliez");
// } else if ( riche == "oui" && chat=="non" && vacances == "oui") {
//     alert("Tout est parfait, partez en vacances");
// } 

// if (vacances == "oui" ) {

//     if (riche == "non" || chat == "oui") {
//         alert("Meme si vous voulez, vous ne pouvez pas partir");

//     } else if (riche == "oui" && chat == "non") {
//         alert("Tout est parfait, partez en vacances");

//     } else if (riche == "oui" || chat == "non") {
//         alert("InchAllah, t'es riche sinon tu reste a la dar a fou")
//     }

// } else {
//     alert("Pas de problème, ne partez pas en vacances");
// }
