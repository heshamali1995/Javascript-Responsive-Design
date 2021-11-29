// Start Changing the header image

let mainHeader = document.querySelector("header"),
    allPhotos = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function changePhoto() {
    if (backgroundOption === true) {
        let onePhoto = Math.floor(Math.random() * allPhotos.length);
        mainHeader.style.backgroundImage = 'url("images/' + allPhotos[onePhoto] + '")';
        mainHeader.style.transition = "all 0.5s ease"
    }
}
window.setInterval(changePhoto, 4000);

// End Changing the header image

// Open the setting box

let settingBox = document.getElementById("box");

settingBox.onclick = function() {
    document.querySelector(".setting").classList.toggle("open");
}

// End the setting box

// Start switch colors

let colorList = document.querySelectorAll(".colors-list li");
let mainColor = localStorage.getItem("color-option");

colorList.forEach((oneColor) => {
    oneColor.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
        // Set Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);
        // Remove active class
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active")
        })
        // Add active class
        e.target.classList.add("active")
    })
})

// Remove active class from local storage

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("color-option"));
    // Remove active class
    document.querySelectorAll(".colors-list li").forEach((element) => {
        element.classList.remove("active")
    // Add active class
    if (mainColor === element.dataset.color) {
        element.classList.add("active")
    }
    })
}

// End switch colors

// Start switch background

let backgroundOption = true;
let backgroundList = document.querySelectorAll(".backgrounds span");
let setBackground = localStorage.getItem("local-background");

backgroundList.forEach((oneBackground) => {
    oneBackground.addEventListener("click", (e) => {
        // remove active class
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active")
        })
        // add active class
        e.target.classList.add("active");
        // Stop changing the images
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            localStorage.setItem("local-background", true)
        }
        else {
            backgroundOption = false;
            localStorage.setItem("local-background", false);
        }
    })
})

// set local storage

if (setBackground !== null) {
    if (setBackground === "true") {
        backgroundOption = true
    }
    else {
        backgroundOption = false
    }
    // remove active class
    document.querySelectorAll(".backgrounds span").forEach((span) => {
        span.classList.remove("active");
    });
    // add active class
    if (setBackground === "true") {
        document.querySelector(".yes").classList.add("active")
    }
    else {
        document.querySelector(".no").classList.add("active")
    }
}

// End switch background

// Start Navigation Bullets

let scrollBullets = document.querySelectorAll(".nav-bullets .bullet .clickable");
let scrollLinks = document.querySelectorAll(".nav-list li");

function scrollToView(elements) {
    elements.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}

scrollToView(scrollBullets);
scrollToView(scrollLinks);

// End Navigation Bullets

// Show/Hide Bullets

let changeBullets = document.querySelectorAll(".option-bullets .bullets span");
let bulletsContainer = document.querySelector(".nav-bullets");
let localBullet = localStorage.getItem("local-bullet");

changeBullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        // Show/Hide bullets
        if (e.target.dataset.display === "show") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("local-bullet", "block");
        }
        else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("local-bullet", "none");
        }
        // Remove active class
        document.querySelectorAll(".option-bullets .bullets span").forEach((span) => {
            span.classList.remove("active")
        })
        // Add active class
        e.target.classList.add("active")
    })
})


if (localBullet !== null) {
    // Set bullets
    if (localBullet === "block") {
        bulletsContainer.style.display = "block";
    }
    else {
        bulletsContainer.style.display = "none";
    }
    // Remove active class
    document.querySelectorAll(".option-bullets .bullets span").forEach((span) => {
        span.classList.remove("active");
        // Add active class
        if (localBullet === "block") {
            document.querySelector(".bullets .yes").classList.add("active")
        }
        else {
            document.querySelector(".bullets .no").classList.add("active")
        }
    })
}

// End Show/Hide Bullets

// Reset Options

let optionButton = document.querySelector(".default");

optionButton.onclick = function() {
    /*     localStorage.removeItem("color-option");
    localStorage.removeItem("local-background");
    localStorage.removeItem("local-bullet"); */
    localStorage.clear();
    window.location.reload();
}

// End reset Options 

// Start Pop Up Images

let galleryImages = document.querySelectorAll(".gallery .gal-body img");

galleryImages.forEach((oneImage) => {
    oneImage.addEventListener("click", (e) => {
        // Create overlay
        let overlay = document.createElement("div"),
            overlayAttr = document.createAttribute("class");
        overlayAttr.value = "pop-up";
        overlay.setAttributeNode(overlayAttr);
        document.body.appendChild(overlay);
        
        // Create Pop-Up Box
        let popUpBox = document.createElement("div"),
            popUpBoxAttr = document.createAttribute("class");
        popUpBoxAttr.value = "pop-box";
        popUpBox.setAttributeNode(popUpBoxAttr);
        overlay.appendChild(popUpBox);

        // Create Image
        let popUpImage = document.createElement("img");
        popUpImage.src = oneImage.src;
        popUpBox.appendChild(popUpImage)

        // Create Span
        let closeSpan = document.createElement("span"),
            closeButton = document.createTextNode("X"),
            closeSpanAttr = document.createAttribute("class");
        closeSpanAttr.value = "close-span";
        closeSpan.setAttributeNode(closeSpanAttr);
        closeSpan.appendChild(closeButton);
        popUpBox.appendChild(closeSpan)
    })
})

// Remove Pop Up

document.addEventListener("click", (e) => {
    if (e.target.className === "close-span") {
        document.querySelector(".pop-up").remove();
    }
})

// End Pop Up Images

// Show Menu Bars

let menuBar = document.querySelector("header i"),
    menuList = document.querySelector("header .nav-list");

menuBar.onclick = function() {
    menuList.classList.toggle("open");
}

document.addEventListener("click", (e) => {
    if (e.target !== menuBar && e.target !== menuList) {
        menuList.classList.remove("open")
    }
})

// End Menu Bars