let charArray = [];

const charFarctory = (name, init) => {
    return {name,init};
}

function listMaker(i) {

}

function genCombatTrack () {
    let trackerListSpace = document.getElementById("list");
    //let list = document.createElement("div");
    //list.setAttribute("class", "list");
    //list.setAttribute("id", "list");
    //trackerListSpace.appendChild(list);
    console.log("The gen combat first")
    if (charArray === []) {
        newCharForm();
        console.log("We didn't make a list")
    } else {
        clearList("list");
        console.log("gen combat before for loop")
        for (let i = 0; i <charArray.length; i++) {
            let index = i;
            let eachCharacterContainer = document.createElement("div");
            eachCharacterContainer.setAttribute("class", "character-info");
            eachCharacterContainer.setAttribute("id", "char-" + i);
            let eachChar = document.createElement("h2");
            let eachInit = document.createElement("h4");
            eachChar.innerText = charArray[i].name;
            eachInit.innerHTML = charArray[i].init;
            trackerListSpace.appendChild(eachCharacterContainer);
            eachCharacterContainer.appendChild(eachChar);
            eachCharacterContainer.appendChild(eachInit);
            let clearbut = document.createElement("button");
            clearbut.setAttribute("class", "clear");
            clearbut.innerText = "Dead";
            clearbut.addEventListener("click", () => {
            clearList("char-" + i);
            charArray.splice(index, 1);
            genCombatTrack();
             });
            eachCharacterContainer.appendChild(clearbut);
            //genCombatTrack();
        }
        //newCharForm();
    } 
}

const clearList = (containingElementToClear) => {
  const parentElement = document.getElementById(containingElementToClear);
  
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
        console.log("This clearlist even executing?")
      }
  
  
};


function newCharForm() {
    let trackerFormContainer = document.getElementById("container");
    let trackerForm = document.createElement("form");
    let charName = document.createElement("input");
    charName.setAttribute("type", "text");
    charName.setAttribute("name", "name");
    charName.setAttribute("id", "nameid");
    charName.setAttribute("value", "Character Name");
    let charInitiative = document.createElement("input");
    charInitiative.setAttribute("type", "number");
    charInitiative.setAttribute("name", "initiative");
    charInitiative.setAttribute("id", "initiativeid");
    charInitiative.setAttribute("value", 0);
    let charSub = document.createElement("button");
    charSub.setAttribute("class", "sub");
    charSub.innerText = "Add Char!";
    charSub.addEventListener("click", () => {
        const getCharName = charName.value;
        const getCharInit = charInitiative.value;
        let newCharToPush = charFarctory(getCharName, getCharInit);
        charArray.push(newCharToPush);
        charArray.sort((a,b) => {
            return b.init - a.init;
        });
        //clearList("list");
        genCombatTrack();
        //console.log(charArray[4]);
    });
    let clearbut = document.createElement("button");
    clearbut.setAttribute("class", "clear");
    clearbut.innerText = "Clear";
    clearbut.addEventListener("click", () => {
        clearList("list");
        charArray = [];
    });
    trackerFormContainer.appendChild(trackerForm);
    trackerForm.appendChild(charName);
    trackerForm.appendChild(charInitiative);
    trackerFormContainer.appendChild(charSub);
    trackerFormContainer.appendChild(clearbut);

}
newCharForm();
//genCombatTrack();