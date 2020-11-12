let letter = []; //모든 편지 내용
let currentIndex = 1; // 현재 편지 숫자 변수 


// 편지는 최대 3개
for (let i = 1; i <= document.getElementById('letter-wrap-content').childElementCount; i++) {
    letter[i - 1] = document.getElementById('letter' + String(i)).innerHTML;
    document.getElementById('letter' + String(i)).innerHTML = "";
    var li = document.getElementById(String(i));

    // 아래 숫자 버튼 클릭 시, 해당 편지 이동 및 css효과
    li.addEventListener('click', function () {
        let currentNum = parseInt(event.srcElement.id);
        document.getElementById('letter-wrap-content').innerHTML = letter[currentNum - 1];
        let prev = document.getElementById(String(currentIndex));
        prev.style.backgroundColor = '#E8E8E8';
        prev.style.color = '#909090';
        let change = document.getElementById(String(currentNum));
        change.style.backgroundColor = '#4353a1';
        change.style.color = '#ffffff';
        currentIndex = currentNum;
        //페이지 이동에 따라서 화살표 변경
        replaceArrow();
    });

}

//checked 로 변경하여 css 효과 적용
document.getElementById(currentIndex).className = "letter-number checked";
replaceArrow();
//해당 편지내용 가져오기
document.getElementById("letter" + String(currentIndex)).innerHTML = letter[currentIndex - 1];


function prevBtn() {
    if (currentIndex > 1) {
        replaceNum(false);
    }
}

function nextBtn() {
    if (currentIndex < letter.length) {
        replaceNum(true);
    }
}

// 클릭된 숫자,이전 숫자 style 변경
function replaceNum(direction) {
    let prev = document.getElementById(String(currentIndex));
    prev.style.backgroundColor = '#E8E8E8';
    prev.style.color = '#909090';
    if (direction) {
        currentIndex += 1;
    }
    else {
        currentIndex -= 1;
    }
    document.getElementById('letter-wrap-content').innerHTML = letter[currentIndex - 1];
    let change = document.getElementById(String(currentIndex));
    change.style.backgroundColor = '#4353a1';
    change.style.color = '#ffffff';
    replaceArrow();
}

//화살표 교체(해당 숫자에 따라서) 
function replaceArrow() {
    if (letter.length > 1) {
        if (letter.length == 2) {
            currentIndex == 1 ? replacePrev() : replaceNext();
        } else {
            if (currentIndex == 2) {
                document.getElementById('prev').src = "/images/icons/chevron-back-outline-blue.svg";
                document.getElementById('next').src = "/images/icons/chevron-forward-outline-blue.svg";
            } else if (currentIndex == 1) {
                replacePrev();
            } else {
                replaceNext();
            }
        }
    } else {
        document.getElementById(String(currentIndex)).style.marginLeft = "30px";
    }
}

// 화살표 교체
function replacePrev() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline-blue.svg";
}


function replaceNext() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline-blue.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline.svg";
}

