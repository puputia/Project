function onClick(){
    alert("첫 번째 이벤트");
}

function onClick2(){
    alert("두 번째  이벤트");
}

document.getElementById('clickMe').addEventListener('click', onClick); // 첫 번째 이벤트 연결
document.getElementById('clickMe').addEventListener('click', onClick2); // 두 번째 이벤트 연결