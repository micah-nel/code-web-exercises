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



    for(let i = 1; i <= 100; i++) {
        if (i % 3 ===0){
            console.log("Fiz")
        } else if (i % 5 ===0) {
            console.log("Buzz")
        } else if (i % 3  === 0 && i % 5 === 0){
            console.log("FizBuzz")
        }
    }



