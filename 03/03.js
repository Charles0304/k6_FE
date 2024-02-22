function handleClick(n){
    // document.getElementById("msgArea").innerHTML = "안녕하세요";
    document.querySelector("#msgArea").innerHTML="<h2>버튼"+n+"이 눌러졌습니다.</h2>"
    document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`
}