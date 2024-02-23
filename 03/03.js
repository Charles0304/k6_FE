/*function handleClick(n){
    // document.getElementById("msgArea").innerHTML = "안녕하세요";
    document.querySelector("#msgArea").innerHTML="<h2>버튼"+n+"이 눌러졌습니다.</h2>"
    document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`
}*/

const handleClick = (n) =>{
    document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`
}

//DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOMContentLoaded ok");

    const bt3 = document.createElement("button");
    //bt3.setAttribute("id", "bt3");
    const bt3txt = document.createTextNode("버튼3");
    bt3.appendChild(bt3txt);
    
    document.querySelector("#btArea2").append(bt3);

    //버튼이벤트달기
    bt3.addEventListener("click",()=>{
        handleClick(3);
    });

    const bt4 = document.createElement("button");
    const bt4txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4txt);

    document.querySelector("#btArea2").append(bt4);
    bt4.addEventListener("click",()=>{
        handleClick(4);
    })
});