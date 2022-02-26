function toggleDarkMode() {
    let sectionElement = document.getElementById("main-background");//target the section element
    let darkModeButtonElement = document.getElementById("dark-mode-btn");//target the dark mode button


//if background is black, change background to white and text to black 
if (sectionElement.style.background === "black"){ //triple equals for strict typing 
    sectionElement.style.background = "white"; //set background to white
    sectionElement.style.color= "black"; //set text to black
    darkModeButtonElement.innerHTML = "Switch to Dark Mode!";
}

//if the background is not black, change background to black and text to white

else {
    sectionElement.style.background = "black"; //set background to black 
    darkModeButtonElement.innerHTML = "Switch to Light Mode!";
    sectionElement.style.color= "white";
}
}

console.log('hi');

/*
<script>
const body = document.querySelector('body');
const toggle =document.getElementById('toggle');
toggle.onclick= function (){
   toggle.classList.toggle('active');
   body.classList.toggle('active');
}

</script>
*/
