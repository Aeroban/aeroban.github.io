var hamburger;
var navMenu;


window.onload = function(){
    // Fade in effect for navbar
    document.getElementById("Navbar").className += " load";
    hamburger = document.querySelector(".navbar-hamburger");
    navMenu = document.querySelector(".navbar-links");
    allSections = document.querySelectorAll("section");

    for (let index = 0; index < allSections.length; index++) {
        var currSection = allSections[index];
        
        if(index%2 == 0){
            currSection.style.backgroundColor = "#eef8f7";
        }else{
            currSection.style.backgroundColor = "white";
        }
        
    }

    //Photo move from the right
    setTimeout(function(){
        document.querySelector(".section-1-right").style.opacity = 1; 
    }, 800);

    // LIGHTBOX----------------------
    var zoomImg = function(){
        var clone = this.cloneNode();
        clone.classList.remove("zoom");

        var lightbox = document.getElementById("lightbox-in");
        lightbox.innerHTML="";
        lightbox.appendChild(clone);

        lightbox = document.getElementById("lightbox-out");
        lightbox.classList.add("active");
    }

    //Get all images
    var images = document.getElementsByClassName("zoom");
    if(images.length > 0){
        for (let img of images){
            img.addEventListener("click", zoomImg);
        }
    }

    //Close lightbox when black part clicked
    document.getElementById("lightbox-out").addEventListener("click", function(){
        this.classList.remove("active")
    })
}

// Activate or Deactivate Hamburger
function toggleHamburger(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu when one of the links is clicked
function closeHamburger(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Reveal on Scroll
window.addEventListener('scroll', showElements);

function showElements(){
    var displaySects = document.querySelectorAll(".reveal");

    for(var i = 0; i < displaySects.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = displaySects[i].getBoundingClientRect().top;
        let revealPoint = 100;

        // Reveal only once
        if(revealTop < windowHeight - revealPoint){
            if((i == 1) & !(displaySects[1].classList.contains('active'))){
                setTimeout(() => {
                    showSkills();
                }, 700);
            }
            
            if((i == 3) & !(displaySects[3].classList.contains('active'))){
                setTimeout(() => {
                    showCertificates();
                }, 700);
            }

            displaySects[i].classList.add('active'); 
        }
    }
}

function showSkills(){
    var allSkills = document.querySelectorAll(".section-3-skills-item");

    let i = 0;
    let forwardInterval = setInterval(function(){
        allSkills[i].classList.add('active');

        if(i == 4){
            clearInterval(forwardInterval);
        }

        i++;
    }, 700);

    let j = 9;
    let backInterval = setInterval(function(){
        allSkills[j].classList.add('active');

        if(j == 5){
            clearInterval(backInterval);
        }

        j--;
    }, 700);

    return;
}

function showCertificates(){
    var allCertificatesLeft = document.querySelectorAll(".certificate-card");
    var allCertificatesRight = document.querySelectorAll(".certificate-card-right");

    let i = 0;
    let forwardInterval = setInterval(function(){
        allCertificatesLeft[i].classList.add('active');

        if(i == 3){
            clearInterval(forwardInterval);
        }

        i++;
    }, 700);

    let j = 0;
    let backInterval = setInterval(function(){
        allCertificatesRight[j].classList.add('active');

        if(j == 3){
            clearInterval(backInterval);
        }

        j++;
    }, 700);

    return;
}