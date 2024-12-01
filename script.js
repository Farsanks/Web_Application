
const input=document.querySelector("input");
const adduserButton = document.querySelector("button");
const detailcontainer = document.querySelector(".details");




 adduserButton.onclick=()=>{
    

    fetch("http://localhost:3001/user/adduser",{
        method: "POST",
        headers:{
            "content-type":"application/json",
    
        },
        body:JSON.stringify({
            id:Date.now(),
            name:input.value,
        })
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        displayuser();
    });

    input.value="";
}


function displayuser(){
    let section =""
    fetch("http://localhost:3001/displayuser")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            section +=`<section>${element.name}</section>`;
        });

        detailcontainer.insertAdjacentHTML("beforeend",section);
    });
}