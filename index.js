var settingmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn")
var postImg = document.getElementById("post-imgg")
function SettingsMenuToggle(){
    settingmenu.classList.toggle("setting-menu-height");
}
postImg.onclick = function(){
let String = postImg.src
console.log(String)
localStorage.setItem("post",String);
console.log(localStorage.getItem("post"))
document.getElementById("post-imgg")
console.log(document.getElementById("post-imgg"))
// document.body.firstChild.firstChild.src = localStorage.getItem("post")
document.getElementsByClassName("post-click").firstChild.src = localStorage.getItem("post")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}