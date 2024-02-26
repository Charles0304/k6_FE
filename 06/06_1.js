// document.addEventListener("DOMContentLoaded",()=>{
//     //버튼을 가져오기
//     const btns = document.querySelectorAll("button");
//     for(let btn of btns){
//         btn.addEventListener("click",()=>{
//             let num = btn.value;
//             changeDice(num);
//         });
//     }
    
// });

// function changeDice(n){
//     const rand = Math.floor(Math.random()*6)+1;
//     const imgs = document.querySelectorAll("img");
    
//     imgs[0].setAttribute("src", `images/${rand}.png`);
//     imgs[1].setAttribute("src", `images/${n}.png`);
//     if(n==rand){
//         document.querySelector("#result").innerHTML="맞춤";
//     }else{
//         document.querySelector("#result").innerHTML="틀림";
//     }
// }

document.addEventListener("DOMContentLoaded",()=>{
    const imgs = document.querySelectorAll("section img");
    const bts = document.querySelectorAll("section button");

    for(let bt of bts){
        bt.addEventListener("click",()=>{
            const nc = Math.floor(Math.random()*6)+1;
            const n = parseInt(bt.innerHTML.slice(0));
            console.log(n);
            imgs[0].setAttribute("src", `images/${nc}.png`)
            imgs[1].setAttribute("src", `images/${n}.png`)

            if(n==nc){
                document.querySelector("#result").innerHTML="맞음";
            }else{
                document.querySelector("#result").innerHTML="틀림";
            }
        })
    }
})