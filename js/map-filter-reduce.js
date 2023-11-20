const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersWithThreeLanguages);

const userEmails = users.map(user => user.email);
console.log(userEmails)

const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

const averageYearsOfExperience = totalYearsOfExperience / users.length;

console.log("Total years of experience:", totalYearsOfExperience);
console.log("Average years of experience:", averageYearsOfExperience);
const longestEmail = users.reduce((longest, user) => (user.email.length > longest.length ? user.email : longest), '');

console.log("Longest email:", longestEmail);
const userNamesString = users.reduce((namesString, user) => namesString + user.name + ', ', '').slice(0, -2);

console.log("User names:", userNamesString);