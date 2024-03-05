let answer = 0;
let isEnd=false;

document.addEventListener("DOMContentLoaded",()=>{
    answer = Math.floor(Math.random()*10)+1;
})

const check=()=>{
    const img = document.querySelector("#img");
    const input = document.querySelector("#input");
    const btn = document.querySelector("button");

    if(input.value==''){
        alert("숫자를 입력하세요");
        input.focus();
        return;
    }

    if(isEnd){
        isEnd=false;
        input.style.display="inline";
        btn.innerHTML="확인"
        answer = Math.floor(Math.random()*10)+1;
        img.setAttribute("src","04_updown/what.png");
        
    }

    if(input.value==answer){
        img.setAttribute("src","04_updown/good.png");
        input.style.display="none";
        btn.innerHTML="재시작"
        input.value="";
        isEnd=true;
    }else if(input.value<answer){
        img.setAttribute("src","04_updown/up.png");
    }else if(input.value>answer){
        img.setAttribute("src","04_updown/down.png");
    }
}

/*document.addEventListener("DOMContentLoaded",()=>{
    const ipDownImg = document.querySelector("img");
    const numInput = document.getElementById("input");
    const bt = document.querySelector("button");

    let n;
    let flag=false;

    bt.addEventListener("click",(e)=>{
        e.preventDefault();//새로고침과 같은 기본동작 방지
        if(!flag){
            n=Math.floor(Math.random()*100)+1;
            flag=true;
        }

        if(numInput.value==''){
            alert("숫자를 입력하세요");
            numInput.focus();
            return;
        }
    })
})*/