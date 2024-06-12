// 함수4.js

//브라우저에 모두 표시되면 발생하는 이벤트 onload

window.onload = function(){
    document.getElementById('calc').addEventListener('click', function(){
        // 입력한 필드에서 값 가져오는 것
        var 국어 = Number(document.getElementById('kor').value);
        var 수학 = Number(document.getElementById('mat').value);
        var 영어 = Number(document.getElementById('eng').value);
        var 역사 = Number(document.getElementById('his').value);

        var total = 총점계산(국어,수학,영어,역사);
        var avg =  평균계산(total);
        출력(total, avg);
    });
}

function 총점계산(a, b, c, d) {   // 총점 계산만 하는 함수
    var total = a+b+c+d;
    return total;
}

function 평균계산(total) {  // 평균 계산만 하는 함수.
    var avg = total / 4;
    return avg;
}

function 출력(total, avg) {   // 총점과 평균을 화면에 출력하는 함수
    // 총점값과 평균값을 표시
    document.getElementById("total").innerText = `총점 : ${total}점`;
    document.getElementById("avg").innerText = `평균 : ${avg}점`;
}