// ici querySElector il sélectionne le 1er élément avec le nom "test"
//ici comme c'est une class j'ai mis un point devant 
//ici dans le tableau c'est la lettre d
const test=document.querySelector(".test");


//pr que tu comprennes comment se déplacer parmi tes éléments (ici un tableau)
//tu passes par le parent, tonton, etc....
//ici ça se déclenches quand tu le survoles avec ta souris
test.addEventListener("mouseover", () => {
    //le parent
    const parent = test.parentElement
    parent.setAttribute("style", "background-color:yellow");
    //le frere suivant du parent
    const tonton = test.parentElement.nextElementSibling;
    tonton.setAttribute("style", "background-color:green");
    //le frère précédent du parent
    const tata = test.parentElement.previousElementSibling
    tata.setAttribute("style", "background-color:pink");
    //l'enfant du "tonton"
    // const cousin = tonton.lastElementChild;
    // cousin.setAttribute("style", "background-color:purple");

})
//fais go live
//et ensuite refais en retirant les  // sur les 2 dernières lignes pr repérer le cousin