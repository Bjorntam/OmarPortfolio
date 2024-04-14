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
        case contact:   resetColor("contact","home","706px","127px"); break;
    }
}
function changeColorAbout(page) {
    switch (page) {
        case home:      changeColor("about","home","255px","95px"); break;
        case portfolio: changeColor("about","portfolio","255px","95px"); break;
        case contact:   changeColor("about","contact","255px","95px"); break;
    }
}
function resetColorAbout(page) {
    switch (page) {
        case home:      resetColor("home","about","71px","85px"); break;
        case portfolio: resetColor("portfolio","about","452px","150px"); break;
        case contact:   resetColor("contact","about","706px","127px"); break;
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


function toggleText(info,toggle,expand,reset,dotitem,dotinfo) { 
    var info = document.getElementById(info);
    var toggle = document.getElementById(toggle);

    if (info.style.opacity === "0" || info.style.opacity === "") {
        toggle.style.height = expand;
        info.style.visibility = "visible";
        info.style.opacity = "1";
        info.style.transition = "opacity 1s ease, visibility 2s ease";       
    } else {
        toggle.style.height = reset;
        info.style.visibility ="hidden";
        info.style.opacity = "0";
        info.style.transition = "opacity 0.2s ease, visibility 0.5s ease";
    }

    // Add event listener to the document body
    document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not part of .item1 or .tbinfo
    if (!event.target.closest(dotitem) && !event.target.closest(dotinfo)) {
        toggle.style.height = reset; 
        info.style.opacity = "0"; 
        info.style.visibility = "hidden";
        info.style.transition = "opacity 0.2s ease, visibility 0.5s ease";
    }   
});
}

function toggleItem1(){
        toggleText("tbinfo","tbtoggle","400px","226px",".item1",".tbinfo");
}
function toggleItem2(){
        toggleText("figinfo","figtoggle","400px","210px",".item2",".figinfo");
}
function toggleItem3(){
        toggleText("pcinfo","pctoggle","400px","230px",".item3",".pcinfo");
}






// function toggleText() { 
//     var tbinfo = document.getElementById("tbinfo");
//     var tbtoggle = document.getElementById("tbtoggle");

//     if (tbinfo.style.opacity === "0" || tbinfo.style.opacity === "") {
//         tbtoggle.style.height = "500px";
//         tbinfo.style.visibility = "visible";
//         tbinfo.style.opacity = "1";
//         tbinfo.style.transition = "opacity 1s ease, visibility 2s ease";       
//     } else {
//         tbtoggle.style.height = "226px";
//         tbinfo.style.visibility ="hidden";
//         tbinfo.style.opacity = "0";
//         tbinfo.style.transition = "opacity 0.2s ease, visibility 0.5s ease";
//     }
// }

// // Add event listener to the document body
// document.body.addEventListener('click', function(event) {
//     // Check if the clicked element is not part of .item1 or .tbinfo
//     if (!event.target.closest('.item1') && !event.target.closest('.tbinfo')) {
//         resetText(); // Reset the text
//     }   
// });

// // Function to reset the text to its initial state
// function resetText() {
//     var tbinfo = document.getElementById("tbinfo");
//     var tbtoggle = document.getElementById("tbtoggle");

//     tbtoggle.style.height = "226px"; // Reset height
//     tbinfo.style.opacity = "0"; // Hide the element
//     tbinfo.style.visibility = "hidden"; // Hide the element
//     tbinfo.style.transition = "opacity 0.2s ease, visibility 0.5s ease";
// }
