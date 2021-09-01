let burger = document.getElementById("burger");
let close_burger = document.getElementById("close_burger");
let ul_burger = document.getElementById("navigation_burger");
burger.addEventListener("click", function(){
    ul_burger.style.display = "block";
})
close_burger.addEventListener("click", function(){
    ul_burger.style.display = "none";
})
let lenth = document.getElementById("main_lenth");
let input = document.querySelector(".input_lenth");
let count = 0
lenth.addEventListener("click", function(){
    count++
    if(count == 1){
        input.style.opacity = .8;
        input.style.visibility = "visible";
    }
    if(count == 2){
        input.style.opacity = 0;
        input.style.visibility = "hidden";
        count = 0;
    }
})
let menuLenth = document.querySelector(".lenth");
let inputMenu = document.getElementById("menuSearch")
menuLenth.addEventListener("click", function(){
     count++
    if(count == 1){
        inputMenu.style.opacity = 0.8;
        inputMenu.style.visibility = "visible";
    }
    if(count == 2){
        inputMenu.style.opacity = 0;
        inputMenu.style.visibility = "hidden";
        count = 0;
    }
});
let mainLanguage = document.getElementById("main_language").innerText;
let language = document.getElementById("main_language");
let arrayLanguage = ["English", "Русский","Украинский"];
language.addEventListener("click", function(){
    let values = arrayLanguage.shift();
    arrayLanguage.push(values);
    language.innerHTML = values;
})
let menuLanguage = document.getElementById("menu_language");
menuLanguage.addEventListener("click", function(){
    let values = arrayLanguage.shift();
    arrayLanguage.push(values);
    menuLanguage.innerHTML = values;
})



let inputSubmit = document.querySelector(".input_submit");
let inputEmail = document.getElementsByName("input_email")[0].value;


