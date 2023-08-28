//Fonction du changement de case lors du choix couleurs

//Evènement lors du clic du bouton de choix de mode
const inputNote=document.querySelectorAll(".input-note");
const button1 =document.querySelector("button");



button1.addEventListener("click", () => {
    switch(true){
        //1er cas : ne se produira qu'une fois au 1er clic
        case button1.classList.contains ("button-choice"):
            button1.classList.replace("button-choice", "button-notes");
            button1.textContent =`Passer en mode Couleurs`;
            inputNote.forEach(inputNote => {
                //l'input ne sera plus caché
                inputNote.removeAttribute("hidden");
                inputNote.classList.add("notes");
                //le focus sera automatiquement sur le 1er input
                document.querySelector(".input-note").focus();
            });
            break;
        default:
                button1.classList.toggle("button-notes");
                button1.classList.toggle("button-couleurs");
                //a la fin voir pr effacer les classes ci-dessus et changer fonctin dessous pour inputnotclasslist contains..
                button1.innerHTML =`Passer en mode ${button1.classList.contains("button-notes") ? "Couleurs" : "Notes"}`;
                inputNote.forEach(inputNote => {
                        //switch entre les classes notes et couleurs (=>personnalisation du contenu de l'input)
                         inputNote.classList.toggle("notes");
                         inputNote.classList.toggle("couleurs");
                         //retire les couleurs arrières-plan
                         inputNote.removeAttribute("style", "background-color");
                         //efface la valeur/note entrée lors du changement de mode de notation
                         inputNote.value="";
                         //efface les couleurs à prévoir???
                         //le focus sera automatiquement sur le 1er input
                         document.querySelector(".input-note").focus();
                       });

        // case button1.classList.contains ("button-notes"):
        //     button1.classList.replace("button-notes","button-couleurs");
        //     button1.innerHTML =`Passer en mode Notes`;
        //     inputNote.forEach(inputNote => {
        //         inputNote.classList.replace("notes","couleurs")
        //         //le focus sera automatiquement sur le 1er input
        //         document.querySelector(".input-note").focus();
        //     });
        //     break;
        // case button1.classList.contains ("button-couleurs"):
        //     alert("couleurs 1 a 4");
        //     button1.classList.replace("button-couleurs", "button-notes");
        //     button1.innerHTML=`Passer en mode Couleurs`;
        //     inputNote.forEach(inputNote =>{
        //         inputNote.classList.replace("couleurs","notes")
        //         //le focus sera automatiquement sur le 1er input
        //         document.querySelector(".input-note").focus();
        //     });
        //     break;
    }
    
});

//Définir les chiffres autorisés dans l'input
const regex=/^[1-4;&;é;";']$/
const regex2=/^[1-5]$/
inputNote.forEach(inputNote => {
    inputNote.addEventListener("input", () => {
        
        if (inputNote.classList.contains ("notes")){
            const isValid2=regex2.test(inputNote.value);
            if (isValid2){
                alert("ok");
                 //dire de passer au cousin
                 //essayer de prévoir une fonction sinon ne pas distinguer les classes sf pr la couleur(regeX?)
                const uncleElement = inputNote.parentElement.parentElement.nextElementSibling
                const Cousin = uncleElement.lastElementChild.lastElementChild;
                Cousin.focus();
                // Cousin.setAttribute("style","background-color:purple");
            }else {
                 alert ("Veuillez entrer un chiffre situé entre 1 et 5.");
                inputNote.value="";
             };
         };
         if (inputNote.classList.contains ("couleurs")){
            const isValid=regex.test(inputNote.value);
            if (isValid){
                alert("ok");
                //choix background selon note
                //finir d'adapter les symboles
                inputNote.style.backgroundColor =`${inputNote.value =="1" ? "red":inputNote.value =="&" ? "red":inputNote.value =="2" ? "orange":inputNote.value =="é" ? "orange": inputNote.value == "3" ? "yellow" :inputNote.value =="\"" ? "yellow": "green"}`;
                
                //dire de passer au cousin
                const uncleElement = inputNote.parentElement.parentElement.nextElementSibling
                const Cousin = uncleElement.lastElementChild.lastElementChild;
                Cousin.focus();
                
            }else {
                alert ("Veuillez entrer un chiffre situé entre 1 et 4.");
                inputNote.value="";
            };
        };
    });
});




