//자바스크립트 데이터 타입
// 기본 타입
let n1 = 10;
let n2 = 10.5;
let s1 = "안녕하세요";
console.log("정수 : ",n1);
console.log("실수 : ",n2);
console.log("문자열 : ",s1);

for(let c of s1){
    console.log(c);
}

for(let i in s1){
    console.log(s1[i], i);
}

let arr = ['🍌',1,'🥕',2,'🍎',3];
console.log("배열 : ",arr);
console.log("배열의 요소 접근 : ",arr[1]);

let obj={'🍌':1,'🥕':2,'🍎':3}
console.log("오브젝트 : ",obj);
console.log("오브젝트의 요소 접근 : ",obj['🍎']);

console.log("배열의 맵")
// const arr2 = arr.map((v)=>{
//     return v+"👍";
// })
//콜백 body에 실행문이 없고 return문 하나만 있으면{}와 return 생략가능
const arr2 = arr.map((v)=>v+"👍");
console.log("=============")
console.log("arr2 = ",arr2)
for(let i in arr){
    console.log(arr[i], i);
}

for(let i in obj){
    console.log(obj[i], i);
}

for(let c in Object.entries(obj)){
    console.log("오브젝트 :",c);
}

for(let [k,v] of Object.entries(obj)){
    console.log("오브젝트키 : ",k)
    console.log("오브젝트값 : ",v)
}