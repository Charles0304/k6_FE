document.addEventListener("DOMContentLoaded",()=>{
    //버튼을 가져오기
    const btns = document.querySelectorAll("button");
    for(let btn of btns){
        btn.addEventListener("click",()=>{
            let num = btn.value;
            changeDice(num);
        });
    }
    
});

function changeDice(n){
    const rand = Math.floor(Math.random()*6)+1;
    const img = document.querySelector("#img");
    const img2 = document.querySelector("#img2");
    img.setAttribute("src", `images/${rand}.png`);
    img2.setAttribute("src", `images/${n}.png`);
    if(n==rand){
        document.querySelector("#result").innerHTML="맞춤";
    }else{
        document.querySelector("#result").innerHTML="틀림";
    }
}

const changeDice2=()=>{
    const rand = Math.floor(Math.random()*6)+1;
    const img = document.querySelector("#img");
    img.setAttribute("src", `images/${rand}.png`);
}

