let boss = document.querySelector(".boss");
let partsss = document.getElementById("partsss");
let dropDownArrow = document.getElementById("featuresDropDownArrow");

boss.addEventListener('click', function(){
    if (partsss.style.display != 'grid')
      {partsss.style.display = 'grid';    
      dropDownArrow.src = "/icon-arrow-up.svg"
    } else {
        partsss.style.display = "none"
        dropDownArrow.src = "./icon-arrow-down.svg"
    }
})

function page() {
    document.location.href = "range.html";
}
function pages() {
    document.location.href = "profile.html";
}
function pages1() {
    document.location.href = "student.html";
}
function pages2() {
    document.location.href = "topic.html";
}
function pages3() {
    document.location.href = "topic.html";
}
function pages4() {
    document.location.href = "lab.html";
}
function pages5() {
    document.location.href = "note.html";
}
function pages6() {
    document.location.href = "list.html";
}
function pages31() {
    document.location.href = "index.html";
}