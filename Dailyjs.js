const usertitle = document.getElementById("title");
const usercomment = document.getElementById("textarea");

const container = document.querySelector(".container");




const setRem = () => {
    const div = document.createElement("div");
    div.setAttribute("class","task");

    const innerdiv = document.createElement("div");
    innerdiv.setAttribute("class","textarea1");
    div.append(innerdiv);

    const innerivpara = document.createElement("p");
    innerivpara.setAttribute("id","textareaelement");
    innerdiv.append(innerivpara);

    const innerdivcomnt = document.createElement("span");
    innerdivcomnt.setAttribute("id","textareaelement1");
    innerdiv.append(innerdivcomnt);


    const divbutton = document.createElement("button");
    divbutton.setAttribute("class","deletebutton");
    divbutton.innerText = "-";
    div.append(divbutton);

    div.addEventListener("click",()=>{
        removeDivfromscreen();
    })
    




    innerivpara.innerText = "TITLE : " + usertitle.value;
    innerdivcomnt.innerText = "DISCRIPTION : " + usercomment.value;

    
    localStorage.setItem(usertitle.value,usercomment.value);

    


    container.append(div);

}


const removeDivfromscreen = () =>{
    const divid = document.querySelector(".task");
    divid.remove();

}

