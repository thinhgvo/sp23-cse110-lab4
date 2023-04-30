let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

let studentName = student.name;

let year = student['Grad Year'];

let favoriteTeacher = student['Favorite Teacher'].name;

let index = student.courseLoad[0];

console.log(studentName);

console.log(year);

student.greeting();

console.log(favoriteTeacher);

console.log(index);