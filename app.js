const change= document.querySelector(".btn");
const change1= document.querySelector(".btn1");
const pcontainer=document.querySelector(".p-container");
const dcontainer = document.querySelector(".d-container");



change.addEventListener("click", function()
    {
        pcontainer.style.display="none";
        dcontainer.style.display="block";
    }
)

change1.addEventListener("click", function()
    {
        dcontainer.style.display="none";
        pcontainer.style.display="block";
    }
)