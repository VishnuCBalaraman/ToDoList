const input = document.getElementById("ip");
const lc = document.getElementById("list_container");

function add()
{
    if(input.value==="")
        alert("Enter something")
    
    else 
    {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }    
    input.value = "";
    save();
}


lc.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);



function save(){
    localStorage.setItem("data",lc.innerHTML);
}


function display(){
    lc.innerHTML = localStorage.getItem("data");
}

display();