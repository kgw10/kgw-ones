//board 

var 박스크기=25;
var 행=20;
var 열=20;
var board;
var context;

//snake
var snakeX=박스크기*5;
var snakeY=박스크기*5;

var 속도X=0;
var 속도Y=0;

var snakeBody=[];

//food
var foodX;
var foodY;

var gameOver=false;
var foodCount=0;
var 속도=100;

window.onload=function(){
    board=document.getElementById("board");
    board.height=행*박스크기;
    board.width=열*박스크기;
    context=board.getContext("2d"); //보드 그림 그리기
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 속도);
}

function update(){
    if(gameOver){
        return;
    }
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX,foodY,박스크기,박스크기);

    //뱀 몸 키우기
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([snakeX, snakeY]); // 뱀의 몸에 현재 좌표 추가
        placeFood(); // 새로운 음식 배치
        foodCount++;

        if(foodCount/5==1){
            alert("1단계")
            속도-=20;
            clearInterval(intervel);
            intervel=setInterval(update, 속도);
        }else if(foodCount/5==2){
            alert("2단계")
            속도-=20;
            clearInterval(intervel);
            intervel=setInterval(update, 속도);
        }else if(foodCount/5==3){
            alert("3단계")
            속도-=20;
            clearInterval(intervel);
            intervel=setInterval(update, 속도);
        }else if(foodCount==20){
            gameOver=true;
            alert("축하드립니다");
        }
    }

    
    
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    

    context.fillStyle="green";
    snakeX += 속도X*박스크기;
    snakeY += 속도Y*박스크기;
    context.fillRect(snakeX, snakeY, 박스크기, 박스크기);

    for(let i=0; i<snakeBody.length; i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1], 박스크기, 박스크기);
    }
    
    //게임오버 조건

    if(snakeX<0 || snakeX>열*박스크기 || snakeY<0 || snakeY>행*박스크기){
        gameOver=true;
        alert("게임 오버");
    }
    for(i=0; i<snakeBody.length; i++){
        if(snakeX==snakeBody[i][0] && snakeY==snakeBody[i][1]){
            gameOver=true;
            alert("게임 오버");
        }
    }

}
//방향키로 움직이기
function changeDirection(a){
    if(a.code=="ArrowUp" && 속도Y!=1){
        속도X=0;
        속도Y=-1;
    }
    else if(a.code=="ArrowDown" && 속도Y!=-1){
        속도X=0;
        속도Y=1;
    }
    else if(a.code=="ArrowLeft" && 속도X!=1){
        속도X=-1;
        속도Y=0;
    }
    else if(a.code=="ArrowRight" && 속도X!=-1){
        속도X=1;
        속도Y=0;
    }
}

function placeFood(){
foodX=Math.floor(Math.random()*열)*박스크기;
foodY=Math.floor(Math.random()*행)*박스크기;
}