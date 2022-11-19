let btns = document.querySelector(".btns");
let graduates = document.getElementById("graduates");
let style = document.getElementById("style");

btns.addEventListener('click', function(){
    if (graduates.style.display != 'flex')
      {graduates.style.display = 'flex';    
    } if (style.style.display != 'flex')
        {style.style.display = "flex";
    }

})

let btnss = document.querySelector(".btnss");
let graduatess = document.getElementById("graduatess");
let styles = document.getElementById("styles");

btnss.addEventListener('click', function(){
    if (graduatess.style.display != 'flex')
      {graduatess.style.display = 'flex';    
    } if (styles.style.display != 'flex')
        {styles.style.display = "flex";
    }

})

let btnsss = document.querySelector(".btnsss");
let graduatesss = document.getElementById("graduatesss");
let graduatessss = document.getElementById("graduatessss");
let styless = document.getElementById("styless");

btnsss.addEventListener('click', function(){
    if (graduatesss.style.display != 'flex')
      {graduatesss.style.display = 'flex';    
    } if (styless.style.display != 'flex')
        {styless.style.display = "flex";

    } if (graduatessss.style.display != 'flex')
        {graduatessss.style.display = "flex"
    }

})

let btnssss = document.querySelector(".btnssss");
let stylesss = document.getElementById("stylesss");

btnssss.addEventListener('click', function(){
    if (stylesss.style.display != 'flex')
        {stylesss.style.display = "flex";
    }
})

function page() {
    document.location.href = "range.html";
}
function pages3() {
    document.location.href = "topic.html";
}

function pages31() {
    document.location.href = "index.html";
}