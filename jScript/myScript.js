function changeColor(white,black,left,width) {
    document.getElementById(white).style.color = "white";
    document.getElementById(black).style.color = "black";
    document.querySelector(".line").style.left = left;
    document.querySelector(".line").style.width =width;
}
function resetColor(white,black,left,width) {
    document.getElementById(white).style.color = "white";
    document.getElementById(black).style.color = "black";
    document.querySelector(".line").style.left = left;
    document.querySelector(".line").style.width = width;
}
function changeColorHome(page) {
    switch (page) {
        case about:     changeColor("home","about","71px","85px"); break;
        case portfolio: changeColor("home","portfolio","71px","85px"); break;
        case contact:   changeColor("home","contact","71px","85px"); break;
    }
}
function resetColorHome(page) {
    switch (page) {
        case about:     resetColor("about","home","255px","95px"); break;
        case portfolio: resetColor("portfolio","home","452px","150px"); break;
        case contact: resetColor("contact","home","706px","127px"); break;
    }
}
function changeColorAbout(page) {
    switch (page) {
        case home: changeColor("about","home","255px","95px"); break;
        case portfolio: changeColor("about","portfolio","255px","95px"); break;
        case contact: changeColor("about","contact","255px","95px"); break;
    }
}
function resetColorAbout(page) {
    switch (page) {
        case home: resetColor("home","about","71px","85px"); break;
        case portfolio: resetColor("portfolio","about","452px","150px"); break;
        case contact: resetColor("contact","about","706px","127px"); break;
    }
}
function changeColorPortfolio(page) {
    switch (page) {
        case home: changeColor("portfolio","home","452px","150px"); break;
        case about: changeColor("portfolio","about","452px","150px"); break;
        case contact: changeColor("portfolio","contact","452px","150px"); break;
    }          
}
function resetColorPortfolio(page) {
    switch (page) {
        case home: resetColor("home","portfolio","71px","85px"); break;
        case about: resetColor("about","portfolio","255px","95px"); break
        case contact: resetColor("contact","portfolio","706px","127px"); break
    }    
}
function changeColorContact(page) {
    switch (page) {
        case home: changeColor("contact","home","706px","127px"); break;
        case about: changeColor("contact","about","706px","127px"); break;
        case portfolio: changeColor("contact","portfolio","706px","127px"); break;
    }          
}
function resetColorContact(page) {
    switch (page) {
        case home: resetColor("home","contact","71px","85px");break;
        case about: resetColor("about","contact","255px","95px"); break
        case portfolio: resetColor("portfolio","contact","452px","150px"); break
    }        
}
