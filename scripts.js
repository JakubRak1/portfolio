/* Nav bar */
let navBar = document.getElementById(`navBar`);
let hamburgerTransmition = document.getElementById(`hambNav`);
let hamb1 = document.getElementById(`firstHamb`);
let hamb2 = document.getElementById(`secondHamb`);
let hamb3 = document.getElementById(`thirdHamb`);
let navList = document.getElementById(`navList`);



/* Popup Windows */
let project1Btn = document.getElementById(`project1`);
let project1Img = document.getElementById(`gameGuess`);
let project2Btn = document.getElementById(`project2`);
let project2Img = document.getElementById(`gameDice`);
let project3Btn = document.getElementById(`project3`);
let project3Img = document.getElementById(`piano`);
let project4Btn = document.getElementById(`project4`);
let project4Img = document.getElementById(`toDoList`);
let closeProject1Btn = document.getElementById(`closeProject1`);
let closeProject2Btn = document.getElementById(`closeProject2`);
let closeProject3Btn = document.getElementById(`closeProject3`);
let closeProject4Btn = document.getElementById(`closeProject4`);
let project_1 = document.getElementById(`windowProject1`);
let project_2 = document.getElementById(`windowProject2`);
let project_3 = document.getElementById(`windowProject3`);
let project_4 = document.getElementById(`windowProject4`);

let popup = function (nrOfProject){
    nrOfProject.style.display="block";
}
let closePopup = function (nrOfProject){
    nrOfProject.style.display="none";
}





/* Burger bar */
hamburgerTransmition.onclick = function (){
    hamb1.classList.toggle(`change1`);
    hamb2.classList.toggle(`change2`);
    hamb3.classList.toggle(`change3`);
    hamburgerTransmition.classList.toggle(`change4`);
    navList.classList.toggle(`visibility`);
    navBar.classList.toggle(`navBarFixed`);
};


/* Pop Windows */
/* First project popup */
project1Btn.onclick = function (){
    popup(project_1);
} ;
project1Img.onclick = function (){
    popup(project_1);
};
closeProject1Btn.onclick = function (){
  closePopup(project_1);
};
/* Second project popup */
project2Btn.onclick = function (){
    popup(project_2);
};
project2Img.onclick = function (){
    popup(project_2);
};
closeProject2Btn.onclick = function (){
    closePopup(project_2);
};
/* Third project popup */
project3Btn.onclick = function (){
    popup(project_3);
};
project3Img.onclick  = function (){
    popup(project_3);
}
closeProject3Btn.onclick = function (){
    closePopup(project_3);
};
/* Last project popup */
project4Btn.onclick = function (){
    popup(project_4);
};
project4Img.onclick = function (){
    popup(project_4);
};
closeProject4Btn.onclick = function (){
    closePopup(project_4);
};