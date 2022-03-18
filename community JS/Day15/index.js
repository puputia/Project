var n = 0; // 몇 번째 입력인지 구분하기 위한 변수 선언 및 초기화 
var follow = 0;

function check_text() {
    var value = document.getElementById("console").value;
    var reply = document.getElementById("loopy_console");
    let img = document.getElementById("img");
    var app = document.getElementById('typed');
    
    var typewriter = new Typewriter(app, {
        loop: false
      });


    if(value == "불꺼줘"){
        if(n == 0){
            n++;
            reply.innerHTML = "싫은데? 내가왜 ^^";
            console.log(n);
            document.body.style.backgroundColor = 'crimson' // 말 안듣는 루피
            img.src = "https://item.kakaocdn.net/do/1d495862f49c38232ca8b6cc6a9679a08f324a0b9c48f77dbce3a43bd11ce785"
            
        }


        else if(n == 1) {
            n++;
            reply.innerHTML = "알았어~"
            document.body.style.backgroundColor = 'dimgray'
            img.src = "https://i.pinimg.com/originals/53/de/70/53de70172685637e8d9a094928ad4f4b.png"
        }

        else{
            reply.innerHTML = "웅!";
            document.body.style.backgroundColor = 'dimgray'
        }
    }
    else if(value == "나가기"){
        alert("정말 나갈꼬얌? ｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡");
    }

    else if(value == "불좀 꺼줄래? 내 램좀보게"){
        document.body.className = "ram";
    }

    else if(value == "불켜줘"){
        document.body.style.backgroundColor = "#ffffff";
        document.body.className = "";
    }

    else{
        console.log(value);
        document.body.className = "";
        
        typewriter.typeString("루피가 이해를 못했다")
            .pauseFor(1300)
            .deleteAll()
            .typeString("다시 한 번 말해보자.")
            .pauseFor(2500)
            .start();
        
        console.log(typewriter);
    }


    if(value == "나 따라해봐"){
        reply.innerHTML = "구랭";
        follow = 1; 
    }
    else if(value == "그만 따라해"){
        reply.innerHTML = "그만할겡"
        follow = 0;
    }
    else if(follow == 1){
        reply.innerHTML =  value + " 루피!";
    }
}

var json = 
[
    {   "img" : "https://i.pinimg.com/originals/91/19/23/911923b3743b47d601b801a4531a8823.png",
        "question" : "안녕",
        "answer" : "안녕 난 루피야! 만나서 정말 반가워"
    },

    {   
        "img" : "https://i.pinimg.com/originals/0d/af/b1/0dafb12b07363c60093410a0d34aa783.png".src,
        "question" : "나이",
        "answer" : "안알랴쥼😝"
    },

    {   "img" : "https://i.pinimg.com/originals/b2/16/97/b21697c38ef03af1c67d54f6b5cac44b.png".src,
        "question" : "좋아하는색",
        "answer" : "핑크!"
    },

    {   "img" : "https://i.pinimg.com/originals/42/30/2f/42302f6ace3098eee5959fdd985b2918.png",
        "question" : "생일",
        "answer" : "7월 31일이야~ 선물 줄꺼지?^^"
    },

    {   "img" : "https://i.pinimg.com/originals/91/19/23/911923b3743b47d601b801a4531a8823.png",
        "question" : "어디살아?",
        "answer" : "뽀롱뽀롱 마을에 살아!"
    },

    {   "img" : "https://item.kakaocdn.net/do/49af77ed647962e739c3f26189979525960f4ab09fe6e38bae8c63030c9b37f9",
        "question" : "루피무서워",
        "answer" : "뭐라고? 너 일로와바"
    }
]

var question = "";
var answer = "";
var key = 0;

function text_check(){
    var value = document.getElementById("console").value;
    var replay = document.getElementById("loopy_console");

    if(key == 1){
        if(value == "네"){
            replay.innerHTML = "대답을 입력해주세요!";
            key = 2;
        }

        else{
            replay.innerHTML = "헤헤";
            key = 0;
        }
        return;
    }

    if(key == 2){
        answer = value;
        push_json();
    }

    for(let i = 0; i < json.length; i++){
        if(value == json[i].question){
            replay.innerHTML = json[i].answer;
            return;
        }
    }
    replay.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
    question = value; 
    key = 1;
}

function push_json(){
    json.push({question: `${question}`, answer: `${answer}`});
    document.getElementById("loopy_console").innerHTML = "알려줘서 고마워!!"
    key = 0;
}