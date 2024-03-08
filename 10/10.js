let lotto = [];

const lotto_Generate = ()=>{
    let i = 0;
    lotto =[];
    while(true){
        num = Math.floor(Math.random()*45)+1;
        if(!lotto.includes(num)){
            lotto.push(num);
            i++;
        }
        if(i==7) break;
    }
    let plus = document.querySelector("#plus");
    plus.style.display="inline";
    let balls = document.querySelectorAll("span");
    for(let i=0;i<balls.length;i++){
        balls[i].innerHTML = lotto[i];
        balls[i].style.display="inline"
        if(lotto[i]<=10){
            balls[i].style.backgroundColor="yellow"
        }else if(lotto[i]<=20){
            balls[i].style.backgroundColor="blue"
        }else if(lotto[i]<=30){
            balls[i].style.backgroundColor="red"
        }else if(lotto[i]<=40){
            balls[i].style.backgroundColor="grey"
        }else{
            balls[i].style.backgroundColor="green"
        }
    }
    
}

