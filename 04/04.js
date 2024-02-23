document.addEventListener("DOMContentLoaded",()=>{
    //버튼을 가져오기
    const bt1 = document.querySelector("#bt1");

    bt1.addEventListener("click",()=>{
        changeDice();
    });
});

function changeDice(){
    const rand = Math.floor(Math.random()*6)+1;
    const img = document.querySelector("#img");
    img.setAttribute("src", `images/${rand}.png`);
}

const changeDice2=()=>{
    const rand = Math.floor(Math.random()*6)+1;
    const img = document.querySelector("#img");
    img.setAttribute("src", `images/${rand}.png`);
}

