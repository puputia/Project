// var json = 
// [
//     {
//         "a1" : "에이원",
//         "a2" : "에이투"
//     },

//     {
//         "b1" : "비원",
//         "b2" : "비투"
//     }
// ]
// console.log(json[0].a1)
// console.log(json[1].b2)

var json = 
[
    {
        "question" : "안녕!",
        "answer" : "안녕!"
    },
    {
        "question" : "나이?",
        "answer" : "비밀이다 냥!"
    },
    {
        "question" : "이름?",
        "answer" : "코묘~~!"
    }
]

var question = ""; // 사용자의 질문을 임시 저장할 변수
var answer = ""; // 사용자의 대답을 임시 저장할 변수

var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별한다.

function text_check(){
    var value = document.getElementById("console").value; // 사용자 입력값
    var replay = document.getElementById("cat_console");

    if(key == 1){ // key 값이 1인 경우, 사용자의 선택 유도
        if(value == "네"){
            replay.innerHTML = "대답을 입력해주세요!";
            key = 2; // key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
        }

        else{
            replay.innerHTML = "냐~!";
            key = 0; // key값을 다시 0으로 변경하여 상태 변경
        }
        return;
    }

    if(key == 2){
        answer = value; // 전역변수 answer값에 사용자의 입력을 저장
        push_json(); // json 데이터에 값을 추가하는 함수 (추후 생성)
    }

    for(let i = 0; i < json.length; i++){
        /*
            length는 배열(json) 같이 확인 함수입니다.
            위의 반복문은 json 데이터의 처음부터 끝까지 모두 확인하겠죠?
        */
       if(value == json[i].question){ // 만약 입력값이 json에 있는 question 데이터와 일치하면
           replay.innerHTML = json[i].answer; // 챗봇의 대답을 json의 answer로 출력해라
           return; // 함수 탈출
       }
    }
    // (말 배우기 코드)
    replay.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
    question = value; // 사용자의 질문을 미리 저장
    key = 1; // 조건문으로 진입하게 만들 키 값 변경
}

function push_json(){ 
    json.push({question: `${question}`, answer: `${answer}`}); // json이라는 데이터에 값을 추가하는 push함수
    document.getElementById("cat_console").innerHTML = "말을 배웠다 냥!";
    key = 0; // 키 값 0으로 초기화 
}