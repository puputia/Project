// Q1. make a string out of an array
// 주어진 배열을 스트링으로 변환하는 문제
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', and ');
  console.log(result);
}

// Q2. make an array out of a string
// 주어진 스트링을 배열로 변환하는 문제
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 주어진 배열의 순서 거꾸로 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
/* 주어진 배열에서 첫번째, 두번째 요소를 제외한 
나머지 세개만 들어있는 새로운 배열 만들기*/ 
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// 점수가 90점인 학생을 찾아라
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// 학생들 중 수업에 등록한 학생들만 골라서 배열로 만들기
{ 
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 학생들의 배열중 점수만 뽑아와서 점수만 들어있는 새로운 배열 만들기
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 학생들 중에 점수가 50점보다 낮은 학생이 있는지 없는지 확인해라
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

console.clear();
// Q9. compute students' average score
// 학생들의 평균점수 구하기
{
  const result = students.reduce((prev, curr)=> prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 학생들의 모든 점수를 저런식으로 문자열로 변환해서 만들기
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 학생들의 점수를 정렬해서 즉 낮은점수가 먼저 나오게 하여 문자열로 변환하기

{
  const result = students
    .map(student => student.score)
    .sort((a,b) => b - a)
    .join();
  console.log(result);
}
