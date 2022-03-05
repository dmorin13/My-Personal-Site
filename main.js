function toggleDarkMode (){
    
    var darkModeBtnElement = document.getElementById("toggle-switch")
    var mainBackground= document.getElementById("main-background");
    var firstSection =document.getElementById("firstSection");
    var secondSection =document.getElementById("secondSection");
    var thirdSection= document.getElementById("thirdSection");
    var fourthSection=document.getElementById("fourthSection");
    var fifthSection=document.getElementById("fifthSection");
    var sixthSection=document.getElementById("sixthSection");
    var label=document.getElementById("label");
    var heading = document.getElementById("together");
    var title=document.getElementById("first_id");
    var text=document.getElementById("first_text");
    var nav = document.getElementById("nav");
//THIS IS DARK MODE CHANGES -MC
    if (firstSection.style.background == "black")
 // I made variables up at the top EX: var phaseA
 // I selected the variable selected style and then color because we are changing the styling so in order to change the font color I selected color. See line 121
     {
        nav.style.background="white";
         title.style.background= "#793f09";
         text.style.color="black";
        heading.style.background="#FCFCFC";
        mainBackground.style.background="#faf9f3";
        firstSection.style.background="#ffb78dd9";
        secondSection.style.background="#add8e6d9";
        thirdSection.style.background="#f0f8ff";
        firstSection.style.color="black";
        secondSection.style.color="black";
        thirdSection.style.color="black";
        fourthSection.style.background= "#faf0e6d9";
        fourthSection.style.color= "black";
        fifthSection.style.color="black"; 
        fifthSection.style.background="#eaf6ea";
        sixthSection.style.background="#FFFEE3";
        sixthSection.style.color="black";
        label.innerText="Dark Mode";
        label.style.color="black";
        darkModeBtnElement.checked =false; 
    } 

    // THIS IS LIGHT MODE CHANGES -MC
    else
    // same thing here the background is not black then we change it to whatever you want. 
    // make diff IDs if you need to and use the ones you already have
     {
        nav.style.background="black";
         text.style.color="white";
         title.style.background="black";
         title.style.color="white";
        heading.style.background="black";
        mainBackground.style.background="black";
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
        sixthSection.style.background="black";
        sixthSection.style.color="white";
      label.innerText="Light Mode";
      label.style.color="white";
        darkModeBtnElement.checked=true;
    }
}