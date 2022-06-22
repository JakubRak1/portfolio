/* Nav bar */
let navBar = document.getElementById(`navBar`);
let hamburgerTransmition = document.getElementById(`hambNav`);
let hamb1 = document.getElementById(`firstHamb`);
let hamb2 = document.getElementById(`secondHamb`);
let hamb3 = document.getElementById(`thirdHamb`);
let navList = document.getElementById(`navList`);



/* Popup Windows */
let project1Btn = document.getElementById(`project1`);
let project2Btn = document.getElementById(`project2`);
let project3Btn = document.getElementById(`project3`);
let project4Btn = document.getElementById(`project4`);
let closeProject1Btn = document.getElementById(`closeProject1`);
let closeProject2Btn = document.getElementById(`closeProject2`);
let closeProject3Btn = document.getElementById(`closeProject3`);
let closeProject4Btn = document.getElementById(`closeProject4`);
let project_1 = document.getElementById(`windowProject1`);
let project_2 = document.getElementById(`windowProject2`);
let project_3 = document.getElementById(`windowProject3`);
let project_4 = document.getElementById(`windowProject4`);

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
project1Btn.onclick = function (){
  project_1.style.display="block";
};
closeProject1Btn.onclick = function (){
  project_1.style.display="none";
};

project2Btn.onclick = function (){
    project_2.style.display="block";
};
closeProject2Btn.onclick = function (){
    project_2.style.display="none";
};
project3Btn.onclick = function (){
    project_3.style.display="block";
};
closeProject3Btn.onclick = function (){
    project_3.style.display="none";
};
project4Btn.onclick = function (){
    project_4.style.display="block";
};
closeProject4Btn.onclick = function (){
    project_4.style.display="none";
};