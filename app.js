let boxes = document.querySelectorAll(".box");
let turnO= true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
         checkWInner();
    })
})
 const checkWInner = ()=>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1Val = boxes[pattern[0]].innerText ;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3Val = boxes[pattern[2]].innerText ;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos1Val == pos3Val){
                printWinner(pos1Val);
            }
        }
    }
 }
let msg = document.querySelector(".msg");
const printWinner = (winner) =>{
    
    msg.innerText=`Congratulation, The winner is ${winner}`;
    disableBox();
    
}
const disableBox = ()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enableBox = () => {
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}

let resetBtn = document.querySelector("#btn");
resetBtn.addEventListener("click",() =>{
    clearBox();
    enableBox();
})
const clearBox =() =>{
    boxes.forEach((box) =>{
        box.innerText="";
    })
    msg.innerText="";
}