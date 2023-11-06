// const calculateAverageGrade = (studentList) => {
//     let sum = 0
//     for(let students of studentList){
//         sum +=students.grade ;
//     }
//     let classAverage = sum / studentList.length;
//
//     // Your code here
//
//     return classAverage;
// };
//
// // Function to find the student with the highest grade
// const findTopStudent = (studentList) => {
//     let topStudent;
//     if (studentList.length ===0){
//         return "no grade found"
//
//     }
//     // Your code here
//
//     return topStudent;
// };
//
// //IIFE / Main
// (() => {
//     // Array of student objects
//     const students = [
//         { id: 1, name: "Alice", grade: 90 },
//         { id: 2, name: "Bob", grade: 85 },
//         { id: 3, name: "Charlie", grade: 78 },
//         { id: 4, name: "David", grade: 92 },
//         { id: 5, name: "Eva", grade: 88 },
//     ];
//     // Display the average grade and the top student
//     const averageGrade = calculateAverageGrade(students);
//     const topStudent = findTopStudent(students);
//
//     console.log(`Average Grade: ${averageGrade}`);
//     console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
// })();


// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
//
//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {
//
//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//
//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }
//
//     return array;
// }
// const creatPairs = (arr) =>{
//     arr = shuffle(arr)
//     let studentPairs=[]
//     while(arr.length > 0) {
//         let pair =[];
//         let student1 = arr.pop();
//         pair.push(student1)
//         if(arr.length ===0){
//             studentPairs[studentPairs,length -1].push(student1);
//         } else {
//             pair.push(student1)
//             let student2 = arr.pop();
//             pair.push(student2);
//             studentPairs.push(pair)
//         }
//     }
//
//     return studentPairs;
// }
//
// const student =["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"];
//  console.log(creatPairs(student));

function digitalRoot(n) {
}
let numArr = n.split ("")
let result;

while (numArr.length > 1) {
    resul= 0;
    for (let number of numArr){
        resul +=parseFloat(number);
    }
    result = parseFloat(numArr.join(""));
    return result

}

