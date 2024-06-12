// 함수4.js

//브라우저에 모두 표시되면 발생하는 이벤트 onload
// a= 10;
// a = a + ' ' + 20;

function print() {
    let div = document.getElementById("result");

    div.innerHTML = makeRandom;

}
function makeRandom(){
    let 내용='';
    for(let i = 1; i <4; i++){  // 5줄 표현하기 위한 반복문
        var line='';
        for(let j=0; j<4; j++){ // 한줄에 4개씩 숫자 표현하기 위한 반복문
            let randomnumber = Math.floor(Math.random() *50 +1);   // 1 ~50까지 랜덤값
            line = line+ " " + randomnumber;
        }
        내용 = 내용 + line + '<br>';
    }
    return 내용;
}


window.onload=function() {

}