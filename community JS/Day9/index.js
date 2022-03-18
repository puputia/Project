let yaiba = {
    title: "귀멸의 칼날 무한열차편",
    year: 2020,
    nation: "Japan",
    poster: "https://blog.kakaocdn.net/dn/c1Jtg7/btq3xoi2gHz/U18iyj18KGivfUfneDFe6k/img.jpg"
};

let Happy = {
    title: "해피데스데이",
    year: 2017,
    nation: "USA",
    poster: "http://t1.daumcdn.net/movie/c531165532ab82c965220a1a6d489eac8f8c0293"
};

let baby = {
    title: "보스베이비",
    year: 2017,
    nation: "USA",
    poster: "http://t1.daumcdn.net/movie/465b345e7844a74b7329f55ca81fd601222abdc6"
};

let aboutime = {
    title: "어바웃타임",
    year: 2013,
    nation: "UK",
    poster: "https://t1.daumcdn.net/cfile/blog/99A61E4C5D6A78DB27"
};

let title = document.getElementsByClassName("title");
let year = document.getElementsByClassName("year");
let nation = document.getElementsByClassName("nation");
let poster = document.getElementsByClassName("poster");
let info = document.getElementsByClassName("info");

function showMovieInfo(Movie) {
    console.log("test");
	title[0].innerHTML = Movie.title;
	year[0].innerHTML = Movie.year;
	nation[0].innerHTML = Movie.nation;
    poster[0].src = Movie.poster;
	info[0].classList.remove("hide");
}
 