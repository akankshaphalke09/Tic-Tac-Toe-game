let btn=document.querySelectorAll(".inner");
let res=document.querySelector("#reset");
let newg=document.querySelector("#newgame")
let msgcont=document.querySelector("#container")
let msg=document.querySelector(".winner")
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let turno=true;
btn.forEach((box)=>{
    box.addEventListener("click",()=>{

   
    if(turno){
        box.innerText="O";
        turno=false;       
    }
    else{
       
        box.innerText="X";
        turno=true;       
    }
        box.disabled=true;
        
        checkwin();         
    }
    
);
}
);

const disbtn=()=>{
    for(let i of btn){
        i.disabled=true;       
    }

};

const enabtn=()=>{
    for(let i of btn){
        i.disabled=false;
        i.innerText="";
        }
};
const reset=()=>{
    turno=true;
    enabtn();
    msg.classList.add("hide");
};


const showwin=(win)=>{
    
    msg.innerText=`Congratulations WINNER! ${win}`;
    msg.classList.remove("hide");
   disbtn();
};
const checkwin=()=>{
    for(let pattern of win){
       let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;
      if(pos1 !="" && pos2 !="" && pos3 !=""){
      
      if(pos1===pos2 && pos2===pos3 ){
            console.log("win");
            showwin(pos1);
            console.log("win");
      }
    }   
    
}
};



res.addEventListener("click",reset);
newg.addEventListener("click",reset);



