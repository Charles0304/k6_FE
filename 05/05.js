document.addEventListener("DOMContentLoaded",()=>{
    //버튼을 가져오기
    const bt1 = document.querySelector("#bt1");
    

    

    bt1.addEventListener("click",()=>{
        changeDice4();
    });
});
const changeDice1=()=>{
    const imgs=document.querySelectorAll("img");
    imgs.forEach((img)=>{
        const rand = Math.floor(Math.random()*6)+1;
        img.setAttribute("src", `images/${rand}.png`);
    })
}

const changeDice2=()=>{
    const imgs = document.querySelectorAll("img");
    for(let img of imgs){
        const rand = Math.floor(Math.random()*6)+1;
        img.setAttribute("src", `images/${rand}.png`);
    }
}

const changeDice3=()=>{
    for(let i=1;i<=3;i++){
        const rand = Math.floor(Math.random()*6)+1;
        const img = document.querySelector(`#img${i}`);
        img.setAttribute("src", `images/${rand}.png`);
    }

}

const changeDice4=()=>{
    const imgs = document.querySelectorAll("img");
    const btsNum = [1,1,1];
    for(let [idx,bt] of imgs.entries()){
        const rand = Math.floor(Math.random()*6)+1;
        bt.setAttribute("src", `images/${rand}.png`);
        btsNum[idx]=rand;

    }

}



