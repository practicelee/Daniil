const lgTxt = document.querySelector(".typing");


function random(){
    const stringArr = ["Daniil Click Here ↓"];
    const stringIndex = stringArr[Math.floor(Math.random() * stringArr.length)];
    const stringSplit = stringIndex.split("");

    return stringSplit;
}

//리셋 후 타이핑 함수 다시 호출
function reset(){
    lgTxt.textContent = ""; //일단 텍스트를 빈값으로
    blinkTxt(random()); //타이핑 함수 다시 호출
}

//매개변수가 0보다 클때는 계속 반복적으로 호출, 한 문장 타이핑이 끝나면 리셋 함수 호출
function blinkTxt(arr){
    if(arr.length>0){
        lgTxt.textContent += arr.shift();
        setTimeout(function(){
            blinkTxt(arr);
        },200); 
    }else {
        setTimeout(reset(), 1000);
    }
}

blinkTxt(random());


//커서 깜빡이 효과
function blink(){
    lgTxt.classList.toggle("active");
}
setInterval(blink, 500);