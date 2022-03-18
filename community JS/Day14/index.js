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
            img.src = "https://item.kakaocdn.net/do/47b82cccfb62e78d71b1590e32a57e5e7154249a3890514a43687a85e6b6cc82"
            
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

    