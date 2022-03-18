function check_text() {
    var value = document.getElementById("console").value;
    if(value == "나가기"){
    alert("정말 나갈꼬얌? ｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡");
    }

    else if(value == "불좀 꺼줄래? 내 램좀보게"){
    document.body.className = "ram";
    }

    else if(value == "불꺼줘"){
    document.body.style.backgroundColor = "dimgray";
    document.body.className = "";
    }

    else if(value == "불켜줘"){
    document.body.style.backgroundColor = "#ffffff";
    document.body.className = "";
    }

    else{
    console.log(value);
    document.body.className = "";
    }

}

 
 