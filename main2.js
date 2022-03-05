// /* function toggleDarkMode() {
//     let sectionElement = document.getElementById("main-background");//target the section element
//     let darkModeButtonElement = document.getElementById("dark-mode-btn");//target the dark mode button
//     let toggleswitch = document.getElementById("toggle-switch");//calling the toggle switch

// //if background is black, change background to white and text to black 
// if (sectionElement.style.background === "black"){ //triple equals for strict typing 
//     sectionElement.style.background = "white"; //set background to white
//     sectionElement.style.color= "black"; //set text to black
//     //darkModeButtonElement.innerHTML = "Switch to Dark Mode!";
//     toggleswitch.innerHTML= "Dark Mode";
//     toggleswitch.checked =false;
// }

// //if the background is not black, change background to black and text to white

// else {
//     sectionElement.style.background = "black"; //set background to black 
//    // darkModeButtonElement.innerHTML = "Switch to Light Mode!";
//    toggleswitch.innerHTML="Light Mode";
//     sectionElement.style.color= "white";
//     toggleswitch.checked=true;
// }
// }

// console.log('hi');

// /*
// <script>
// const body = document.querySelector('body');
// const toggle =document.getElementById('toggle');
// toggle.onclick= function (){
//    toggle.classList.toggle('active');
//    body.classList.toggle('active');
// }

// </script>
// */


// function toggleDarkMode() {
//     let sectionElement = document.getElementsByClassName("section");//target the section classes
//     let toggleswitch = document.getElementById("toggle-switch");//calling the toggle switch
//     let orangeSection = document.getElementById("phaseB");

// //if background is black, change background to other colors of each phase 
// if (sectionElement.section.style.background === "black"){ //triple equals for strict typing 
//     orangeSection.style.background ="#1AFFB75D";
//     sectionElement.phase1.style.background = "rgba(255, 183, 141, 0.873);"; //set phase 1 background color to peach
//     sectionElement.phase2.style.background= "lightblue";//set phase 2 background color to lightblue
//     sectionElement.phase3.style.background="lightseagreen";//set phase 3 background color  to seagreen
//     sectionElement.phase4.style.color= "black"; //set phase 4 text to black to be readable 
//     sectionElement.phase4.style.background="linen";//set phase4 to background color linen 
//     sectionElement.phase5.style.background="olvie";// set phase5 background color to olive
//     //toggleswitch.innerHTML= "Dark Mode";
//     toggleswitch.checked =false; 
// }

// //if the background is not black, change all section backgrounds to black and text to white

// else {
//     sectionElement.style.section.background="black";//set background of all sections to black
//     sectionElement.style.section.color="white";//set all text to white to be readable against black background
//     orangeSection.style.section.background="#1AFFB75D";
//     toggleswitch.checked=true;
//     /*
//     sectionElement.style.phase1.background = "black"; //set background to black
//     sectionElement.style.phase2.background="black"; 
//     sectionElement.style.phase3.background="black";
//     sectionElement.style.phase4.background="black";
//     sectionElement.style.phase5.background="black";
//     */ 
//    // darkModeButtonElement.innerHTML = "Switch to Light Mode!";
//   // toggleswitch.innerHTML="Light Mode";
   
// }
// }




// function toggleDarkMode() {
//     let sectionElement = document.getElementById("section");//target all the section elements
//     let toggleswitch = document.getElementById("toggle-switch");//calling the toggle switch

// if (sectionElement.style.section.background === "black"){ //triple equals for strict typing 
//     sectionElement.style.phase1.background = "rgba(255, 183, 141, 0.873);"; //set phase 1 background color to peach
//     sectionElement.style.phase2.background= "lightblue";//set phase 2 background color to lightblue
//     sectionElement.style.phase3.background="lightseagreen";//set phase 3 background color  to seagreen
//     sectionElement.style.phase4.color= "black"; //set phase 4 text to black to be readable 
//     sectionElement.style.phase4.background="linen";//set phase4 to background color linen 
//     sectionElement.style.phase5.background="olvie";// set phase5 background color to olive
//     //toggleswitch.innerHTML= "Dark Mode";
//     toggleswitch.checked =false; 
// }
// else {
//     sectionElement.style.background="black";//set background of all sections to black
//     sectionElement.style.color="white";//set all text to white to be readable against black background
//     toggleswitch.checked=true;
// }
// }



function toggleDarkMode (){
    var first_id=document.getElementById("first_id");
    var second_id=document.getElementById("second_id");
    var mainSection= document.getElementById("main-background");
    var darkModeBtnElement = document.getElementById("toggle-switch");
    var firstSection =document.getElementById("firstSection");
    var secondSection =document.getElementById("secondSection");
    var thirdSection= document.getElementById("thirdSection");
    var fourthSection=document.getElementById("fourthSection");
    var fifthSection=document.getElementById("fifthSection");
    var label=document.getElementById("label");
    var blue=document.getElementById("lightText");
    var footer=document.getElementById("footer");
    var nav = document.getElementById("nav");

    
//THIS IS DARK MODE CHANGES -MC
    if (firstSection.style.background == "black")
 // I made variables up at the top EX: var phaseA
 // I selected the variable selected style and then color because we are changing the styling so in order to change the font color I selected color. See line 121
     {
         nav.style.background="white";
          second_id.style.color="#462f2f";
        first_id.style.background="#793f09";
        first_id.style.color="green";
        mainSection.style.background="#faf0e6";
        firstSection.style.background="#ffb78dd9";
        secondSection.style.background="#add8e6d9";
        thirdSection.style.background="#20aaaad9";
        firstSection.style.color="black";
        secondSection.style.color="black";
        thirdSection.style.color="black";
        fourthSection.style.background= "#faf0e6d9";
        fourthSection.style.color= "black";
        fifthSection.style.color="black"; 
        fifthSection.style.background="#808000d9";
        label.innerText="Dark Mode";
        blue.style.color= "blue";
        footer.style.color="black";
        darkModeBtnElement.checked =false; 
    } 

    // THIS IS LIGHT MODE CHANGES -MC
    else
    // same thing here the background is not black then we change it to whatever you want. 
    // make diff IDs if you need to and use the ones you already have
     {
         nav.style.background="black";
         second_id.style.color="white";
         first_id.style.background="black";
         first_id.style.color="white";
        mainSection.style.background="black";
         mainSection.style.color="white";
       firstSection.style.background="black";
       secondSection.style.background= "black";
       firstSection.style.color= "white";
       secondSection.style.color="white";
       thirdSection.style.background="black";
       thirdSection.style.color="white";
       fourthSection.style.background="black";
        fourthSection.style.color= "white";
        fifthSection.style.color="white";
        fifthSection.style.background="black";
      blue.style.color="white";
      footer.style.color="white";
      label.innerText="Light Mode";
      label.style.color="white";
        darkModeBtnElement.checked=true;
    }
}